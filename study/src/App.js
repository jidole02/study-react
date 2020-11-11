import React, { Component } from 'react';
import PhoneForm from './studyInput';

class App extends Component{
  id=2
  state={
    information: [
      {
        id:0,
        name: '정지원',
        phone: '010-0000-0000'
      },
      {
        id:1,
        name: '김재현',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate=(data)=>{
    const {information} = this.state;
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
    console.log(data);
  } // 부모 컴포넌트에 정보 전달
  render(){
    const {information} = this.state;
    return(
      <div>
        <PhoneForm 
        onCreate={this.handleCreate}
        ></PhoneForm> 
        {JSON.stringify(information)} {/* 문자열로 js 값 반환 */}
      </div>
    )
  }
}

export default App;
