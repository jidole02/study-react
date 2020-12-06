import React, { Component } from 'react';
import * as Main from './mainStyle'

class List extends Component{
    state={
        i:false,
        dir:'',
        prop: this.props.cont,
        style: false
    }
    toggle=()=>{
        if(window.confirm('완료로 하시겠습니까?')==true){
            this.setState({
                i:true
            })
        }
    }
    edit=(e)=>{
        let inputVal = prompt('수정 내용을 입력하세요');
        this.setState({
            prop: '',
            dir: inputVal
        })
    }
    style=()=>{
        this.setState({
            style: true
        })
    }
    render(){
        const a ={
            textDecoration: 'line-through'
        }
        const b ={
            textDecoration: 'none'
        }
        const block={
            display: 'flex'
        }
        const none = {
            display: 'none'
        }
        return(
            <div style={(this.state.style?none:block)}>
            <i class="fas fa-check" onClick={this.toggle}></i>
            <a href="" style={(this.state.i)?a:b}>{this.state.prop}{this.state.dir}</a>
            <i class="far fa-edit" onClick={this.edit}></i>
            <i class="fas fa-trash-alt" onClick={this.style}></i>
            </div>
        )
    }
}

export default List;