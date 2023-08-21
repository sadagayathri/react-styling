
import './App.css'

function App() {
  function abc(e){
    console.log(e)
    
  }
  function ab(e){
    console.log(e.clientX)
    console.log(e.clientY)
  }
  function tx(e){
    console.log(e.target.innerHTML)
  }
  function dd(e){
    console.log(e.target.id)
  }
  function ale(){
const inp=document.getElementById("inp")
console.log(inp.value)
  }
  function ale1(){
   document.getElementById('h').innerHTML=document.getElementById("inp1").value
    
      }
  function ale2(){
    document.getElementById('hh').innerHTML=document.getElementById("inp2").value.toUpperCase()
         
           }
  function ale3(){
    document.getElementById('i').innerHTML=document.getElementById("inp3").value.toUpperCase()
                 
           }
  return (
    <>
      <button onClick={(()=>{alert("Hello Edupoly")})}>Click here to see alert</button>

      <button onClick={(()=>{console.log("Hello Edupoly")})}>Click here to see alert</button>

      <button onClick={(abc)}>Click here to see alert</button>

      <div style={{width:'200px',height:'200px',border:'2px solid'}} onClick={(abc)}>Click here to see alert</div>

      <div style={{width:'300px',height:'200px',border:'2px solid'}} onClick={(ab)}>Click here to see alert</div>

      <div style={{width:'200px',height:'200px',border:'2px solid'}} onClick={(tx)}>Welcome to Edupoly ReactJS</div>

      <div id="mydiv" style={{width:'200px',height:'200px',border:'2px solid'}} onClick={(dd)}>Welcome to Edupoly ReactJS</div>

      <h1 onClick={(tx)}>Welcome to Edupoly ReactJS</h1>

      <input type="text" id="inp" />
      <button onClick={(ale)}>Click here to see alert</button>

      <input type="text" id="inp1" />
      <button onClick={(ale1)}>Click here to see alert</button>
      <h1 id="h"></h1>

      <input type="text" id="inp2" />
      <button onClick={(ale2)}>Click here to see alert</button>
      <h1 id="hh"></h1>
      
      <input type="text" id="inp3" onKeyUp={(ale3)} />
      <h1 id="i"></h1>
      
    </>
  )
}

export default App
