import './App.css';
import React, { Component } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      fetchURL: 'http://localhost:3100/',
    }
  }

  setIsLoading = (value) => {
    this.setState({
      isLoading: value
    });
  };

  render() {
    return (
      <div className="App">
      <header className="">
        <h1>Lista de Tarefas</h1>
      </header>
      <AddTask isloading={this.state.isLoading} setIsloading={this.setIsLoading} fetchURL={this.state.fetchURL} />
      <TaskList isloading={this.state.isLoading} setIsloading={this.setIsLoading} fetchURL={this.state.fetchURL} />
    </div>
    );
  }
}
