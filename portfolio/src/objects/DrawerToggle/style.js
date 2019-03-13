import styled  from 'styled-components';

export const ToggleButton = styled.button`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus{
        outline:none;
    }
`;

export const ToggleButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background: var(--color-second);
`;
