import Styled from 'styled-components';

const Nav = Styled.nav`

    & > .logo{
        font-weight: 600;
    }
`;

export const Toolbar = Styled.header`
    padding: var(--spacing-big);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 60px;
    background: #fff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
`

export default Nav;