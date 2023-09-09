import {useState} from 'react';
import './Demo.css';

function Demo()
{
    let[data,setData]=useState(0);
    return(
        <div style={{textAlign:'center',marginTop:'75px'}}>
            <h2>Counter App in React</h2>
            <h1>{data}</h1>
            <button id="btn1" onClick={()=>setData(data+1)}>Increment</button>
            <button id="btn2" onClick={()=>alert("Current value is: "+data)}>Display</button>
            <button id="btn3" onClick={()=>setData(data-1)}>Decrement</button>
        </div>
    )
}

export default Demo;