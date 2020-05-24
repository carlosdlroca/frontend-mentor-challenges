import React, { useState } from "react";
import { Testimonial, Buttons } from "./Styles";
import { ReactComponent as QuotesSVG } from "./media/pattern-quotes.svg";
import { ReactComponent as PrevSVG } from "./media/icon-prev.svg";
import { ReactComponent as NextSVG } from "./media/icon-next.svg";

export default ({ testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonial = testimonials[activeIndex];

    function handleClick(direction) {
        var newActiveIndex = direction + activeIndex;
        if (newActiveIndex >= 0) {
            setActiveIndex(newActiveIndex % testimonials.length);
        } else {
            setActiveIndex(testimonials.length + newActiveIndex);
        }
    }

    return (
        <Testimonial>
            <div className='Left'>
                <p className='Quote'>
                    {testimonial.quote}
                    <QuotesSVG />
                </p>
                <p className='Worker'>
                    <span className='Name'>{testimonial.name}</span>
                    <span className='Job'>{testimonial.job}</span>
                </p>
            </div>
            <div className='Right'>
                <div className='Image'>
                    <img
                        src={testimonial.headshot}
                        alt=''
                        className='Headshot'
                    />
                    <Buttons>
                        <button onClick={() => handleClick(-1)}>
                            <PrevSVG />
                        </button>
                        <button onClick={() => handleClick(1)}>
                            <NextSVG />
                        </button>
                    </Buttons>
                </div>
            </div>
        </Testimonial>
    );
};
