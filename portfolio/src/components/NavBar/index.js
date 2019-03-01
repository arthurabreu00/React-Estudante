import React from 'react';

import Nav, { Toolbar, NavItens, LinkNav, ListNav } from './Style';
import {SpacerFlex} from '../../objects/FlexComponents'

import DrawerToggle from '../../objects/DrawerToggle';
import SideDrawers from '../../objects/SideDrawers';

const NavBar = ()=>
    <Toolbar>
        <Nav>
            
            <span className="logo"> USTAD </span>
          
           
          
            <SpacerFlex/>
            <NavItens>
                <ListNav>
                    <li> <LinkNav href="/"> lorem  </LinkNav> </li>
                    <li> <LinkNav href="/"> lorem </LinkNav> </li>
                    <li> <LinkNav href="/"> lorem </LinkNav> </li>
                    <li> <LinkNav href="/"> lorem </LinkNav> </li>
                    <li> <LinkNav href="/"> lorem </LinkNav> </li>
                    <li> <LinkNav href="/"> lorem </LinkNav> </li>
                    
                </ListNav>
            </NavItens>

            <DrawerToggle />
        </Nav>
    </Toolbar>


export default NavBar;