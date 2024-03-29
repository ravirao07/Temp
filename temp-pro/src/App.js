import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
function App() {
  const [value,setValue] = useState(10)
  const [color,setcolor] = useState("cold")
  const incre = ()=>{
   const newvalue = value +1;
   setValue(newvalue);
   if(newvalue >=15)
   {
     setcolor ('hot');
   }
  }
  const decre = ()=>{
    const newvalue = value-1;
    setValue(newvalue);
    if(newvalue<15)
   {
     setcolor ('cold');
   }

  }
  return (
    <div className="App">
     <div className='iner'>
     <div className='iner-box'>
     <h1 className ={`rounded-circle ${color}`}>{value}°C</h1>
     </div>
      <button className='btn btn-primary  ' onClick={()=>incre()}>+</button>
      <button className='btn btn-warning' onClick={()=>decre()}>-</button>
     </div>
    </div>
  );
}

export default App;
