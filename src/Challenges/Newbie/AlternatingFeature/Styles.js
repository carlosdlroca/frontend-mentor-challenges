import styled from "styled-components";
import BgHeroDesktop from "./media/bg-hero-desktop.svg";
import BgHeroMobile from "./media/bg-hero-mobile.svg";

export const Page = styled.main`
    --color-pink: hsl(322, 100%, 66%);
    --color-pale-cyan: hsl(193, 100%, 96%);
    --color-dark-cyan: hsl(192, 100%, 9%);
    --color-grayish-blue: hsl(208, 11%, 55%);

    background-color: white;

    min-height: 100vh;

    footer {
        background-color: var(--color-dark-cyan);
        position: relative;
        padding-top: 20rem;
        margin-top: 20rem;
        & > svg path {
            fill: white;
        }
        .Action {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -60%);

            display: flex;
            flex-direction: column;
            align-items: center;

            background: white;
            border-radius: 2rem;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
            color: var(--color-dark-cyan);
            padding: 7rem 1rem;
            width: min(75%, 84rem);

            .ActionTitle {
                font-size: clamp(2.3rem, 1.7vw, 4rem);
                margin-bottom: 4rem;
            }

            @media only screen and (max-width: 560px) {
                padding: 5rem 1rem;
            }
        }
    }
`;

export const Header = styled.header`
    background-color: var(--color-pale-cyan);
    background-image: url(${BgHeroDesktop});
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 1024px) {
        background-image: url(${BgHeroMobile});
    }

    .HeaderContent {
        display: flex;
        padding: 1rem 9rem;
        padding-right: 2rem;
        align-items: center;
        .CTA {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 0 0 45%;
            color: var(--color-dark-cyan);
            .Title {
                font-size: 5rem;
                letter-spacing: 0.2rem;
                width: 75%;
            }

            .Text {
                font-size: 2.2rem;
                font-weight: 500;
                width: 80%;
            }

            & > * {
                margin-bottom: 4rem;
            }

            @media only screen and (max-width: 1400px) {
                .Title {
                    font-size: 4rem;
                }

                .Text {
                    font-size: 1.9rem;
                }
            }

            @media only screen and (max-width: 1050px) {
                .Title {
                    font-size: 3rem;
                }

                .Text {
                    font-size: 1.5rem;
                }
            }

            @media only screen and (max-width: 890px) {
                align-items: center;
                text-align: center;
                .Title {
                    font-size: 3.5rem;
                }

                .Text {
                    font-size: 1.8rem;
                }
            }
        }

        .Image {
            flex: 0 0 55%;
            img {
                display: block;
                max-width: 100%;
            }
        }

        @media only screen and (max-width: 890px) {
            flex-direction: column;
            padding: 4rem 1rem;

            .Image {
                margin: 4rem 0 2.5rem;
                max-width: 75%;
            }
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4rem 6rem;

    @media only screen and (max-width: 1024px) {
        padding: 2rem 4rem;
        button {
            font-size: 1.3rem;
        }
    }
`;

export const Features = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 10rem;
    @media only screen and (max-width: 1024px) {
        padding: 5rem;
    }
`;

export const FeatureBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
    padding: 3rem 6rem;
    padding-right: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    width: 90%;

    .Description {
        .Title {
            color: var(--color-dark-cyan);
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 2rem;
        }

        .Text {
            color: var(--color-grayish-blue);
            font-size: 1.6rem;
            line-height: 1.7;
            width: 65%;
        }
    }

    .Image {
        max-width: 35%;
    }

    &:nth-child(even) {
        .Description {
            margin-left: 5rem;
            order: 100;

            @media only screen and (max-width: 890px) {
                margin-left: 0rem;
            }
        }
    }
    @media only screen and (max-width: 890px) {
        flex-direction: column;
        text-align: center;
        padding: 3rem;
        .Description {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .Image {
            order: -1;
            max-width: 80%;
            margin-bottom: 3rem;
        }
    }
`;
