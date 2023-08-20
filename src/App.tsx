
import React, { useState } from 'react';
import './App.css'

function App() {
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
 const [count,setcount]=React.useState(1)
 //const [todo,settodo]=React.useState(['hometown','nellore','gayathri'])

function pqr(){
  setcount(count+1)
}
function abc(){
  setcount(count-1)
}
function td(){
  
}

  return (
    <>
      <table border={2}>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  (<tr style={(a.gender==='male')?{backgroundColor:'lightblue'}:{backgroundColor:'pink'}}>
            <td>{a.firstname}</td>
            <td>{a.lastname}</td>
            <td>{a.gender}</td>
            </tr>)
        
     })
    }
    
   </tbody>
</table>
<h1>{count}</h1>
<button onClick={pqr}>Increment</button>
<button onClick={abc}>Decrement</button><br>
</br>
<br></br>
<input type='text' id="d1"></input>
<button onClick={td}>Add Todo</button>

    </>
  )
}

export default App
