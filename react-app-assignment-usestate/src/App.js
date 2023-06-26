import {useState} from 'react';
import './App.css';



function App() {

  const[num,setNum]=useState(1)
  const[even,setEven]=useState(0)
  const[odd,setOdd]=useState(1)
//let num=1;
  // const[imgFile,uploadImg]=useState("");
  // const imgHandler = (e)=>{
  //   uploadImg(URL.createObjectURL(e.target.files[0]))
  // }
function test(){
 // num=num+1;
 setNum(num+1);
  console.log(num);
}

  return (
    <div className="App">
       <button onClick={test}>+</button>
      <button onClick={()=>setNum(num-1)}>-</button> <br/> <br/>
    <h1>Counter: {num}</h1> 

    <hr/>
    <button onClick={()=>setEven(even+2)}>Even</button>
    <button onClick={()=>setOdd(odd+2)}>Odd</button>

    <hr/>
    <h1>EVEN:: {even}</h1>
    <h1>ODD:: {odd}</h1>

    <hr/>
     <select 
    //  onChange={imgHandler}
     >
      <option>Benz</option>
      <option>BMW</option>
      <option>Hyundai</option>
      <option>Honda</option>
      <option>Maruthi</option>
      <option>Kia</option>
      <option>Tata</option>
      <option>Toyota</option>
      <option>MG</option>
     </select>
     <hr/>
     <img src="" border="1"></img>
    </div>
  );
}

export default App;
