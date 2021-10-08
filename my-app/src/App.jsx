import React, {Component} from 'react';
import {
    Route,
    Switch,
    BrowserRouter,
    Link
} from "react-router-dom"

import ToDoList from './components/ToDoList/View';
import Workers from "./components/Worker/List";
import './App.css';

class App extends Component {
    render() {

        return (
            <div className="App">
                <BrowserRouter>
                    <nav>
                        <div>
                            <Link to="/todolist">todos</Link>
                            <Link to="/workers">workers</Link>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/todolist">
                            <ToDoList/>
                        </Route>
                        <Route path="/workers">
                            <Workers/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;