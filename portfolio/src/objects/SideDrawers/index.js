import React from 'react';

import NavDrawer, {ListNav} from './style';

const SideDrawer = ()=>(
    <NavDrawer>
        <ul>
            <li>
                <a href="/">
                    Products
                </a>
            </li>

            <li>
                <a href="/">
                    Users
                </a>
            </li>
        </ul>
    </NavDrawer>
);

export default SideDrawer;