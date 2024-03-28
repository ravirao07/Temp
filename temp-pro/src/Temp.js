import {useState} from 'react'
function Temp()
{
    const [value,seTvalue] = useState(10)
    const incre = ()=>{
        const newvalue = value+1;
    }
    return(
        <div>
            <h2>{value}</h2>
            <button onClick={()=>incre()}>+</button>
            <button>-</button>
        </div>
    )
}
export default Temp;