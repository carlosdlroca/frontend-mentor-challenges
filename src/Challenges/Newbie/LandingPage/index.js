import React from "react";

import { PillButton } from "../../shared/components/Button";

import MockupSvg from "./media/illustration-mockups.svg";
import { ReactComponent as HuddleLogo } from "./media/logo.svg";
import SocialMediaLinks from "../../shared/components/SocialMediaLinks";

import "./Styles.css";

export default () => (
    <main className='LandingMain'>
        <nav className='LandingNav'>
            <HuddleLogo />
        </nav>
        <section className='LandingSection'>
            <div className='LandingLeft'>
                <img src={MockupSvg} alt='Mockup' />
            </div>
            <div className='LandingRight'>
                <h1 className='LandingTitle'>
                    Build The Community Your Fans Will Love
                </h1>
                <p className='LandingText'>
                    Huddle re-imagines the way we build communities. You have a
                    voice, but so does your audience. Create connections with
                    your users as you engage in genuine discussion.
                </p>
                <PillButton
                    backgroundColor={"white"}
                    textColor={"var(--color-violet)"}
                    padding={"1.5rem 4rem"}
                >
                    Register
                </PillButton>
            </div>
        </section>
        <footer className='LandingFooter'>
            <SocialMediaLinks />
        </footer>
    </main>
);
