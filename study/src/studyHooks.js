import React, { useState } from 'react';

const Input =()=>{
    return(
        <div>
            <input type="text"placeholder="이름을 입력하세요"/>
        </div>
    )
}

const Hooks = ()=>{
    const [vis, visChange] = useState(false);
    return(
        <div>
            <button 
            onClick={()=>{
                visChange(!vis)
            }}
            >
                {vis?'숨기기' : '보이기'}
            </button>
            {vis&&<Input></Input>} {/* vis가 true일 때 컴포넌트 보여주기 */}
        </div>
    )
}

export default Hooks;