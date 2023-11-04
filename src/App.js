import './App.css';
import AddTask from './components/AddTask';
import List from './components/List';
import SingleTask from './components/SingleTask';
import React,{useState} from 'react';
import background from './assets/background.png';

const list = 
  [
  { id: "0", text: "Apply for US Visa", done: false, date: new Date() }, 
  { id: "1", text: "Eat Healthy", done: false, date: new Date() }, 
  { id: "2", text: "Go to the gym", done: false, date: new Date()}
  ]
  

function App() {
  const [listOfTasks, setList]=useState(list);

  

  const handleDelete = (id) => {
    setList(listOfTasks.filter((elt) => elt.id !== id));
  };

  const handleDone = (id) => {
      setList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done} : task
      )
    );
  };


  const addTask = (task) => {
    const addedList = [...listOfTasks, task]; 
    setList(addedList);
  }
  

  return (
    <div  style={{backgroundImage:`url(${background})`, backgroundSize:"cover", minHeight:"100vh"}}> 
      <div className="App">
        <AddTask  listOfTasks= {listOfTasks} addTask={addTask}/>
        <List listOfTasks={listOfTasks} handleDelete={handleDelete} handleDone={handleDone} />
        
      </div>
      
    </div>
  );
}

export default App;
