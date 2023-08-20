
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
           return  <tr><td>{a.firstname}</td><td>{a.lastname}</td><td>{a.gender}</td></tr>
        
     })
    }
    
   </tbody>
</table>
    </>
  )
}

export default App
