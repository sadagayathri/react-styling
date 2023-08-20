
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
  const ob = {
    'Name':'Praveen',
    'Gender':'Male',
    'Age':40
  };
  const ar=[12,35,17,6,7]
  const br=['gayathri','srivani','subbarao','suryapavan']
 const [count,setcount]=React.useState(1)
 //const [todo,settodo]=React.useState(['hometown','nellore','gayathri'])

function pqr(){
  setcount(count+1)
}
function abc(){
  setcount(count-1)
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
<h1 style={{color:"red"}}>Hello Edupoly</h1>
<h1 style={{color:"red",backgroundColor:"green"}}>Hello Edupoly</h1>

<div style={{display:'flex'}}>
 {
  ar.map((a)=>{
    return <span style={{border:'1px solid',margin:'10px',padding:'10px'}}>{a}</span>
  })
 }
</div>
<div style={{display:'flex'}}>
 {
  br.map((a)=>{
    return <span style={{border:'1px solid',margin:'10px',padding:'10px'}}>{a}</span>
  })
 }
</div>

<div style={{border:'1px solid',margin:'10px',padding:'10px'}}>{
  Object.entries(ob).map((a)=>{
    return <div>{<h1>{a[0]}</h1>}:{<h4>{a[1]}</h4>}</div>
    
  })
}
</div>
<div style={{border:'1px solid',margin:'10px',padding:'10px'}}>{
 <h1></h1>
}
</div>

    </>
  )
}

export default App
