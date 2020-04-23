import styled from "styled-components";
import Background from "./media/bg-pattern-desktop.svg";

export const ComingSoonPage = styled.main`
    --color-red-desaturated: hsl(0, 36%, 70%);
    --color-red-soft: hsl(0, 93%, 68%);
    --color-grayred: hsl(0, 6%, 24%);

    --gradient1: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
    --gradient2: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));

    --main-area: 2 / 1 / -1 / 2;
    --image-area: 1 / 2 / -1 / -1;
    --logo-area: 1 / 1 / 2 / 2;
    --background-area: 1 / 1 / -1 / 2;

    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: 8rem repeat(3, 1fr);
    min-height: 100vh;
    overflow: hidden;

    @media only screen and (max-width: 1111px) {
        --main-area: 3 / 1 / -1 / -1;
        --image-area: 2 / 1 / 3 / -1;
        --logo-area: 1 / 1 / 2 / -1;
        --background-area: 1 / 1 / -1 / -1;
    }

    .background {
        grid-area: var(--background-area);
        background: url(${Background});
        background-position: center;
        background-size: cover;
    }
`;

export const MainContent = styled.section`
    grid-area: var(--main-area);
    padding: 10rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    .RedTitle,
    .DarkTitle {
        font-size: 7rem;
        letter-spacing: 2.2rem;
    }

    .RedTitle {
        font-weight: 100;
        color: var(--color-red-desaturated);
    }

    .DarkTitle {
        color: var(--color-grayred);
        width: 23%;
    }

    .MainText {
        color: var(--color-red-desaturated);
        font-size: 1.8rem;
        margin: 1rem 0;

        @media only screen and (min-width: 1500px) {
            width: 50%;
        }
    }

    .Form {
        display: flex;
        width: 50%;
        align-items: center;
        position: relative;
        margin: 1rem 0;
        .Input {
            padding: 1rem;
            height: 100%;
            width: 100%;
            background: none;
            border-radius: 3rem;
            border: 0.2rem solid var(--color-red-desaturated);
            font-size: 1.8rem;

            &::placeholder {
                color: var(--color-red-desaturated);
            }

            &:invalid {
                border: 0.2rem solid var(--color-red-soft);
                & + .ErrorIcon {
                    opacity: 1;
                }

                & ~ .ErrorStatus {
                    opacity: 1;
                    top: 110%;
                }
            }
        }

        .ErrorIcon {
            display: block;
            opacity: 0;
            transform: translate(-50%, -50%);
            position: absolute;
            right: 6.2rem;
            z-index: 23;
            top: 50%;
        }

        .ErrorStatus {
            position: absolute;
            font-size: 1.5rem;
            color: var(--color-red-soft);
            top: -50%;
            left: 0;
            opacity: 0;
            transition: all 0.2s ease, opacity 0.2s ease 0.02s;
        }

        .Submit {
            position: absolute;
            top: 0;
            right: 0;
            background: var(--gradient2);
            border-radius: 4rem;
            height: 100%;
            padding: 1rem 3rem;
        }

        @media only screen and (max-width: 850px) {
            width: 65%;
        }
    }
    @media only screen and (max-width: 1440px) and (min-width: 1000px) {
        .Form {
            width: 100%;
        }
    }
`;

export const ImageContainer = styled.section`
    grid-area: var(--image-area);
    .image {
        img {
            min-width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }
`;

export const Logo = styled.div`
    grid-area: var(--logo-area);
    display: flex;
    align-items: center;
    padding-left: 10rem;
`;
