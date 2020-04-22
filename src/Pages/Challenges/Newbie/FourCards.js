import React from "react";
import styled from "styled-components";
import { ReactComponent as SupervisorIcon } from "../icons/icon-supervisor.svg";
import { ReactComponent as TeamBuilderIcon } from "../icons/icon-team-builder.svg";
import { ReactComponent as CalculatorIcon } from "../icons/icon-calculator.svg";
import { ReactComponent as KarmaIcon } from "../icons/icon-karma.svg";

const FourCardsWrapper = styled.main`
    --color-red: hsl(0, 78%, 62%);
    --color-cyan: hsl(180, 62%, 55%);
    --color-orange: hsl(34, 97%, 64%);
    --color-blue: hsl(212, 86%, 64%);

    --color-darkblue: hsl(234, 12%, 34%);
    --color-grayblue: hsl(229, 6%, 66%)
    --color-light-gray: hsl(0,0%,98%);

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: var(--color-light-gray);
    font-size: 1.2rem;

    padding: 10rem;
`;

const Header = styled.header`
    text-align: center;

    .Title {
        font-size: 2.9rem;
    }
    .SubTitle {
        color: var(--color-grayblue);
        font-size: 3.2rem;
        font-weight: 700;
    }
    .HeaderText {
        margin: 0 auto;
        width: 65%;
        font-size: 1.8rem;
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

const CardsGrid = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const Card = styled.div`
    --margin: 3%;
    --columns: 3;
    --basis: calc(calc(100% - var(--margin) * 3) / var(--columns));
    flex: 0 0 var(--basis);
    margin: 0 0 var(--margin) var(--margin);
    min-height: 25rem;

    border-top: 0.4rem solid ${(props) => `var(--color-${props.color})`};
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    position: relative;

    .Title {
        font-size: 2.5rem;
        color: var(--color-grayblue);
    }
    .Text {
        font-size: 1.8rem;
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

export default () => (
    <FourCardsWrapper>
        <Header>
            <div className='Title'>Reliable, efficient delivery</div>
            <div className='SubTitle'>Powered by Technology</div>
            <div className='HeaderText'>
                Our Artificial Intelligence powered tools use millions of
                project data points to ensure that your project is successful
            </div>
        </Header>
        <CardsGrid>
            <Card color={"cyan"}>
                <h2 className='Title'>Supervisor</h2>
                <p className='Text'>
                    Monitors activity to identify project roadblocks
                </p>
                <SupervisorIcon />
            </Card>
            <Card color={"red"}>
                <h2 className='Title'>Team Builder</h2>
                <p className='Text'>
                    Scans our talent network to create the optimal team for your
                    project
                </p>
                <TeamBuilderIcon />
            </Card>
            <Card color='blue'>
                <h2 className='Title'>Karma</h2>
                <p className='Text'>
                    Regularly evaluates our talent to ensure quality
                </p>
                <KarmaIcon />
            </Card>
            <Card color='orange'>
                <h2 className='Title'>Calculator</h2>
                <p className='Text'>
                    Uses data from past projects to provide better delivery
                    estimates
                </p>
                <CalculatorIcon />
            </Card>
        </CardsGrid>
    </FourCardsWrapper>
);
