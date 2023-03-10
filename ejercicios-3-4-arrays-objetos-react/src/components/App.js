// EJERCICIO 1 - Lista de tareas con array de strings (Hecho pero no guardado).
// EJERCICIO 2 - Lista de tareas con array de objetos:

/* import '../styles/App.css'

 const App = () => {

    const tasks = [
        { task: 'Comprar harina, jamón y pan rallado', completed: true },
        { task: 'Hacer croquetas ricas', completed: true },
        { task: 'Ir a la puerta de un gimnasio', completed: false },
        {
            task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
            completed: false,
        },
    ];

    const renderTasks = () => {
        return tasks.map((tarea) => {
            if (tarea.completed === true) {
                return <li className="do-it">{tarea.task}</li>;
            } else if (tarea.completed === false) {
                return <li>{tarea.task}</li>;
            }
        });
    };

    return (
        <div>
            <h1>Mi lista de tareas:</h1>
            <ol>{renderTasks()}</ol>
        </div>
    );
};

export default App; */

// EJERCICIO 1 - Lista de tareas con los datos en el estado:

import '../styles/App.css'
import { useState } from 'react';

const App = () => {

    const [tasks, setTasks] = useState([
        { task: 'Comprar harina, jamón y pan rallado', completed: true },
        { task: 'Hacer croquetas ricas', completed: true },
        { task: 'Ir a la puerta de un gimnasio', completed: false },
        {
            task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
            completed: false
        }
    ]);

    const renderTasks = () => {
        return tasks.map((tarea, index) => {
            return <li className={tarea.completed ? "do-it" : ""} onClick={handleClick} id={index} key={index}>{tarea.task}</li>;
        });
    };


    function handleClick(ev) {
        const clickedTask = parseInt(ev.currentTarget.id);
        const foundTask = tasks.find((tarea, index) => index === clickedTask);
        foundTask.completed = !foundTask.completed

        setTasks([...tasks]);
    }

    return (
        <div>
            <h1>Mi lista de tareas:</h1>
            <ol>{renderTasks()}</ol>
        </div>
    );
};

export default App; 