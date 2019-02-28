import React from 'react';

import Nav, { Toolbar } from './Style';

const NavBar = ()=>
    <Toolbar>
        <Nav>
            
            <span className="logo"> USTAD </span>
            <span class="fas fa-bars    "></span>
            <ul>
                <li> <a href="/">  </a> </li>
                <li> <a href="/">  </a> </li>
                <li> <a href="/">  </a> </li>
                <li> <a href="/">  </a> </li>
                <li> <a href="/">  </a> </li>
                <li> <a href="/">  </a> </li>
                
            </ul>
        </Nav>
    </Toolbar>


export default NavBar;