import styled, {css} from 'styled-components';

const MainBackground = styled.div`
width:100%;
height:100vh;
background-color:#5fe7b3;
display:flex;
justify-content:center;
align-items:center;
`
const MainContainer = styled.div`
width:500px;
height:600px;
display:flex;
flex-direction:column;
text-align:center;
header{
    width:100%;
    text-align:center;
    h1{
        color:white;
    }
    h3{
        color:whitesmoke;
        font-weight:500;
    }
}
article{
    margin-top:20px;
    footer{
        ::-webkit-scrollbar{
        width:5px;
        background-color:transparent; 
        border-radius:5px;
        overflow:hidden;
        }
        ::-webkit-scrollbar-thumb{
            background-color:#3faa81;
            border-radius:5px;
        }
        width:100%;
        height: 300px;
        margin-top:30px;
        overflow-y:scroll;
        div{
            padding:0px 20px;
            height: 60px;
            background-color:white;
            margin-top:15px;
            display:flex;
            align-items:center;
            border-radius:10px;
            i{
                color:#d4d4d4;
                :hover{
                    color:gray;
                    cursor: pointer;
                }
            :nth-of-type(2){
                margin-left:160px;
                padding:0px 13px;
            }
            }
            a{
                padding:0px 20px;
                width:190px;
                display:flex;
                color:gray;
                font-weight:600;
                font-size:14px;
            }
        }
    }
    section{
        width:100%;
        
        div{
            width:100%;
            height: 50px;
            background-color:white;
            display:flex;
            border-radius:10px;
            overflow:hidden;
            form{
                width:100%;
                 height: 50px;
                display:flex;
                input{
                width:85%;
                height: 100%;
                padding:0px 20px;
                border:none;
                outline:none;
                font-size:15px;
            }
            button{
                width:15%;
                height: 50px;
                background-color:#3faa81;
                border:none;
                color:white;
                cursor: pointer;
                font-size:18px;
                outline:none;
            }
            }
        }
    }   
}
`

export {
    MainBackground,
    MainContainer
}