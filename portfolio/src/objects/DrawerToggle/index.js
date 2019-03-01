import React from 'react';

import { ToggleButton, ToggleButtonLine } from "./style";
import { FlexEnd } from '../FlexComponents'


const drawerToggleButton = props =>(
    <FlexEnd>
        <ToggleButton>
            <ToggleButtonLine />
            <ToggleButtonLine />
            <ToggleButtonLine />
        </ToggleButton>
    </FlexEnd>
);

export default drawerToggleButton;