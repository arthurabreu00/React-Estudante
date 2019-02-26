import Styled from 'styled-components';
import {center} from '../../styles/tools'

const Button = Styled.a`
    box-sizing: border-box;
    display:block;
    width: 120px;
    height: 35px;
    background-color: var(--color-zero);
    color: var(--color-first);
    border-radius: var(--radius);
    line-height: 35px;
    ${center}
    text-transform:uppercase;
    cursor: pointer;
    transition: all 200ms linear;
    border: 1px solid transparent;

    ${props => !props.primary ? `
        color: #838383;
        background: #ccc;
        
    `: 
    `    
        &:hover{
        background-color: var(--color-first);
        color: var(--color-zero);
        border: 1px solid var(--color-zero);
        }
    `
    }

`;

export default Button;    