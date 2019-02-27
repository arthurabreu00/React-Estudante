import Styled from 'styled-components';

const Price = Styled.h2`
    font-size: 100px;
    margin-bottom: var(--spacing--medium);
    & > small{
        font-size: .5em;
        font-weight: 300;
    }
`;

export default Price;
