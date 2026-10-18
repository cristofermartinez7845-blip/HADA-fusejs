import { juegos } from './data/juegos';
import listajuegos from './components/listajuegos';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Catálogo de Videojuegos</h1>
      <ListaJuegos juegos={juegos} />
    </div>
  );
}

export default App;