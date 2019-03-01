import Styled from 'styled-components';

const Nav = Styled.nav`
    display:flex;
    height: 100%;
    align-items:center;
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
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
`

export const ListNav = Styled.ul`
    list-style: none;
    display: inline;

    & li{
        display: inline;
    }

    &:hover li{
        opacity: .2;
    }

    & li:hover{
        opacity: 1;
    }

`;

export const NavItens = Styled.div`
    &:hover{
        color : var(--color-second) ;
    }
`;

export const LinkNav = Styled.a`
    color: black;
`;

export default Nav;