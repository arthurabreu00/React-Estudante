import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;
        width: 1440px;
        height: 1024px;
        background-color: #f9f9f9;
        padding: 30px;
        overflow: hidden;
    }
`

export default Base;