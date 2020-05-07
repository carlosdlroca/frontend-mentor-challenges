import React from "react";
import { Page, Heading } from "./Styles";
import { ReactComponent as Logo } from "./media/logo.svg";

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
        </Page>
    );
};
