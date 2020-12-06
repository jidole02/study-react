import React, { useState } from 'react';
import * as Main from './mainStyle'
import List from './mainComponent'

let i = 1;
const MainPage =()=>{
     const [list, SetList] = useState([]);
    const [contents, SetContents] = useState([]);
    const [id, SetID] = useState(0);
    const [set, setVal] = useState()
    function SetValue(e){
        SetList(e.target.value)
        setVal(e.target.value)
    }
    function addList(e){
        e.preventDefault();
        const a={
            id: id,
            cont: list
            };
        SetContents(contents.concat(a))
        SetID(i++)
        setVal('')
    }
    return(
        <Main.MainBackground>
            <Main.MainContainer>
                <header>
                    <h1>Todo List</h1>
                    <h3>Today's work list / 2020-09-00</h3>
                </header>
                <article>
                    <section>
                        <div>
                            <form action="" onSubmit={addList}>
                                <input type="text" name="" id="" placeholder="오늘의 할일을 입력하세요~" onChange={SetValue} value={set}/>
                                <button type="submit"><i class="fas fa-check"></i></button>
                            </form>
                        </div>
                    </section>
                    <footer>
                        {contents.map((e)=>(<List cont={e.cont} key={e.id}></List>))}
                    </footer>
                </article>
            </Main.MainContainer>
        </Main.MainBackground>
    )
}

export default MainPage;