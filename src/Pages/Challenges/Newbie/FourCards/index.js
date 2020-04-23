import React from "react";
import { ReactComponent as SupervisorIcon } from "./media/icon-supervisor.svg";
import { ReactComponent as TeamBuilderIcon } from "./media/icon-team-builder.svg";
import { ReactComponent as CalculatorIcon } from "./media/icon-calculator.svg";
import { ReactComponent as KarmaIcon } from "./media/icon-karma.svg";

import { FourCardsWrapper, Header, CardsGrid, Card } from "./Styles";

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
                <h2 className='Title'>Calculator</h2>
                <p className='Text'>
                    Uses data from past projects to provide better delivery
                    estimates
                </p>
                <CalculatorIcon />
            </Card>
            <Card color='orange'>
                <h2 className='Title'>Karma</h2>
                <p className='Text'>
                    Regularly evaluates our talent to ensure quality
                </p>
                <KarmaIcon />
            </Card>
        </CardsGrid>
    </FourCardsWrapper>
);
