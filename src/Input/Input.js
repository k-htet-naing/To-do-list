import React,{ useState } from 'react';
import '../Input/Input.css'
import { v4 } from 'uuid';

export default function Input({text, setText}){

    const [type, setType] = useState('');

    const handleClick = ()=> {
        if(!type) return
        let updateLists = [
            ...text,
            {
                id: v4(),
                task: type,
                completed: false
            }
        ]
        setText(updateLists);
        console.log(updateLists);
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