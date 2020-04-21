import React from "react";
import { Card, CardTitle, CardButton, CardImage } from "./Styles";
import { Link } from "react-router-dom";

export default ({ title, link_url, image_src, children }) => (
    <Card>
        <CardTitle>{title}</CardTitle>
        <CardImage src={image_src} alt={title} />
        <CardButton>
            <Link to={link_url}>View my solution</Link>
        </CardButton>
        {children}
    </Card>
);
