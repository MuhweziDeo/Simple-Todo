import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/argon.css'
import Todos from './Todos';
import AddTodo from './AddTodos';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/services';
import About from './components/About';
import Post from './components/Post';

class App extends Component {
  state={
    todos:[
      {id:1,content:'to do one',user:"dee"},
      {id:2,content:'to do two',user:"dee2"},
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id !==id;
     
    })
    this.setState({
      todos:todos
    })
  }
  AddTodo=(todo)=>{
    todo.id=this.state.todos.length +1
    const todos=[...this.state.todos,todo]
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/'  component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/about' component={About}/>
        <Route  path="/:post_id" component={Post} />
        </Switch>
        
        
          <h1 className="text-center">Todos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.AddTodo} />
        </div>
      </BrowserRouter>
   
    );
  }
}

export default App;
