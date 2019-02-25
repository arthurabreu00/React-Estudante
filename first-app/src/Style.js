import Styled from 'styled-components';
import {center} from './styles/tools'

const color ='#3b86ff';

export const Card = Styled.article`
    background-color: ${color};
    color:var(--color-zero);
    font-family:  'Open Sans', sans-serif;
    text-align:center;
    padding-top: 58px;
    padding-bottom: 40px;
    ${center};
    width:370px;
`;

export const Name = Styled.h1`
    font-size: 28px;
    text-transform: uppercase;
    margin 0;
`;

export const Price = Styled.h2`

`;

export const Description = Styled.p`
    
`;

export const Button = Styled.a`
    box-sizing: border-box;
    display:block;
    width: 120px;
    height: 35px;
    background-color: var(--color-zero);
    color: ${color};
    border-radius: var(--radius);
    line-height: 35px;
    margin: 0 auto;
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
        background-color: ${color};
        color: var(--color-zero);
        border: 1px solid var(--color-zero);
        }
    `
    }




`;