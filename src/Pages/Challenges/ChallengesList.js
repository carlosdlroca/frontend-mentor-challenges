import React from "react";

import { useParams } from "react-router-dom";

export default () => {
    const { difficulty } = useParams();

    return <h1>{difficulty} challenges are a work in progress</h1>;
};
