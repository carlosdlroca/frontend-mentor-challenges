import styled from "styled-components";
import PatternBg from "./media/pattern-bg.svg";

export const Page = styled.main`
    --color-dark-blue: hsl(240, 38%, 20%);
    --color-grayish-blue: hsl(240, 18%, 77%);

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    color: var(--color-dark-blue);
    min-height: 100vh;
    position: relative;
    padding-bottom: 5rem;
    .CurveSVG {
        position: absolute;
        bottom: 0;
        left: 0;
        path {
            fill: var(--color-grayish-blue);
        }
    }
`;

export const Buttons = styled.div`
    display: inline;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    border-radius: 5rem;

    button {
        background-color: white;
        border: none;
        transition: background-color 0.2s ease;
        padding: 1rem 2rem;

        &:hover {
            background-color: var(--color-grayish-blue);
            cursor: pointer;
        }

        &:first-child {
            border-radius: 5rem 0 0 5rem;
        }

        &:last-child {
            border-radius: 0 5rem 5rem 0;
        }
    }
`;

export const Testimonial = styled.section`
    display: flex;
    align-items: center;

    background-image: url(${PatternBg});
    background-position: 80%;
    background-size: contain;
    background-repeat: no-repeat;

    width: 80%;
    margin: 0 auto;
    padding: 10rem 18rem;

    .Left {
        flex: 0 0 50%;
        .Quote {
            font-size: 3.6rem;
            position: relative;
            width: 120%;
            z-index: 100;

            svg {
                position: absolute;
                top: 0;
                left: 0;
                transform: translate(100%, -50%);
            }

            @media only screen and (max-width: 1405px) {
                font-size: 2.9rem;
            }

            @media only screen and (max-width: 1080px) {
                font-size: 2.6rem;
            }
        }

        .Worker {
            font-size: 1.65rem;
            margin-top: 6rem;
            .Name {
                color: var(--color-dark-blue);
                font-weight: 700;
                margin-right: 1rem;
            }
            .Job {
                color: var(--color-grayish-blue);
                font-size: 1.3rem;
            }
        }
    }

    .Right {
        .Image {
            position: relative;
            ${Buttons} {
                position: absolute;
                bottom: 0;
                left: 0;
                transform: translateY(50%);
            }
        }

        .Headshot {
            display: block;
            object-fit: cover;
            transform: translateX(-10rem);

            @media only screen and (max-width: 1200px) {
                transform: translateX(-1rem);
            }
        }
    }

    @media only screen and (max-width: 1110px) {
        padding: 10rem;
    }

    @media only screen and (max-width: 1080px) {
        flex-direction: column;
        justify-content: space-between;
        background: none;
        padding: 0;
        width: 95%;

        .Left {
            text-align: center;
            .Quote {
                text-align: center;
                margin: 0 auto;
                width: 70%;

                svg {
                    left: 50%;
                    transform: translate(-50%, -60%);
                }
            }
            .Worker {
                margin-top: 2.5rem;
            }
        }
        .Right {
            flex: 0 0 50rem;
            background: url(${PatternBg});
            background-repeat: no-repeat;
            background-size: contain;
            order: -1;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5rem;

            .Image {
                ${Buttons} {
                    left: 50%;
                    transform: translate(-50%, 50%);
                }
            }

            .Headshot {
                height: 75%;
                width: 75%;
                margin: 0 auto;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .Left {
            .Quote {
                font-size: 2.3rem;
            }

            .Worker {
                .Job {
                    background: white;
                }
            }
            position: relative;
            z-index: 10;
        }
    }
`;
