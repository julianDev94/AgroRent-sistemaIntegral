export const INSURANCE_RATE = 0.05;

export const CATEGORIES = [
  'Todas',
  'Cosechadora',
  'Tractor',
  'Pulidora de Arroz',
  'Pulidora',
  'Cargadora',
];

export const LOCATIONS = ['Todas', 'Tucumán', 'Santiago del Estero', 'Salta', 'Catamarca'];

export const MACHINES = [

  { id: 1, name: 'John Deere S780', type: 'Cosechadora', brand: 'John Deere', price: 45000, rating: 4.9, reviews: 23, location: 'Tucumán', available: true, owner: 'AgroRent S.A.', img: 'https://static2.aastatic.com.ar/files/variants/1200/8d14e221305c4467923d33f9205ec655.jpg', desc: 'Cosechadora de alta capacidad para granos y cereales. Motor 543 HP.' },
  { id: 2, name: 'Case IH Magnum 340', type: 'Tractor', brand: 'Case IH', price: 32000, rating: 4.8, reviews: 18, location: 'Santiago del Estero', available: true, owner: 'Carlos García', img: 'https://static2.aastatic.com.ar/files/variants/1200/2b0cda50528b48d0b3593c93b6817a32.jpg', desc: 'Tractor de alta potencia con transmisión CVT. Ideal para laboreo intensivo.' },
  { id: 3, name: 'Massey Ferguson 278', type: 'Pulidora de Arroz', brand: 'Massey Ferguson', price: 18000, rating: 4.7, reviews: 12, location: 'Salta', available: true, owner: 'AgroSur S.R.L.', img: 'https://static2.aastatic.com.ar/files/variants/500/5d878790bf574c6b8f13a6b60852ac3e.jpg', desc: 'Pulidora de arroz de alta eficiencia. Capacidad: 8 ton/h.' },
  { id: 4, name: 'New Holland CR10.90', type: 'Cosechadora', brand: 'New Holland', price: 52000, rating: 5.0, reviews: 31, location: 'Tucumán', available: false, owner: 'AgroRent S.A.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ68MuFBDk2qc8bfRl9b5gs3IcH2tT1sykHpIVyWhk8w&s=10', desc: 'La cosechadora más potente de la gama. Torque de 653 HP.' },
  { id: 5, name: 'Valtra BH 194', type: 'Cargadora', brand: 'Valtra', price: 22000, rating: 4.6, reviews: 9, location: 'Catamarca', available: true, owner: 'AgroSur S.R.L.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_E3ajgOK3u8SMDa2cUmGJPVs6tknZ8ZAo1ExjAfuVKAnM3DOyIhW4aRI&s=10', desc: 'Cargadora frontal con capacidad de 2.5m³. Equipo versátil.' },
  { id: 6, name: 'Jacto Uniport 3030', type: 'Pulidora', brand: 'Jacto', price: 15000, rating: 4.5, reviews: 14, location: 'Tucumán', available: true, owner: 'Carlos García', img: 'https://static2.aastatic.com.ar/files/variants/1200/5281834168c94a679e630434bc17c0c7.jpg', desc: 'Pulidora autopropulsada de precisión para cultivos extensivos.' },
  { id: 7, name: 'Claas Lexion 8700', type: 'Cosechadora', brand: 'Claas', price: 48000, rating: 4.9, reviews: 27, location: 'Tucumán', available: true, owner: 'AgroRent S.A.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-evVnojgo_GcPf0cu-Nj9VpVxZnMrM0xb8CcN-SUDIfWh1wIm_vEWqw0&s=10', desc: 'Cosechadora premium con sistema CEMOS automático. 790 HP.' },
  { id: 8, name: 'Fendt 1050 Vario', type: 'Tractor', brand: 'Fendt', price: 38000, rating: 4.8, reviews: 15, location: 'Salta', available: true, owner: 'AgroSur S.R.L.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8CX0qMPP--VX2Mdbsz9MTfhXUOJGMvY58lnymICkxg&s', desc: 'Tractor de alta gama con transmisión Vario. 517 HP.' },
  { id: 9, name: 'AMAZONE Pantera 453', type: 'Pulidora', brand: 'Amazone', price: 20000, rating: 4.6, reviews: 11, location: 'Santiago del Estero', available: true, owner: 'Carlos García', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwD3A5VArwxR0iE1GLcHOzUwH9rWk6_pfBK0axG0LKxUlDu3Y-XxVZGCS&s=10', desc: 'Pulidora autopropulsada con sistema SmartCenter.' },

];

const RECOMMENDED_IDS = [3, 6];

export function machineById(id) {
  return MACHINES.find(m => m.id === id) || null;
}

export function recommendedMachines() {
  return RECOMMENDED_IDS.map(machineById).filter(Boolean);
}

export function filterMachines(filters) {
  return MACHINES.filter(m => {
    if (filters.category && filters.category !== 'Todas' && m.type !== filters.category) return false;
    if (filters.location && filters.location !== 'Todas' && m.location !== filters.location) return false;
    if (typeof filters.maxPrice === 'number' && m.price > filters.maxPrice) return false;
    return true;
  });
}
