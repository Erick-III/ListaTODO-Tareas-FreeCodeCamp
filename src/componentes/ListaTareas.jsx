import TareaFormulario from "./TareaFormulario";
import '../estilos/ListaTareas.css';
import {useState} from 'react';
import Tarea from "./Tarea";

function ListaTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        let tareasActualizadas = null;
        let ajustarTexto = tarea.texto.trim();
        console.log("Tarea agregada");
        console.log(tarea);
        
        if(ajustarTexto){
            tarea.texto = ajustarTexto;
            tareasActualizadas = [tarea, ...tareas];
            //solo al llamar a setTareas se actualiza la app
            tareas.unshift("",tarea);
            /* tareas.splice(0,0,tarea) */
            console.log(tareas);
            /*DUDA
                Cuando se agrega tareasActualizadas funciona pero
                usando solo tareas no, al modificar el string si 
                detecta el cambio    
            */
            setTareas(/* tareas.unshift(tarea) */tareasActualizadas);
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea=>{
            if (tarea.id == id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    }

    return(
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tarea-lista-contenedor">
                {
                    tareas.map((tarea)=>(
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />  
                        )
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;