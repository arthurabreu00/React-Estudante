import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    html{
        height: 100%;
    }
    
    body{
        height: 100%;
        font-family: 'Montserrat', sans-serif;
    }
    
    a {
        text-decoration: none;
    }
`;

export default Base;