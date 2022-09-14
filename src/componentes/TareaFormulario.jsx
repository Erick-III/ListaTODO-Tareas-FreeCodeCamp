import '../estilos/TareaFormulario.css'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();//evita que no cargue toda la app
        console.log("enviando");
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}
        >
            <input 
                className="tarea-input"
                type='text'
                placeholder='Escribi una tarea'
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                agregar tarea
            </button>
        </form>
    );
}

export default TareaFormulario;