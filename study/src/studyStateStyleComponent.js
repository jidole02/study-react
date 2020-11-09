import React, {Component} from 'react';
import styled from 'styled-components'; // 스타일 컴포넌트 정의

class Multiply extends Component{
    state={
        name:''
    }
    nameChange=(e)=>{
        this.setState({
            name: e.target.value // 이벤트를 발생시킨 input value 가져옴
        })
    }
    render(){
        const Div = styled.div`
        p{
            font-size:large;
        } 
        `; // 스타일 컴포넌트 (앞으로 자주 이용 예정)

        return(
            <Div>
                <p>이름 : {this.state.name}</p>
                <input
                placeholder="이름을 입력하세요"
                type="name"
                onChange={this.nameChange}
                value={this.state.name}
                />
            </Div>
        )
    }
}

export default Multiply;