# Catálogo de Videojuegos (HADA)

Aplicación en React + Vite que muestra un catálogo de videojuegos con un buscador.

## Biblioteca de terceros agregada

**fuse.js** (versión ^7.5.0): biblioteca de búsqueda aproximada (fuzzy search).

**Para qué se usa:** el catálogo no tenía buscador. Con fuse.js se agregó una búsqueda por nombre y categoría que tolera errores de escritura. Por ejemplo, al escribir "zelad" se encuentra "The Legend of Zelda".

**Cómo está integrada:** solo el archivo `src/utils/busqueda.js` (el adaptador) importa fuse.js. El resto de la aplicación usa la función `buscar(juegos, texto)`. Si se quisiera cambiar de biblioteca, solo habría que modificar ese archivo.

## Cómo instalar y ejecutar

```bash
npm install
npm run dev
```

Luego abrir http://localhost:5173/ en el navegador.