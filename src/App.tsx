
import './App.css'
import React from 'react'
function App() {
  const [name,setName]=React.useState("")
  const [phonenumber,setPhonemunber]=React.useState("")
  const [email,setEmail]=React.useState("")
  function save(){
    window.localStorage.setItem("name",name)
    window.localStorage.setItem("phonenumber",phonenumber)
    window.localStorage.setItem("email",email)
  }

  return (
    <>
      <input type="text" onChange={(event)=>{event.target.value}}/>
      <br />
      <input type="text" onChange={(event)=>{event.target.value}}/>
      <br />
      <input type="text" onChange={(event)=>{event.target.value}}/>
      <br />
      <button onClick={()=>{save}}>Save</button>
    </>
  )
}

export default App
