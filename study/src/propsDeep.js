import React, { Component } from 'react'


class Counter extends Component{
    constructor(props){ // 컴포넌트에서 state를 설정할 때에는 constructor 메서드 작성하여 설정
        super(props);
        this.state = {
            number: 0
        };
    }
    render(){
        const {number} = this.state; // state 조회할 시 필요
        return(
            <div>
                <h1>{number}</h1>
                <button
                onClick={
                    ()=>{
                        this.setState({number: number+1}) // state값 추가
                    }
                }
                ></button>
            </div>
        )
    }
}

const Deep =({name})=>{ // 이 형식으로 사용
    return(
        <div>
            {name} { /* 함수형 컴포넌트에서 props 사용*/ }
            <Counter></Counter>
        </div>
    )
}

export default Deep;