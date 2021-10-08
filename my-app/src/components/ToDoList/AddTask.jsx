/*import {useState} from "react";


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

export default AddTask;*/

import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            completed: false
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                <input placeholder="Add Todo.." type="text" value={this.state.title} className="input-text" name="" required
                       onChange={(e) => this.handleChange(e)}/>
                <button className="btn btn-success">Add</button>
            </form>
        );
    }
    handleChange(e) {
        this.setState({title: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.onAdd(this.state)
        this.setState({
            title: ''
        })
    }
}
export default AddTask