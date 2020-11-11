import React, {Component} from 'react';

class PhoneForm extends Component{
    state = {
        name: '',
        phone:''
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}> {/* onSubmit 내의 함수 실행 */}
                <input
                name="name"
                placeholder="이름입력"
                value={this.state.name}
                onChange={this.handleChange}
                />
                <input
                name="phone"
                placeholder="번호입력"
                value={this.state.phone}
                onChange={this.handleChange}
                />
                <button type="submit">등록</button> {/*submit 버튼을 누르면 */}
            </form>
        )
    }
}

export default PhoneForm;