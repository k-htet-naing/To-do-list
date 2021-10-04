import React, { useEffect, useState } from 'react';
import '../Body/Body.css'

export default function Body({text,setText}){
    const updateTask = (id) => {
        let updateTasks = text.map((text)=> {
            if(text.id === id) {
                text.completed = !text.completed;
                return text
            }
            else {
                return text
            }
        });
        setText(updateTasks)
    }


    return(
        <div>
            <div className = 'box'>
                <div className = 'container'>
                <div>
                     {
                         text.map((text,index)=> (
                             <div onClick = {()=> updateTask(text.id)} key = {index} className = {`body ${text.completed && 'body-completed'}`} >
                                 {text.task}
                             </div>
                         ))
                     }
                 </div>
                </div>
            </div>
        </div>
    )
}