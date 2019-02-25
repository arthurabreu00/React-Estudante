import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import Global from './styles/settings';
import Reset from './styles/generic'

import App from './App';


ReactDOM.render(
<Fragment>
    <Global.Colors />
    <Global.Size />
    <Reset /> 
    <App /> 
</Fragment>, 
document.getElementById('root'));