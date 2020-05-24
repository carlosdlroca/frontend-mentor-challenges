import React from "react";
import { Page } from "./Styles";
import Testimonials from "./Testimonials";
import { ReactComponent as CurveSVG } from "./media/pattern-curve.svg";
import Tanya from "./media/image-tanya.jpg";
import John from "./media/image-john.jpg";

const testimonials = [
    {
        quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future. ”`,
        name: "Tanya Sinclair",
        job: "UX Engineer",
        headshot: Tanya,
    },
    {
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        headshot: John,
    },
];

export default () => {
    return (
        <Page>
            <Testimonials testimonials={testimonials} />
            <CurveSVG className='CurveSVG' />
        </Page>
    );
};
