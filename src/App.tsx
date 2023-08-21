
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
  const st = [
    {
      firstname:"Praveen",
      lastname:"Gubbala",
      age:40,
      gender:"male"
    },
    {
      firstname:"Smrithi",
      lastname:"mandana",
      age:25,
      gender:'female'
    },
    {
      firstname:"mithali",
      lastname:"raj",
      age:39,
      gender:'female'
    },
    {
      firstname:"Rohit",
      lastname:"Sharma",
      age:35,
      gender:'male'
    },
    {
      firstname:"Sachin",
      lastname:"Tendulkar",
      age:50,
      gender:'male'
    },
]
  const ob = {
    'Name':'Praveen',
    'Gender':'Male',
    'Age':40
  };
  const a='blue'
  const b='green'
  const c=15
  const d=-17
  const img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbtVg2fLxe8OtXiXMAJR0eNpSvJEpOOfa_A&usqp=CAU"
  const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURX2Kk-K0pADHprcHIfOU8t35dHmWl6oBjw5I77_0Cj3PxJUfRgdoaNgh8kgZCiXFOZc&usqp=CAU"
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

<div style={{border:'1px solid'}}>
{
 Object.entries(ob).map((a)=>{ 
  return (<div style={(a[0]==='firstname')?{fontWeight:'bold'}:{}}{...(a[0]==='lastname')?{}:{fontStyle:'italic'}}>{a[0]}:{a[1]}</div>)
  
 })
}
</div>
<div style={{display:'flex',flexWrap:'wrap'}}>
 {
  students.map((a)=>{
    
    return  (<div style={{border:'1px solid',padding:'10px',margin:'10px'}}>
    <div style={a.gender==='male'?{backgroundColor:'lightblue'}:{backgroundColor:'pink'}}>
      <p>FirstName:{a.firstname}</p>
      <p>LastName:{a.lastname}</p>
      <p>Gender:{a.gender}</p>
    </div>
    </div>)
  })
  }
</div>
<div style={{display:'flex',flexWrap:'wrap'}}>
 {
  students.map((a)=>{
    
    return  (<div style={{border:'1px solid',padding:'10px',margin:'10px'}}>
    <div style={a.gender==='male'?{backgroundColor:'lightblue'}:{backgroundColor:'pink'}}>
      <p>FirstName:{a.firstname}</p>
      <p>LastName:{a.lastname}</p>
      <p>Gender:{a.gender}</p>
      
    </div>
    <div><img src={a.gender==='male'?img1:img2} alt="" /></div>
    </div> )
  })
  }
</div>
<table border={2}>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>AGe</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       st.map((a)=>{
           return  (<tr>
            <td>{a.firstname}</td>
            <td>{a.lastname}</td>
            <td>{a.age}</td>
            <td>{a.gender}</td>
            </tr>)
        
     })
    }
    
   </tbody>
</table>
<h1 style={{color:a}}>Hello Edupoly</h1>
<h1 style={{color:b}}>Hello Gayathri</h1>
<h1 style={{color:a,backgroundColor:b}}>Hello Edupoly</h1>
<h1 style={{border:'1px solid',borderWidth:c}}>Hello Edupoly</h1>
<h1 style={c%2===0?{backgroundColor:'green'}:{backgroundColor:'red'}}>{c}</h1>
<h1 style={c%2===0?{color:'green'}:{color:'red'}}>{c}</h1>
<h1 style={d>=0?{color:'pink'}:{color:'blue'}}>{d}</h1>
<h1 style={a.length%2===0?{color:'green'}:{color:'red'}}>{a}</h1>
{
  br.map((a)=>{
    return <li style={a.length%2===0?{color:'green'}:{color:'red'}}>{a}</li>
  })
}
    </>
  )
}

export default App
