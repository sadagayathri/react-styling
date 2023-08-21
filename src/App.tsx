
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {

  const [count,setcount] = React.useState([
    {
      firstname:"praveen",
      lastname:"Gubbala",
      age:40,
      gender:"male"
    },
    {
      firstname:"mrithi",
      lastname:"mandana",
      age:25,
      gender:'female'
    },
    {
      firstname:"dithali",
      lastname:"raj",
      age:39,
      gender:'female'
    },
    {
      firstname:"rohit",
      lastname:"Sharma",
      age:35,
      gender:'male'
    },
    {
      firstname:"sachin",
      lastname:"Tendulkar",
      age:50,
      gender:'male'
    },
])
function abc(){
  setcount([...count].sort((b,c)=>{
    return (c.firstname<b.firstname)?1:-1

  }))
}

  return (
    <>
      <table border={2}>
   
   <thead>
     <th onClick={abc}>firstname</th>
     <th>Lastname</th>
     <th>Age</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       count.map((a)=>{
           return  <tr>
            <td>{a.firstname}</td>
            <td>{a.lastname}</td>
            <td>{a.age}</td>
            <td>{a.gender}</td>
            </tr>
        
     })
    }
    
   </tbody>
</table>
    </>
  )
}

export default App
