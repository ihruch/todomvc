import React from 'react';
import './Main.css';
import { Route, Switch } from 'react-router-dom';
import List from '../List';

const Main = ({...rest}) => {
    return(
        <Switch>
            <Route path="/" exact        render={ props => <List {...props} {...rest} filter="all" /> } /> 
            <Route path="/completed"     render={ props => <List {...props} {...rest} filter="completed" /> } /> 
            <Route path="/non-completed" render={ props => <List {...props} {...rest} filter="non-completed" /> } /> 
        </Switch>
    );
}

export default Main;