import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCamp-Logo.png';
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp logo'
         />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        {/* <Tarea 
          texto="Aprender react"
        /> */}
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
