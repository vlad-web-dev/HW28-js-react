import {useState} from "react";

function AddTask({onAdd}) {
    const [title, setTitle] = useState('')
    const [completed] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({title, completed})
        setTitle('')
    }
    return (
        <form onSubmit={onSubmit} className="form">
            <input placeholder="Add Todo.." type="text" value={title} className="input-text" name="" required
                   onChange={(e) => setTitle(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
    );
}

export default AddTask;
