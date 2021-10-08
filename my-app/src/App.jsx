import React, {Component} from 'react';
import {
    Route,
    Switch,
    BrowserRouter,
} from "react-router-dom"

import ToDoList from './components/ToDoList/View';
import Workers from "./components/Worker/List";
import './App.css';

class App extends Component {
    render() {

        return (
            <div className="App">
                <nav>
                    <div>
                        <a href="/todolist">todos</a>
                        <a href="/workers">workers</a>
                    </div>
                </nav>
                <BrowserRouter>
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