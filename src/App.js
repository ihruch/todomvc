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
        id: 1, 
        list: [],
      }

    }

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, id } = this.state;

    const newTask = {
      id,
      text: task, 
      completed: false
    }
    this.setState( prevState => {     
      return {
        task: '',
        id: prevState.id + 1, 
        list: [...prevState.list, newTask],
      }      
    })
  }


  handleCheckbox = (id) => {
    const { list } = this.state;
    
    const newList = list.map( elem => {  
      if(elem.id === id) {elem.completed = !elem.completed};
      return elem;       
    })
    console.log('newList', newList);
    this.setState({ list: newList})
  } 

  handleChange = (e) => {
    e.preventDefault();
    console.log('e', e.target)
   
    const { value } = e.target;
    this.setState({ task: value})
  }

  removeTask = (id) => {
    const {list} = this.state;
    this.setState({
      list: list.filter( item => item.id !== id)
    });    
  }

  render() {
    const { task, list } = this.state;

    return (
      <div className="container">
        <div className="row">

          <div className="col s12 wrapper" >
            <header className="header">
              <Form onChange={this.handleChange} onSubmit={this.handleSubmit} value={task} />
            </header>

            {list.length? 
              <main className="body grey lighten-5">
                <Main list = {list}  removeTask={this.removeTask} handleCheckbox={this.handleCheckbox}/>              
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
