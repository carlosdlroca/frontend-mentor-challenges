import styled from "styled-components";

export const FourCardsWrapper = styled.main`
    --color-red: hsl(0, 78%, 62%);
    --color-cyan: hsl(180, 62%, 55%);
    --color-orange: hsl(34, 97%, 64%);
    --color-blue: hsl(212, 86%, 64%);

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    font-size: 1.2rem;

    padding: 10rem;
`;

export const Header = styled.header`
    text-align: center;

    .Title {
        font-size: 2.9rem;
        color: var(--color-grayblue);
    }
    .SubTitle {
        color: var(--color-darkblue);
        font-size: 3.2rem;
        font-weight: 700;
    }
    .HeaderText {
        margin: 0 auto;
        width: 65%;
        font-size: 1.8rem;
        color: var(--color-grayblue);
        @media only screen and (max-width: 768px) {
            width: 89%;
            font-size: 1.5rem;
        }
    }
    margin-bottom: 10rem;

    & > * {
        margin-bottom: 1.5rem;
    }
`;

export const CardsGrid = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 90%;
`;

export const Card = styled.div`
    --margin: 3%;
    --columns: 3;
    --basis: calc(calc(100% - var(--margin) * 3) / var(--columns));
    flex: 0 0 var(--basis);
    margin: 0 0 var(--margin) var(--margin);
    min-height: 25rem;

    border-top: 0.8rem solid ${(props) => `var(--color-${props.color})`};
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    position: relative;

    .Title {
        font-size: 2.5rem;
        color: var(--color-darkblue);
    }
    .Text {
        font-size: 1.8rem;
        color: var(--color-grayblue);
        padding-right: 10rem;
    }

    svg {
        position: absolute;
        bottom: 2.5rem;
        right: 2.5rem;
    }

    @media only screen and (max-width: 1024px) {
        flex: 0 0 100%;
    }

    @media only screen and (min-width: 1024px) {
        &:nth-of-type(odd) {
            transform: translateY(50%);
        }

        &:last-child {
            grid-column: 2 / span 1;
        }
    }
`;
