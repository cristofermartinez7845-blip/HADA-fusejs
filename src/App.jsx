import { useState } from 'react';
import { juegos } from './data/juegos';
import ListaJuegos from './components/listajuegos';
import { buscar } from './utils/busqueda';
import './App.css';

function App() {
  const [texto, setTexto] = useState('');
  const resultados = buscar(juegos, texto);

  return (
    <div className="app">
      <h1>Catálogo de Videojuegos</h1>
      <input
        type="text"
        placeholder="Buscar videojuego..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <ListaJuegos juegos={resultados} />
    </div>
  );
}

export default App;