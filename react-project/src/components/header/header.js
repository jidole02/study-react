import React, {Component} from 'react';
import * as header from './headerStyle'
import {Link, Route, Switch} from 'react-router-dom'

function Header() {
  return (
      <header.HeaderDiv>
          <a><i class="far fa-paper-plane"></i><b>W</b>eWhy</a>
          <div>
              <ul>
                  <li><i>A</i>bout</li>
                  <li><i>I</i>ntroduce</li>
                  <li><i>S</i>ource</li>
              </ul>
          </div>
          <div>
          <i class="fab fa-github"></i>
          <i class="fab fa-facebook"></i>
          </div>
      </header.HeaderDiv>
  );
}

export default Header;