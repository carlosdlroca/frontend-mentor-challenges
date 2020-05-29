import styled from "styled-components";
import BGImageMobile from "./media/bg-intro-mobile.png";
import BGImageDesktop from "./media/bg-intro-desktop.png";

export var Page = styled.main`
    --bg-color: hsl(0, 100%, 74%);
    --color-green: hsl(154, 59%, 51%);
    --color-blue: hsl(248, 32%, 49%);
    --color-darkblue: hsl(249, 10%, 26%);
    --color-gray: hsl(246, 25%, 77%);

    padding: 1rem;
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${BGImageMobile});
    background-color: var(--bg-color);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-evenly;
        background-image: url(${BGImageDesktop});
        & > * {
            flex: 0 0 50%;
        }
    }
`;

export var Left = styled.section`
    padding: 1rem;
    .Title {
        font-size: 5rem;
    }
    .Text {
        font-size: 1.6rem;
    }
`;

export var Right = styled.section`
    padding: 1rem 5rem;
    display: flex;
    flex-flow: row wrap;

    .Form,
    .TryItFree {
        flex: 0 0 100%;
        border-radius: 1rem;
        box-shadow: 0 0.6rem rgba(0, 0, 0, 0.1);
    }

    .TryItFree {
        background-color: var(--color-blue);
        text-align: center;
        font-size: 2rem;
        padding: 2rem;
        margin-bottom: 2rem;
    }
`;

export var Form = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;

    padding: 3rem 5rem;

    & > * {
        border-radius: 0.8rem;
    }
    .Terms {
        color: var(--color-gray);
        font-size: 1.6rem;
        margin-top: 2.5rem;
        text-align: center;

        span {
            color: var(--bg-color);
            &:hover,
            &:focus {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`;

export var InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    input {
        width: 100%;
    }
    svg {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
    }

    .ErrorMessage {
        font-size: 1.6rem;
        font-weight: 500;
        align-self: flex-end;
        color: var(--bg-color);

        &::empty {
            height: 2rem;
        }
    }

    margin-bottom: 4rem;
`;

export var FormInput = styled.input`
    border: 0.2rem solid var(--color-gray);
    border-radius: 1rem;
    transition: all 0.2s ease;
    padding: 2rem 4rem;
    font-size: 2rem;
    color: var(--color-darkblue);
    font-weight: 600;
    &:active,
    &:focus {
        outline: none;
        border-color: var(--color-blue);
    }

    &::placeholder {
        font-weight: 600;
        color: #666;
    }
`;

export var Button = styled.button`
    background-color: var(--color-green);
    border: none;
    /* box-shadow: 0 0.6rem var(--color-green); */
    color: white;
    font-size: 2rem;
    padding: 2rem;
    text-align: center;
    text-transform: uppercase;
`;
