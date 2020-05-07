import React from "react";
import { ChallengesListPage } from "./Styles";
import Grid from "../components/Grid";
import Card from "../components/Card";

export default ({ challenges }) => {
    const { Newbie } = challenges;
    const renderChallengeCard = ({
        name,
        path,
        image,
        frontend_mentor_link,
    }) => (
        <Card key={name} title={name} image_src={image} link_url={path}>
            <a style={{ fontSize: "1.8rem" }} href={frontend_mentor_link}>
                visit original challenge
            </a>
        </Card>
    );
    return (
        <ChallengesListPage>
            <h1>Newbie Challenges: </h1>
            <Grid>{Newbie.map(renderChallengeCard)}</Grid>
        </ChallengesListPage>
    );
};
