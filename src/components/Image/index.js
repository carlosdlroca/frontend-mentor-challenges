import React from "react";

export default ({ srcSet, imgSrc, mediaQuery, alt, className }) => (
    <picture className={className}>
        <source srcSet={srcSet} media={mediaQuery} />
        <img src={imgSrc} alt={alt} />
    </picture>
);
