import React from 'react';
import './Main.css';
import { Route, Switch } from 'react-router-dom';
import List from '../List';

const tasks = [
    {
        id: 1,
        text: "task numbe 1",
        completed: false
    },
    {
        id: 2,
        text: "task numbe 2",
        completed: true
    },
    {
        id: 3,
        text: "task numbe 3",
        completed: true
    },
    {
        id: 4,
        text: "task numbe 4",
        completed: true
    }
]

const Main = () => {

    return(
        <Switch>
            <Route path="/" exact        render={ props => <List {...props} list={tasks} filter="all" /> } /> 
               
            <Route path="/completed"     render={ props => <List {...props} list={tasks} filter="completed" /> } /> 
              
            <Route path="/non-completed" render={ props => <List {...props} list={tasks} filter="non-co" /> } /> 
                
        </Switch>
    );
}

export default Main;