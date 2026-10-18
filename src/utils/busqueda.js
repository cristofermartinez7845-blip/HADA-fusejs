import Fuse from 'fuse.js';

export function buscar(juegos, texto) {
  const consulta = texto.trim();
  if (consulta === '') return juegos;

  const fuse = new Fuse(juegos, {
    keys: ['nombre', 'categoria'],
    threshold: 0.4,
  });

  return fuse.search(consulta).map((resultado) => resultado.item);
}