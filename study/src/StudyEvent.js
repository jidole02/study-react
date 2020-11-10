import React, {Component} from 'react';

class EventClass extends Component{
    state={
        title : 'hello, world!'
    }
    render(){
        return(
            <div>
               <a href="/" onClick={
                    function(e){
                        this.setState({
                            title: 'welcome'
                        })
                        e.preventDefault(); // a 태그의 기본적인 동작 방지 (새로고침)
                    }.bind(this) // onClick 안에서 this.setState 사용시 필요 (this값을 가져와야 하기 떄문)
                }>WEB</a>
                <p>{this.state.title}</p>
            </div>
        )
    }
}

export default EventClass;