import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/config/Reset';
import Base from './styles/config/Base'
import Utils from './styles/Utils';


import App from './App';


ReactDOM.render(
<Fragment>
    <Reset />
    <Base />
    <Utils />
    <App /> 
</Fragment>, 
document.getElementById('root'));