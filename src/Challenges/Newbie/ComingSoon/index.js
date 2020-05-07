import React from "react";
import { ComingSoonPage, MainContent, ImageContainer, Logo } from "./Styles";
import Image from "../../../../components/Image";
import HeroDesktop from "./media/hero-desktop.jpg";
import HeroMobile from "./media/hero-mobile.jpg";

import { ReactComponent as LogoSvg } from "./media/logo.svg";
import { ReactComponent as ArrowSvg } from "./media/icon-arrow.svg";
import { ReactComponent as ErrorSvg } from "./media/icon-error.svg";
export default () => (
    <ComingSoonPage>
        <div className='background' />
        <Logo>
            <LogoSvg />
        </Logo>
        <MainContent>
            <h1 className='RedTitle'>WE'RE</h1>
            <h2 className='DarkTitle'>COMING SOON</h2>
            <p className='MainText'>
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
            </p>
            <form
                action='#'
                className='Form'
                onSubmit={(e) => e.preventDefault}
            >
                <input
                    type='email'
                    className='Input'
                    placeholder='Email Address'
                />
                <span className='ErrorIcon'>
                    <ErrorSvg />
                </span>
                <button className='Submit'>
                    <ArrowSvg />
                </button>
                <div className='ErrorStatus'>
                    Please Provide a valid Email Address
                </div>
            </form>
        </MainContent>
        <ImageContainer>
            <Image
                className={"image"}
                imgSrc={HeroMobile}
                srcSet={HeroDesktop}
                alt='Female Model'
                mediaQuery={"(min-width: 900px)"}
            />
        </ImageContainer>
    </ComingSoonPage>
);
