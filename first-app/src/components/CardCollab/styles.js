import Styled from 'styled-components';
import {center} from '../../styles/tools'

const Card = Styled.article`
    background-color: var(--color-first);
    color:var(--color-zero);
    text-align:center;
    padding-top: 58px;
    padding-bottom: 40px;
    ${center};
    width:370px;
`;

export default Card;