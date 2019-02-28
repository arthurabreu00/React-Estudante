import Styled from 'styled-components';

const MenuToggle = Styled.input.styled.input.attrs({
    type: "checkbox"
  })`
    display: none;

    ${MenuToggle}:checked + ${MobileBar} ${MenuIcon} & {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    ${MenuToggle}:checked + ${MobileBar} span:before,
    ${MenuToggle}:checked + ${MobileBar} span:after {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

  `;

  
    
export default Menu;