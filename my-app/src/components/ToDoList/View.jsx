import AddTask from './AddTask'
import Tasks from "./Tasks";
import Loader from "../Loader/Loader";
import {useState, useEffect} from "react";
import './css/ToDoList.css';

const resource = 'http://localhost:3004'

export default function View() {
    let [todos, setTodos] = useState([])
    let [loading, setLoading] = useState(true)
    useEffect(() => {
        const getTasks = async () => {
           await fetchTodos()
               .then(tasks => {
                   setLoading(false)
                   setTodos(tasks)
               })
               .catch(() => setLoading(false))

        }
        getTasks()
    }, [])

    //fetch todos
    const fetchTodos = async () => {
        return await fetch(`${resource}/todos`)
            .then(res => res.json())
    }

    // delete task
    const deleteTask = async (id) => {
        await fetch(`${resource}/todos/${id}`, {
            method: 'DELETE'
        })
        setTodos(todos.filter((todo => todo.id !== id)))
    }

    //add task
    const addTask = async (task) => {
        await fetch(`${resource}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                setTodos([...todos, data])
            })
    }

    // change task
    const changeTask = async (task) => {
        task.completed = !task.completed
        await fetch(`${resource}/todos/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                setTodos(
                    todos.map((el) => el.id === task.id ? {...el, completed: data.completed} : el)
                )
            })
    }

    return (
        <div>
            <div className="header">
                <h2> Tasks</h2>
            </div>
            {loading ? <Loader/> : <div className="body">
                {todos.length ?
                    <Tasks todos={todos} onDelete={deleteTask} onChangeStatus={changeTask}/>
                    : <p>No tasks to show</p>}
            </div>}
            <AddTask onAdd={addTask}/>
        </div>
    );
}
