import React from 'react';

import Main from './Components/Main';
import Form from './Components/Form';
import Navlink from './Components/Navlink';

import 'materialize-css';
import './App.css';


class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        task: '',
        count: 1, 
        list: [],
      }

    }

  handleSubmit = () => {

  } 

  handleChange = () => {

  }

  removeItem = () => {

  }

  render() {
    const { task, count, list } = this.state;

    return (
      <div className="container">
        <div className="row">

          <div className="col s12  wrapper" >
            <header className="header">
              <Form onChange={this.handleSubmit} onSubmit={this.handleChange} />
            </header>

            {list.length? 
              <main className="body grey lighten-5">
                <Main />              
                <div className="divider"></div> 
                <div className="nav">
                  <Navlink />
                </div>
              </main>
              : 
              null }
            
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
