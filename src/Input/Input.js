import React,{ useState } from 'react';
import '../Input/Input.css'

export default function Input(){

    const [type, setType] = useState('');

    const handleClick = ()=> {
        console.log(type);
        setType('');
    }

    return (
        <div className='Input-align' >
            <div className= 'Input-box'>
                <input type = 'text' value= {type} placeholder='Add your Lists'
                 className = 'Input'
                 onChange= {(e)=> setType(e.target.value)} />
                 <button className='Input-btn' onClick = {handleClick}> Add </button>
            </div>
        </div>
    )
}