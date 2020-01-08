import React from 'react';
import { Route, Switch, NavLink} from 'react-router-dom';

import Main from './Components/Main';
import Form from './Components/Form';

import 'materialize-css';
import './App.css';


class App extends React.Component {
  render() {

    return (
      <div className="container">
        <div className="row">

          <div className="col s12  wrapper" >
            <header className="header">
                <Form />
            </header>

            <main className="body grey lighten-5">
              <Main />              
              <div class="divider"></div> 
              <div className="nav">
                <NavLink to="/" exact activeClassName="isActive ">all</NavLink>
                <NavLink to="/completed" activeClassName="isActive  ">completed</NavLink>
                <NavLink to="/non-completed" activeClassName="isActive ">non-completed</NavLink>
              </div>
            </main>
            
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
