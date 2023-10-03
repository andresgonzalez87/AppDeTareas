"use client"
import { useState } from "react";


export default function ListaDeTareas() {
    
    const [tareas, setTareas] = useState([
        {
            title: 'Aprender HTML',
            completed: false,
            description: 'Lenguaje de Marcado de Hipertexto'
        },
        {
            title: 'Aprender CSS',
            completed: false,
            description: 'Apariencia de un sitio'
        },
        {
            title: 'Aprender JAVASCRIPT',
            completed: false,
            description: 'Funcionalidades a las páginas web'
        },
    ]);

    const [filtroCompletadas, setFiltroCompletadas] = useState(false);
    
    const [valueTarea, setValueTarea] = useState('')
    const [valueDescripcion, setValueDescripcion] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);

    const tareaIngresada = e =>
        {setValueTarea(e.target.value)}

    const descripcionIngresada = e => {
        setValueDescripcion(e.target.value);};

    const nuevaTarea = e => {
        e.preventDefault();
        if (valueTarea !== '') {
            const nuevaTarea = {
                title: valueTarea,
                completed: false,
                description: valueDescripcion
            };
            const updateTareas = [...tareas, nuevaTarea];
            setTareas(updateTareas);
            setValueTarea('');
            setValueDescripcion('');
        }
    };

    const tareaCompleted = i => {
        const updateTareas = [...tareas]
        updateTareas[i].completed = !updateTareas[i].completed
        setTareas(updateTareas)
    }

    const eliminarTarea = (index) => {
        const updateTareas = [...tareas];
        updateTareas.splice(index, 1);
        setTareas(updateTareas);
    };

    const editarTarea = (index) => {
        setEditingIndex(index); 
        const tareaEnEdicion = tareas[index];
        setValueTarea(tareaEnEdicion.title);
        setValueDescripcion(tareaEnEdicion.description);
    };

    const actualizarTareaEditada = (index) => {
        const updateTareas = [...tareas];
        updateTareas[index].title = valueTarea;
        updateTareas[index].description = valueDescripcion;
        setTareas(updateTareas);
        setEditingIndex(-1);
        setValueTarea('');
        setValueDescripcion('');
    }

    const toggleFiltroCompletadas = () => {
        setFiltroCompletadas(!filtroCompletadas)};


    return (
        <>
            <section className="form-register">
               <h4>Lista de tareas</h4>
               <form onSubmit={nuevaTarea}>
                    <input 
                        className="form-input" 
                        type="text" 
                        value={valueTarea} 
                        onChange={tareaIngresada} 
                        placeholder="Ingresar tarea" 
                    />
                    <textarea 
                        className="form-input" 
                        value={valueDescripcion} 
                        onChange={descripcionIngresada} 
                        placeholder="Ingresar descripción" 
                    />
                    <button 
                        className="form-button" 
                        type="submit">
                            Añadir tarea
                    </button>
                    <ol>
                        {tareas.map((tarea, i) => {
                            if (!filtroCompletadas || !tarea.completed) {
                                return (
                                    <li key={i}>
                                        {editingIndex === i ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={valueTarea}
                                                    onChange={tareaIngresada}
                                                    placeholder="Ingresar tarea"
                                                />
                                                <textarea
                                                    value={valueDescripcion}
                                                    onChange={descripcionIngresada}
                                                    placeholder="Ingresar descripción"
                                                />
                                                <button 
                                                    className="form-button-eliminar" 
                                                    onClick={() => actualizarTareaEditada(i)}>
                                                        Guardar
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <span>{tarea.title}</span>
                                                <p>{tarea.description}</p>
                                                <label>
                                                    Marcar como realizado 
                                                    <input
                                                        className="checkbox"
                                                        type="checkbox"
                                                        checked={tarea.completed}
                                                        onChange={() => tareaCompleted(i)}
                                                    />
                                                </label>
                                                <label>
                                                    Eliminar tarea
                                                    <button 
                                                        className="form-button-eliminar" 
                                                        onClick={() => eliminarTarea(i)}>
                                                            X
                                                    </button>
                                                </label>
                                                <button 
                                                    className="form-button-eliminar" 
                                                    onClick={() => editarTarea(i)}>
                                                        Editar
                                                </button> 
                                            </>
                                        ) }
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ol>
               </form>
            </section>
            <div className="filtro">
                <label>
                    Mostrar solo tareas incompletas
                    <input
                        type="checkbox"
                        checked={filtroCompletadas}
                        onChange={toggleFiltroCompletadas}
                    />
                </label>
            </div>

        </>
    )
}