
import './App.css'
import React, { useState } from 'react';

function App() {
  const [todos,setTodos]=React.useState(['hometown','nellore','gayathri'])
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
    </>
  )
}

export default App
