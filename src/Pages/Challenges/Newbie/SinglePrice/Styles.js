import styled from "styled-components";

export var Page = styled.main`
    --color-cyan: hsl(179, 62%, 43%);
    --color-yellow: hsl(71, 73%, 54%);
    --color-lightgray: hsl(204, 43%, 93%);
    --color-grayblue: hsl(218, 22%, 67%);

    min-height: 100vh;
    background-color: var(--color-grayblue);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export var Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
        "header header"
        "signup info";
    background-color: white;
    border-radius: 0.8rem;
    overflow: hidden;
    width: 50%;
    min-height: 2rem;
    & > * {
        padding: 3rem;
    }

    .Title {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        grid-template-areas:
            "header"
            "signup"
            "info";
    }

    @media only screen and (max-width: 790px) {
        width: 95%;
    }
`;

export var Header = styled.header`
    grid-area: header;
    font-size: 1.5rem;
    & > * {
        margin: 1.56rem 0;
    }
    .Title {
        color: var(--color-cyan);
    }
    .Guarantee {
        color: var(--color-yellow);
        font-weight: 600;
        font-size: 1.6;
    }
    .Text {
        color: var(--color-grayblue);
    }
`;

export var Info = styled.section`
    grid-area: info;
    background-color: var(--color-cyan);
    color: white;
    ul {
        margin: 1rem 0;
        font-size: 1.2rem;
        color: var(--color-lightgray);
        li:not(:last-child) {
            margin-bottom: 0.5rem;
        }
    }
`;

export var Signup = styled.section`
    grid-area: signup;
    position: relative;
    min-height: 5rem;
    background-color: #2bb3b1;
    filter: brightness(0.9);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .Price {
        font-size: 2.5rem;
        font-weight: bold;
    }

    .Rate {
        font-size: 1.5rem;
        font-weight: 100;
        color: rgba(255, 255, 255, 0.6);
    }
    p {
        margin: 2rem 0;
        font-size: 1.3rem;
    }

    button {
        background-color: var(--color-yellow);
        color: white;
        font-size: 2rem;
        border-radius: 1rem;
        padding: 1rem;
    }
`;
