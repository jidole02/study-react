import React, { useReducer } from 'react'

function reducer(state, action){ // state : 현재 상태 action : 업데이트를 위해 필요한 정보
    switch (action.type){ // action.type에 따라 증가 감소
        case 'INCREMENT':
            return {value: state.value + 1};
            case 'DECREMENT':
                return {value: state.value -1}
                default:
                    return state;
    }
}

const Counter=()=>{
    const [state, dispatch] = useReducer(reducer, {value:0}); 
    // useReducer의 장점 : 컴포넌트 업데이트 함수 굳이 이 안에서
    // 안짜도 밖에서 가능함 오 좋은디?
    return(
        <div>
            <p>현재 카운터 값은 {state.value} 입니다.</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    )
}

export default Counter;