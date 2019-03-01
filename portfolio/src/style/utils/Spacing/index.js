import { createGlobalStyle } from "styled-components";

const Spacing = createGlobalStyle`
    :root{
        --spacing-small: 5px;
        --spacing-medium: 10px;
        --spacing-big: 20px;
    }
`;

export default Spacing;