import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-main: ${(props) => props.theme.main};
        --color-sub:  ${(props) => props.theme.sub};
        --color-text: ${(props) => props.theme.text};
        --color-body: ${(props) => props.theme.body};
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 62.5%;
    }

    body {
        background: var(--color-body);
        color: var(--color-text);
    }


    h1 {
        color: var(--color-main);
    }

    button {
        color: var(--color-text);
        background: var(--color-sub);
        padding: 1rem 2rem;
        font-size: 2rem;
    }
`;
