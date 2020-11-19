import React, {Component, useState} from 'react';
import * as sprite from './spriteStyle'
import {Link} from 'react-router-dom';

const Sprite=()=>{
    return(
        <>
            <sprite.menuBar>
                <i class="fab fa-facebook"></i>
                <Link to="/main"><i class="far fa-times-circle"></i></Link>
                <i class="fab fa-github"></i>
            </sprite.menuBar>
        <sprite.Body>
        </sprite.Body>
        </>
    )
}

export default Sprite;