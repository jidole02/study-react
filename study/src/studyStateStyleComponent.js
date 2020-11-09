import React, {Component} from 'react';
import styled from 'styled-components'; // 스타일 컴포넌트 정의

class State extends Component{
    state={
        name:'',
        phone:''
    }
    nameChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value // name에 따라 값 변경 타겟이 달라짐
/*             name: e.target.value // 이벤트를 발생시킨 input value 가져옴 */
        })
    }
    submit=(e)=>{
        e.preventDefault();
        this.props.onCreate(this.state);
        console.log(this.state.name,this.state.phone)
        this.setState({
            name:'',
            phone:''
        })
    }
    render(){
        const Div = styled.div`
        p{
            font-size:large;
        } 
        `; // 스타일 컴포넌트 (앞으로 자주 이용 예정)

        return(
            <form action="submit">
                <Div>
                    <p>이름 : {this.state.name}{this.state.phone}</p>
                    <input
                    placeholder="이름을 입력하세요"
                    type="name"
                    onChange={this.nameChange}
                    value={this.state.name}
                    name="name"
                    />
                    <input
                    placeholder="전화번호를 입력하세요"
                    onChange={this.nameChange}
                    value={this.state.phone}
                    name="phone"
                    />
                    <button type="submit">등록</button>
                </Div>
                이름 : {this.state.name + '/' + this.state.phone}
            </form>
        )
    }
}

export default State;