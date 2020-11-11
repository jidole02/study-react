import React, {Component} from 'react';
import styled, { css } from 'styled-components';

class SubState extends Component{
    state={
        name:'',
        adress:''
    }
    ChangeValue=(e)=>{
/*         let a = e.target.value; */
        this.setState({
            [e.target.name]:e.target.value
        })
        
    } 
    render(){
        const Div = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
        div{
            display:flex;
            flex-direction:column;
            align-items:center;
            input{
                margin-top:10px;
            }
            button{
                margin-top:10px;
                width:80px;
                height:30px;
            }
        }
        `
        return(
            <Div>
                <div>
                    <input 
                    type="text"
                    name="name"
                    onKeyPress={this.ChangeValue}
                    /* value={this.state.name} */
                    />
                    <input 
                    type="text"
                    name="adress"
                    onKeyPress={this.ChangeValue}
                    /* value={this.state.name} */
                    />
                    <button type="submit">submit</button>
                </div>
                {this.state.name}
                {this.state.adress}
            </Div>
        )
    }
}

export default SubState;