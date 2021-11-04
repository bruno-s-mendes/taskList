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
      taskList: [],
    }
    this.fetchtasks = this.fetchtasks.bind(this);
  }

  componentDidMount() {
    this.fetchtasks();
    this.setIsLoading(true);
  }
  
  fetchtasks = async () => {
    fetch(this.state.fetchURL)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => this.setState({ taskList: data }))
    .catch(error => {
      console.error('There was an error!', error);
  });;
  }

  setIsLoading = (value) => {
    this.setState({
      isLoading: value
    });
  };

  render() {
    if (this.state.isLoading){
      this.fetchtasks();
      this.setIsLoading(false);
    }
    return (
      <div className="App">
      <header className="">
        <h1>Lista de Tarefas</h1>
      </header>
      <AddTask isloading={this.state.isLoading} setIsloading={this.setIsLoading} fetchURL={this.state.fetchURL} />
      <TaskList taskList={this.state.taskList} setIsloading={this.setIsLoading} fetchURL={this.state.fetchURL} />
    </div>
    );
  }
}
