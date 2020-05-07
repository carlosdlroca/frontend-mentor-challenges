import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../ChallengeNav";

export default ({ challenges }) => {
    const { difficulty, challenge_name } = useParams();
    const { component: Challenge } = challenges[difficulty].filter(
        (challenge) => challenge.param === challenge_name
    )[0];

    return (
        <React.Fragment>
            <Nav difficulty={difficulty} challenge={challenge_name} />
            <Challenge />
        </React.Fragment>
    );
};
