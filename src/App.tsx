
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
  function ale4(){
    document.getElementById('i1').innerHTML=document.getElementById("inp4").value.toUpperCase()
                         
        }
  function ale5(){
    document.getElementById('i2').innerHTML=document.getElementById("inp5").value
        }
  function ale6(){
    i2.innerHTML=''
    inp5.value=''
  }
  function ale7(){
    const x=+document.getElementById("inp6").value
    const y=+document.getElementById("inp7").value
    document.getElementById("i3").innerHTML=x+y
  }

  function ale8(){
    const x=document.getElementById("inp8").value
    const y=document.getElementById("inp9").value
    document.getElementById("i4").innerHTML=x-y
  }
  function ale9(){
    const x=document.getElementById("id1").value
    const y=document.getElementById("id2").value
    document.getElementById("i5").innerHTML=x*y
  }
  function al1(){
    const x=document.getElementById("id1").value
    const y=document.getElementById("id2").value
    document.getElementById("i5").innerHTML=x/y
  }
  function r1(e){
    document.getElementById('i6').innerHTML=e.target.value
  }
  function al2(e){
    document.getElementById('im').src=e.target.value
  }
  function al3(e){
    document.getElementById('i7').innerHTML=e.target.value
    
  }
  // function al4(e){
  //    const i = ar.indexOf(e.target.value)
  //   return (e.target.checked===false?{ar.splice(i,1);}:{ar.push(e.target.value)})
  //  }
  
  // const ar=[]
  function d(e){
    document.getElementById('i8').innerHTML=e.target.value
  }
  function but(e){
    document.getElementById('i9').innerHTML=e
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

      <input type="text" id="inp4" onBlur={(ale4)} />
      <h1 id="i1"></h1>

      <input type="text" id="inp5" onKeyUp={(ale5)} />
      <button onClick={(ale6)}>Clear text</button> 
      <h1 id="i2"></h1>

      <input type="text" id="inp6" />
      <input type="text" id="inp7" />
      <button onClick={(ale7)}>Add</button> 
      <h1 id="i3"></h1>

      <input type="text" id="inp8" />
      <input type="text" id="inp9" />
      <button onClick={(ale8)}>Subtraction</button> 
      <h1 id="i4"></h1>

      <input type="text" id="id1" />
      <input type="text" id="id2" />
      <button onClick={(ale9)}>Mul</button> 
      <button onClick={(al1)}>Div</button> 
      <h1 id="i5"></h1>

      <input type="radio" name="r" onChange={r1} value="India"/>IND
      <input type="radio" name="r" onChange={r1} value="United State of America"/>USA
      <h1 id='i6'></h1>

      <input type="radio" name="m" onChange={al2} value="https://www.freeiconspng.com/thumbs/male-icon/male-icon-32.png"/>Male
      <input type="radio" name="m" onChange={al2} value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJy0QCeJDsQuC0Lq8bWrSzCY-JU6a0bI3Wwg&usqp=CAU"/>Female<br></br>
      <img src="" alt="" id="im"/>

      <select onClick={al3}>
        <option value='IND'>India</option>
        <option value="SRI">Srilanka</option>
        <option value="USA">United State of America</option>
      </select>
      <h1 id='i7'></h1>
     
      {/* <input type="checkbox" onChange={al4} value="react"/>:ReactJS<br></br>
      <input type="checkbox" onChange={al4} value="angualr"/>:Angular<br></br>
      <input type="checkbox" onChange={al4} value="nodejs"/>:Nodejs<br></br>
      <input type="checkbox" onChange={al4} value="express"/>:Express<br></br>
      <input type="checkbox" onChange={al4} value="mongo"/>:Mongodb<br></br>
      <input type="checkbox" onChange={al4} value="mongoose"/>:Mongoose<br></br>
      <input type="checkbox" onChange={al4} value="mysql"/>:MySql */}

      <input type="date" onChange={d} />
      <h1 id='i8'></h1>

      <button onClick={()=>{but(1)}}>Button 1</button>
      <button onClick={()=>{but(10)}}>Button 2</button>
      <button onClick={()=>{but(200)}}>Button 3</button>
      <button onClick={()=>{but(9999)}}>Button 4</button>
      <h1 id='i9'></h1>

      
    </>
  )
}

export default App
