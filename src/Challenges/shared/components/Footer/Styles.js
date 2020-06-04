import styled from "styled-components";

export const Footer = styled.footer`
    font-size: 1.6rem;
    padding: 5rem 6rem;
    & > svg {
        margin: 5rem 0;
    }

    .Info-Item {
        margin-bottom: 1.3rem;
        svg {
            margin-right: 1rem;
        }
    }

    .Website-Links {
        padding: 0 6rem;
        & > * {
            margin-bottom: 1.2rem;
        }
    }

    .Copyright {
        display: block;
        text-align: right;
        margin: 5rem 0 2rem;
    }

    @media only screen and (max-width: 1000px) {
        font-size: 2rem;
        .FooterContent {
            & > * {
                flex: 0 0 100%;
            }
        }

        .Website-Links {
            font-size: 2.4rem;
            margin: 5rem 0;
            padding: 0;
            flex-direction: column;
            align-items: flex-start;
        }

        .Copyright {
            text-align: center;
        }
    }

    @media only screen and (max-width: 600px) {
        padding: 5rem 3rem;
        .Company-Info {
            font-size: 1.7rem;
        }
    }
`;

export const HoveredText = styled.span`
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
