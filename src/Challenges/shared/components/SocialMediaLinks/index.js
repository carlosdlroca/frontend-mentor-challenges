import React from "react";
import { FlexRow } from "../Flex";
import SMLink from "./Styles";
import { ReactComponent as FacebookIcon } from "../../icons/facebook-f.svg";
import { ReactComponent as TwitterIcon } from "../../icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../icons/instagram.svg";

export default () => (
    <FlexRow
        justifyContent={"center"}
        alignItems={"center"}
        className='SocialMediaLinks'
    >
        <SMLink>
            <FacebookIcon />
        </SMLink>
        <SMLink>
            <TwitterIcon />
        </SMLink>
        <SMLink>
            <InstagramIcon />
        </SMLink>
    </FlexRow>
);
