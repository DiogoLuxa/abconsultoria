import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    #root {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }
    body {
        width: 100%;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
    }
`;
export default GlobalStyle;
