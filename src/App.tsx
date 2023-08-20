
import './App.css'
import React, { useState } from 'react';

function App() {
  const [todos,setTodos]=React.useState(['hometown','nellore','gayathri'])
  const students=[
    {
      'firstname':'Gayathri',
      'lastname':'Sada',
      'gender':'female'
    },
    {
      'firstname':'subbarao',
      'lastname':'Sada',
      'gender':'male'
    },
    {
      'firstname':'srivani',
      'lastname':'Sada',
      'gender':'female'
    },
    {
      'firstname':'surya',
      'lastname':'Sada',
      'gender':'male'
    }
  ];
function td(){
   const x =(document.getElementById("d1") as HTMLInputElement) .value;
   setTodos([...todos,x])
}



  return (
    <>
     <input type='text' id="d1"></input>
     <button onClick={td}>Add Todo</button>
      <ul>
        {
          todos.map((a)=>{
            return <li>{a}</li>
          })
        }
      </ul>
      <table border={2}>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Gender</th>
     <th>Options</th>
   </thead>
   <tbody>
    {
       students.map((a,i)=>{
           return  (<tr>
            <td>{a.firstname}</td>
            <td>{a.lastname}</td>
            <td>{a.gender}</td>
            <td>
            <button onClick={()}>Delete</button>
            </td>
            </tr>)
        
     })
    }
    
   </tbody>
</table>
    </>
  )
}

export default App
