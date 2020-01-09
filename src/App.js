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

  handleChange = (e) => {
    e.preventDefault();
   console.log('e', e.target)
   
  //  const {name, value, type, checked} = event.target
  //   type === "checkbox" ? 
  //       this.setState({
  //           [name]: checked
  //       })
  //   :
  //   this.setState({
  //       [name]: value
  //   }) 
    
    const { value, type } = e.target;
    if(type === 'checkbox') {
      console.log(e.target.data)
    }
    this.setState({ task: value})
  }

  removeTask = (id) => {
    const {list} = this.state;
    this.setState({
      list: list.filter( item => item.id !== id)
    });    
  }

  render() {
    const { task, count, list } = this.state;

    return (
      <div className="container">
        <div className="row">

          <div className="col s12  wrapper" >
            <header className="header">
              <Form onChange={this.handleChange} onSubmit={this.handleSubmit} value={task} />
            </header>

            {list.length? 
              <main className="body grey lighten-5">
                <Main list = {list}  removeTask={this.removeTask} handleChange={this.handleChange}/>              
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
