import React, {Component, useState} from 'react'

const StudyState =()=>{
    let i = true;
    let value;
    const [set, change] = useState('input')
    const inputChanget =(e)=> change(
        e.target.value
    )
    const appear=()=>{
        i = false
        console.log(i);
    }
    if(i==false){
        return set;
    }
    return(
        <div>
            <input type="text"
            onChange={
                inputChanget
            }
            />
            <button onClick={appear}>등록</button>
            {set}
            
        </div>
    )
}

export default StudyState;