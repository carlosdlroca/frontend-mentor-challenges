import React from "react";
import Footer from "../../shared/components/Footer";
import { Page, Nav, Header, Features, FeatureBlock } from "./Styles";
import { PillButton } from "../../shared/components/Button";
import { ReactComponent as HuddleLogo } from "./media/logo.svg";
import MockupSvg from "./media/illustration-mockups.svg";
import GrowTogetherSvg from "./media/illustration-grow-together.svg";
import FlowingConversationsSvg from "./media/illustration-flowing-conversation.svg";
import YourUsersSvg from "./media/illustration-your-users.svg";

const PaddedButton = (props) => (
    <PillButton {...props} padding={"2rem 4.5rem"} font-size={"2rem"}>
        {props.children}
    </PillButton>
);

const GetStartedButton = () => (
    <PaddedButton backgroundColor={"var(--color-pink)"} textColor={"white"}>
        Get Started For Free
    </PaddedButton>
);

export default () => (
    <Page>
        <Header>
            <Nav>
                <HuddleLogo />
                <PaddedButton
                    textColor={"var(--color-dark-cyan)"}
                    backgroundColor={"white"}
                >
                    Try it Free
                </PaddedButton>
            </Nav>

            <section className='HeaderContent'>
                <div className='CTA'>
                    <h1 className='Title'>
                        Build The Community Your Fans Will Love
                    </h1>
                    <h2 className='Text'>
                        Huddle re-imagines the way we build communities. You
                        have a voice, but so does your audience. Create
                        connections with your users as you engage in genuine
                        discussion.
                    </h2>
                    <GetStartedButton />
                </div>
                <div className='Image'>
                    <img src={MockupSvg} alt='Mockup' />
                </div>
            </section>
        </Header>

        <Features>
            <FeatureBlock>
                <div className='Description'>
                    <div className='Title'>Grow Together</div>
                    <div className='Text'>
                        Generate meaningful discussions with your audience and
                        build a strong, loyal community. Think of the insightful
                        conversations you miss out on with a feedback form.
                    </div>
                </div>
                <img
                    src={GrowTogetherSvg}
                    alt='Grow Together'
                    className='Image'
                />
            </FeatureBlock>
            <FeatureBlock>
                <div className='Description'>
                    <div className='Title'>Flowing Conversations</div>
                    <div className='Text'>
                        You wouldn't paginate a conversation in real life, so
                        why do it online? Our threads have just-in-time loading
                        for a more natural flow.
                    </div>
                </div>
                <img
                    src={FlowingConversationsSvg}
                    alt='Flowing Conversations'
                    className='Image'
                />
            </FeatureBlock>
            <FeatureBlock>
                <div className='Description'>
                    <div className='Title'>Your Users</div>
                    <div className='Text'>
                        It takes no time at all to integrate Huddle with your
                        app's authentication solution. This means, once signed
                        in to your app, your users can start chatting
                        immediately.
                    </div>
                </div>
                <img src={YourUsersSvg} alt='Your Users' className='Image' />
            </FeatureBlock>
        </Features>

        <Footer Logo={HuddleLogo} location email phone>
            <div className='Action'>
                <strong className='ActionTitle'>
                    Ready To Build Your Community?
                </strong>
                <GetStartedButton />
            </div>
        </Footer>
    </Page>
);
