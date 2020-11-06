/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MyName from './myName';

function App() {
  function plus(){
    console.log(1);
  }

  let [good, goodChange] = useState(0);
  let foodValue = '고기'; // 변수를 html 안에 그대로 꽂아넣을 수 있다.
  let [a,b] = useState('남자 코트 추천'); // useState는 재렌더링이 자동으로 된다.
  function wordChange(){
    b('여자 코트 추천');
  }

  return (
    <div className="App">
      <header>
        firstReact
      </header>
      <div className="list">
        <button onClick={ wordChange }>바꾸기</button>
        { a } <span onClick={ ()=>{goodChange(good + 1)} }>👍</span> {good}
        
      </div>
      <Modal></Modal>
      <MyName name="정지원"/>
    </div>
  );
}

function Modal(){
  return(
    <div>
      sjfdlksjfklsjfl
    </div>
  )
}

export default App;
