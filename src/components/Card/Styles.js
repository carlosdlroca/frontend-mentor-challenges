import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    padding-bottom: 2rem;

    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.5);
    background: white;
    color: #565656;

    & > *:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

export const CardTitle = styled.h2`
    font-size: 2.5rem;
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardButton = styled.button`
    width: 95%;
    border-radius: 5rem;
    padding: 1rem;
    font-size: 2.3rem;
    background-color: var(--color-main);
    box-shadow: 0.5rem 0.5rem var(--color-sub);
    transition: all 0.2s ease;
    &:hover,
    &:focus {
        transform: translate(-0.35rem, -0.35rem);
        box-shadow: 0.85rem 0.85rem var(--color-sub);
    }

    &:active {
        transform: translate(-0.1rem, -0.1rem);
        box-shadow: 0.6rem 0.6rem var(--color-sub);
    }

    a {
        display: block;
        height: 100%;
        width: 100%;
        color: white;
    }
`;
