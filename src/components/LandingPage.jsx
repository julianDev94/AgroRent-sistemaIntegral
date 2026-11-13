import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero'
import Benefits from './Benefits'
import FeaturedMachines from './FeaturedMachines'
import InfoBlocks from './InfoBlocks'
import Faq from './Faq'

export default function LandingPage() {
  const { hash, key } = useLocation();

  /* Un <a href="#seccion"> pelado solo busca el id en el documento actual, asi
     que desde /catalogo el clic no hacia nada. Los links del nav apuntan a
     "/#seccion" para que react-router rutee aca, y este efecto hace el
     desplazamiento que el navegador no hace en una SPA. */
  useEffect(() => {
    const id = hash.slice(1);
    if (!id) {
      /* Al volver al inicio (link "Inicio", logo o "/") el hash queda vacio.
         Sin esto la SPA conserva el scroll anterior y parece que el clic no
         hizo nada. Depende tambien de `key` para que un clic en Inicio estando
         ya en "/" vuelva arriba igual. */
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    /* Las imagenes con loading="lazy" cambian el alto del documento despues del
       montage, asi que el primer scroll puede quedar a destajo del objetivo.
       Reintentamos cuando terminen de cargar y un par de frames despues. */
    const again = () => target.scrollIntoView({ block: 'start' });

    const frames = [1, 2].map(() => requestAnimationFrame(() => requestAnimationFrame(again)));
    if (document.readyState !== 'complete') {
      window.addEventListener('load', again, { once: true });
    }

    return () => {
      frames.forEach(cancelAnimationFrame);
      window.removeEventListener('load', again);
    };
  }, [hash, key]);

  return (
    <main>
      <Hero />
      <Benefits />
      <FeaturedMachines />
      <InfoBlocks />
      <Faq />
    </main>
  )
}
