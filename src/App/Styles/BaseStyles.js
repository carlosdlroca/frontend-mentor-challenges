import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-main: ${(props) => props.theme.main};
        --color-sub:  ${(props) => props.theme.sub};
        --color-text: ${(props) => props.theme.text};
        --color-body: ${(props) => props.theme.body};
        --color-tertiary: ${(props) => props.theme.tertiary};
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
        transition: all .3s ease;
    }

    ${
        "" /* a {
        background:  url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg'%3E%3Cstyle%3E%0A@keyframes marching-ants %7B to %7B stroke-dashoffset: -15px%7D%7D %3C/style%3E%3Cdefs%3E%3ClinearGradient id='wow'%3E%3Cstop offset='0%25' style='stop-color:%239966ff'%3E%3C/stop%3E%3Cstop offset='15%25' style='stop-color:%2366ff99;'%3E%3C/stop%3E%3Cstop offset='60%25' style='stop-color:%23ccff99;'%3E%3C/stop%3E%3Cstop offset='90%25' style='stop-color:%23ff6666'%3E%3C/stop%3E%3CanimateTransform%0AattributeName='gradientTransform' dur='5s' type='rotate' from='360 .5 .5' to='0 .5 .5' repeatCount='indefinite'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' style='stroke:url(%23wow); stroke-width: 15px; fill: none; stroke-dasharray: 10px 5px; animation: marching-ants .2s infinite linear;' /%3E%3C/svg%3E") !important;
    } */
    }

    ::selection {
        background: var(--color-tertiary);
        color: #FFF;
    }
`;
