import React from "react";
import { Page, Heading, Form as StyledForm, Footer } from "./Styles";
import { ReactComponent as Logo } from "./media/logo.svg";
import Dashboard from "./media/illustration-dashboard.png";

import { ReactComponent as Facebook } from "../../shared/icons/facebook-f.svg";
import { ReactComponent as Twitter } from "../../shared/icons/twitter.svg";
import { ReactComponent as Instagram } from "../../shared/icons/instagram.svg";

export default () => {
    return (
        <Page>
            <Logo />
            <Heading>
                <h1 className='Title'>
                    We are launching <span className='soon'>soon!</span>
                </h1>
                <h2 className='SubTitle'>Subscribe and get notified</h2>
            </Heading>
            <Form />
            <img src={Dashboard} alt={"dashboard"} />
            <Footer>
                <ul>
                    <li className='Link'>
                        <Facebook />
                    </li>
                    <li className='Link'>
                        <Twitter />
                    </li>
                    <li className='Link'>
                        <Instagram />
                    </li>
                </ul>
                &copy; Copyright Ping. All rights reserved.
            </Footer>
        </Page>
    );
};

function Form() {
    return (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
            <input placeholder='Your Email Address' type='email' />
            <span className='ErrorMessage'>
                Please provide a valid email address
            </span>
            <button>Notify Me</button>
        </StyledForm>
    );
}
