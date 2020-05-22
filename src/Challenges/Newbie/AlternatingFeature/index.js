import React from "react";
import {
    Page,
    Nav,
    Header,
    Button,
    Features,
    FeatureBlock,
    Footer,
} from "./Styles";
import { ReactComponent as HuddleLogo } from "./media/logo.svg";
import MockupSvg from "./media/illustration-mockups.svg";
import GrowTogetherSvg from "./media/illustration-grow-together.svg";
import FlowingConversationsSvg from "./media/illustration-flowing-conversation.svg";
import YourUsersSvg from "./media/illustration-your-users.svg";

import { ReactComponent as EmailIcon } from "./media/icon-email.svg";
import { ReactComponent as LocationIcon } from "./media/icon-location.svg";
import { ReactComponent as PhoneIcon } from "./media/icon-phone.svg";

import { ReactComponent as FacebookIcon } from "../../shared/icons/facebook-f.svg";
import { ReactComponent as TwitterIcon } from "../../shared/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../shared/icons/instagram.svg";

export default () => (
    <Page>
        <Header>
            <Nav>
                <HuddleLogo />
                <Button color={"var(--color-dark-cyan)"} bgColor={"white"}>
                    Try it Free
                </Button>
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
                    <Button color={"white"} bgColor={"var(--color-pink)"}>
                        Get Started For Free
                    </Button>
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

        <Footer>
            <div className='Action'>
                <strong className='ActionTitle'>
                    Ready To Build Your Community?
                </strong>
                <Button bgColor='var(--color-pink)' color={"white"}>
                    Get Started For Free
                </Button>
            </div>

            <div className='FooterContent'>
                <div className='Logo'>
                    <HuddleLogo />
                </div>
                <div className='Company-Info'>
                    <ul className='General-Info'>
                        <li>
                            <LocationIcon />
                            <span className='Text'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua
                            </span>
                        </li>
                        <li>
                            <PhoneIcon />
                            <span className='Text'>+1-543-123-4567</span>
                        </li>
                        <li>
                            <EmailIcon />
                            <span className='Text'>example@huddle.com</span>
                        </li>
                    </ul>
                    <ul className='Website-Links'>
                        <li>About Us</li>
                        <li>Career</li>
                        <li>What We Do</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className='SocialMedia-Links'>
                        <li>
                            <FacebookIcon />
                        </li>
                        <li>
                            <TwitterIcon />
                        </li>
                        <li>
                            <InstagramIcon />
                        </li>
                    </ul>
                </div>
            </div>

            <div className='Copyright'>
                &copy; Copyright 2018 Huddle. All rights reserved.
            </div>
        </Footer>
    </Page>
);
