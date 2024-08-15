import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* Add your global styles here */

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;