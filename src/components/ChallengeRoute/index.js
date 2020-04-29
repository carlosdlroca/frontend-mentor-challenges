import React from "react";
import { useParams } from "react-router-dom";

export default ({ challenges }) => {
    const { difficulty, challenge_name } = useParams();
    const { component: Challenge } = challenges[difficulty].filter(
        (challenge) => challenge.param === challenge_name
    )[0];

    return <Challenge />;
};
