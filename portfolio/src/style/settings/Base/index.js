import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
    }

    ol,ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

export default Base;