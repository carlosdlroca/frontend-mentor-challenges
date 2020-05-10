import styled from "styled-components";

export const Page = styled.main`
    --color-blue: hsl(223, 87%, 63%);
    --color-paleblue: hsl(223, 100%, 88%);
    --color-lightred: hsl(354, 100%, 66%);
    --color-gray: hsl(0, 0%, 59%);
    --color-darkblue: hsl(209, 33%, 12%);

    min-height: 100vh;
    background-color: white;
    color: var(--color-gray);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    padding: 6rem 1rem 10rem;

    img {
        max-width: 50%;

        @media only screen and (max-width: 1024px) {
            max-width: 75%;
        }
    }
`;

export const Heading = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
    .Title {
        font-size: 4rem;
        font-weight: 100;
        .soon {
            font-weight: 600;
            color: var(--color-darkblue);
        }
    }
    .SubTitle {
        margin: 1rem 0;
        color: var(--color-darkblue);
        font-size: 2rem;
        font-weight: 400;
    }

    @media only screen and (max-width: 1024px) {
        .Title {
            font-size: 3rem;
        }
        .SubTitle {
            font-size: 1.5rem;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    width: 85%;
    position: relative;
    margin-bottom: 4rem;
    /* flex-flow: row wrap; */
    input {
        font-size: 1.4rem;
        flex: 0 0 65%;
        border-radius: 4rem;
        border: 1px solid var(--color-paleblue);
        padding-left: 1rem;

        &:invalid {
            border-color: var(--color-lightred);

            & + .ErrorMessage {
                bottom: -1.5rem;
                opacity: 1;
            }
        }
    }

    button {
        flex: 0 0 35%;
        margin-left: 2rem;
        font-size: 1.7rem;
        border-radius: 4rem;
        background: var(--color-blue);
        padding: 1.5rem 4.5rem;
        box-shadow: 0 0 1rem var(--color-blue);
        color: white;

        &:hover {
            filter: brightness(1.2);
        }
    }

    .ErrorMessage {
        opacity: 0;
        position: absolute;
        bottom: 100%;
        left: 0;
        color: var(--color-lightred);
        font-size: 1.2rem;
        user-select: none;
        transition: all 0.2s linear;
    }

    @media only screen and (max-width: 1024px) {
        flex-flow: row wrap;
        input,
        button {
            flex: 0 0 100%;
        }

        button {
            margin-left: 0;
            margin-bottom: 2rem;
        }
        input {
            padding: 1.5rem 1rem;
            margin-bottom: 5rem;

            &:invalid {
                & + .ErrorMessage {
                    bottom: calc(100% - 6.2rem);
                    opacity: 1;
                }
            }
        }
    }

    @media only screen and (max-width: 565px) {
        width: 100%;
        button {
            margin-left: 0.3rem;
            font-size: 1.2rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        width: 40%;
    }
`;

export const Footer = styled.footer`
    color: var(--color-gray);
    font-size: 1.4rem;
    ul {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 1.5rem;
        .Link {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-blue);
            border-radius: 50%;
            transition: all 0.2s ease;
            width: 4rem;
            height: 4rem;

            svg {
                width: 2.5rem;
                height: 2.5rem;
                transition: fill 0.2s ease;
                fill: var(--color-blue);
            }

            &:hover {
                background: var(--color-blue);
                cursor: pointer;
                svg {
                    fill: white;
                }
            }

            &:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }

    @media only screen and (max-width: 1024px) {
        margin-top: 4rem;
    }
`;
