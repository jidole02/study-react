# state

----

- state는 동적인 데이터를 다룰 때에 사용한다. 

  아래의 예시를 통해 확인해보자

```react
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```



- 위 코드를 실행하면 사용자가 버튼을 누름에 따라 값이 바뀌는 것을 구현할 수 있다.

- 위 코드에서 **setState** 는 **state** 의 값을 바꾸기 위해서 사용된다. this.setState를 호출하게 되면 컴포넌트가 리렌더링 되도록 설계되어 있다. 

- onClick={this.handleIncrease()} 이렇게 코드를 짠다면 렌더링을 할 때마다 해당 함수가 호출된다. 무한반복 현상이 일어나 버린다.

  