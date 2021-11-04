import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
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

export default App;
