import React from 'react'
import { useState } from 'react'
function TodoList() {

    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTasks] = useState("");

    function handleInputchange(event){
        setNewTasks(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=>[...t,newTask]);
            setNewTasks("")
        }
        
    
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i)=> i !==index);
        setTasks(updatedTask)

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function moveTaskDown(index){
        if(index === tasks.length-1) return;
        const updatedTasks = [...tasks];
        [updatedTasks[index+1],updatedTasks[index]] =[updatedTasks[index],updatedTasks[index+1]]
        setTasks(updatedTasks)
        
    }


  
    return (
    <>
      <div className='to-do-list text-center my-5'>
        <h1 className='text-8xl text-center font-bold font-serif'>To-Do-List</h1>
        <div className='my-3'>
            <input 
                type="text" 
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputchange}
                className='bg-gray-200 mx-4 h-8 px-2 rounded-3xl w-100'/>
            <button type='submit' className='add-button text-white bg-blue-800 px-4 py-2 rounded-3xl text-sm' onClick={addTask}>Add</button>
        </div>
      </div>
      <ol>
        {tasks.map((task,index) =>
            <li className="text-2xl my-1 bg-gray-100 text-center" key={index}>
                <span className='text  mx-5 '>{task}</span>
                <button className='move-button text-white bg-green-800 ml-2 rounded-2xl text-xl w-30' onClick={()=>moveTaskUp(index)}>UP</button>
                <button className='move-button text-white bg-red-800 ml-2 rounded-2xl text-xl w-30' onClick={()=>moveTaskDown(index)}>Down</button>
                <button className='delete-button text-white bg-blue-800 ml-2 rounded-2xl text-xl w-30' onClick={()=>deleteTask(index)}>Delete</button>

            </li>
        )}
      </ol>
    </>
  )
}

export default TodoList
