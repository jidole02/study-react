import React, { Component,useState } from 'react';
import PhoneForm from './studyInput';

const Use=()=>{ // 처음 써본 함수형 컴포넌트 (이게 더 트렌드임)
  const [hi, bye] = useState('hello'); // useState
  const enter =()=>bye('byebye')
  return(
    <div>
      <button onClick={
          enter
          }>dsfkjklsf</button>
      {hi}
      <input type="text" name="" id=""
      onChange={
          (e)=>{
              console.log(e.target.value)
          }
      }
      />
    </div>
  )
}

export default Use;