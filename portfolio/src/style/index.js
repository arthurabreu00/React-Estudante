import React,{ Fragment } from 'react';

import Reset from './settings/Reset';
import Base from './settings/Base';

import Colors from './utils/Colors';
import Spacing from './utils/Spacing';

const style = ()=>{
    return(
        <Fragment>
            <Reset />
            <Base />
            <Colors />
            <Spacing />
        </Fragment>
    )
}

export default style;