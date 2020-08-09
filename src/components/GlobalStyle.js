import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    *:focus {
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
