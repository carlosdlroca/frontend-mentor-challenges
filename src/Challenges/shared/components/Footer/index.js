import React from "react";
import { Footer, HoveredText } from "./Styles";
import { FlexRow, FlexColumn } from "../Flex";
import SocialMediaLinks from "../SocialMediaLinks";
import { ReactComponent as LocationIcon } from "../../icons/icon-location.svg";
import { ReactComponent as PhoneIcon } from "../../icons/icon-phone.svg";
import { ReactComponent as EmailIcon } from "../../icons/icon-email.svg";

export default ({ Logo, phone, email, location, children }) => (
    <Footer>
        <Logo />
        <FlexRow
            itemsPerRow={3}
            adjustFlexSize={0.8}
            justifyContent={"space-between"}
            className='FooterContent'
        >
            <FlexColumn
                alignItems={"flex-start"}
                margin={"1rem"}
                className='Company-Info'
            >
                {location && (
                    <div className='Info-Item'>
                        <LocationIcon />
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </span>
                    </div>
                )}
                {phone && (
                    <div className='Info-Item'>
                        <PhoneIcon />
                        <span>+1-543-123-4567</span>
                    </div>
                )}
                {email && (
                    <div className='Info-Item'>
                        <EmailIcon />
                        <span>example@huddle.com</span>
                    </div>
                )}
            </FlexColumn>
            <FlexRow
                itemsPerRow={2}
                className='Website-Links'
                justifyContent={"flex-start"}
                alignItems={"space-between"}
            >
                <HoveredText>About Us</HoveredText>
                <HoveredText>Contact Us</HoveredText>
                <HoveredText>Jobs</HoveredText>
                <HoveredText>Terms</HoveredText>
                <HoveredText>Press</HoveredText>
                <HoveredText>Privacy</HoveredText>
                <HoveredText>Blog</HoveredText>
            </FlexRow>
            <SocialMediaLinks />
        </FlexRow>
        <span className='Copyright'>
            {" "}
            &copy; Copyright 2018 Huddle. All rights reserved.
        </span>
        {children}
    </Footer>
);
