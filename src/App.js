
import './App.css';
import Carrusel from './act1/carousel';
import Boton from './act1/button';
import Escape from './act1/esc';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <header className="principal">
        <Boton/>
        <Escape/>
      </header>
      <body>
      <Carrusel />
      </body>
      
      </header>
    </div>
  );
}

export default App;
