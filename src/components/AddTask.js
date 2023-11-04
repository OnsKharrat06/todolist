import React from "react";
import { useState } from "react";


function AddTask({listOfTasks, addTask}){
   
    const [newTask, setNewTask] = useState({ 
        id: "",
        text: "",
        done: false,
        date: "",
    });

    const newId = listOfTasks.length ? listOfTasks[listOfTasks.length-1].id +1:1;
    const handleChange =(e)=>{
        
        setNewTask({
            ...newTask,
            text:e.target.value,
            id: newId,
        })

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask(newTask)
        setNewTask({
            id: "",
            text: "",
            done: false,
            date: "",
        });
    }
    
    return(
        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <label htmlFor="addItem" style={{fontSize:"20px", fontWeight:"bold", color:"green", padding:"15px",  marginTop:"30px"}}>Enter Your Task:</label>
                <input 
                autoFocus
                id="addItem"
                type="text" 
                required
                placeholder='Your task should go here ...'
                style={{height:"40px", width:"500px", marginTop:"55px"}}
                value={newTask.text}
                onChange={handleChange}
                />
                <button
                style={{fontSize:"20px", fontWeight:"bold", color:"white", background:"pink", padding:"9px 30px", borderRadius: "5px", border:"none", marginLeft:"40px"}} 
                type="submit"
                aria-label="Add Item"
                >Add
                </button>
            </form>
            
        </div>
    )

}
export default AddTask;