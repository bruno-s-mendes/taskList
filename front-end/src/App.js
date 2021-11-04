import './App.css';
import React, { Component } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    }
  }

  render() {
    return (
      <div className="App">
      <header className="">
        <h1>Lista de Tarefas</h1>
      </header>
      <AddTask/>
      <TaskList/>
    </div>
    );
  }
}
