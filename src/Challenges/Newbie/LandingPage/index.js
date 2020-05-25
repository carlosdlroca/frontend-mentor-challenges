import React from "react";

import MockupSvg from "./media/illustration-mockups.svg";
import { ReactComponent as HuddleLogo } from "./media/logo.svg";
import { ReactComponent as FacebookSvg } from "../../shared/icons/facebook-f.svg";
import { ReactComponent as InstagramSvg } from "../../shared/icons/instagram.svg";
import { ReactComponent as TwitterSvg } from "../../shared/icons/twitter.svg";

import "./Styles.css";
export default () => (
    <main>
        <nav className='Nav'>
            <HuddleLogo />
        </nav>
        <section>
            <div className='Left'>
                <img src={MockupSvg} alt='Mockup' />
            </div>
            <div className='Right'>
                <h1 className='Title'>
                    Build The Community Your Fans Will Love
                </h1>
                <p className='Text'>
                    Huddle re-imagines the way we build communities. You have a
                    voice, but so does your audience. Create connections with
                    your users as you engage in genuine discussion.
                </p>
                <button>Register</button>
            </div>
        </section>
        <footer>
            <FacebookSvg />
            <InstagramSvg />
            <TwitterSvg />
        </footer>
    </main>
);
