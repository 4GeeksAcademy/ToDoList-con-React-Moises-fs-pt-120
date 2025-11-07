import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';


const Home = () => {

    const [task, setTask] = useState("");
    const [todo, setTodo] = useState([]);

    return (
        <div className="container">
            <h1>todos</h1>

            <div className="caja">
                <input
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && task.trim() !== "") {
                            setTodo([...todo, task]);
                            setTask("");
                        }
                    }}
                    type="text"
                    value={task}
                    placeholder="Whats need to be done?">
                </input>

                <ul className="listas">
                    {todo.length === 0 ? (
                        <li> No hay tareas, añadir tareas </li>
                    ) : null}

                    {todo.map((item, index) => (
                        <li>
                            {item} {" "}
                            <i onClick={() => {
                                setTodo(
                                    todo.filter(
                                        (t, currentIndex) => index !== currentIndex
                                    )
                                )
                            }

                            } > <FontAwesomeIcon icon={faCircleXmark} /> </i>
                        </li>
                    ))}

                </ul>
                <div className="contador"> {todo.length} task left</div>
            </div>
        </div >
    );

};



export default Home;