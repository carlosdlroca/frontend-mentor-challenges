import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    button {
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    ol, ul {
        list-style: none;
    }
`;
