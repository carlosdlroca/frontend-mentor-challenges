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

    padding: 10rem 1rem;
`;

export const Heading = styled.header`
    font-weight: 300;
    .Title {
        font-size: 4rem;
        .soon {
            font-weight: 600;
            color: var(--color-darkblue);
        }
    }
    .SubTitle {
        font-size: 1.5rem;
    }
`;
