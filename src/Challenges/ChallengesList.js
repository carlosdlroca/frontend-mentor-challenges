import React from "react";
import { ChallengesListPage } from "./Styles";
import Grid from "../components/Grid";
import Card from "../components/Card";

export default ({ challenges }) => {
    function createCardComponents(difficulty) {
        return challenges[difficulty].map(
            ({ name, param, frontend_mentor_link }) => {
                var path = `/challenges/${difficulty}/${param}`;
                return (
                    <Card
                        key={name}
                        title={name}
                        image_src={path + ".jpg"}
                        link_url={path}
                    >
                        <a
                            style={{ fontSize: "1.8rem" }}
                            href={frontend_mentor_link}
                        >
                            visit original challenge
                        </a>
                    </Card>
                );
            }
        );
    }

    return (
        <ChallengesListPage>
            {Object.keys(challenges).map((difficulty) => (
                <div key={difficulty}>
                    <h1 id={difficulty}>{difficulty} Challenges: </h1>
                    <Grid>{createCardComponents(difficulty)}</Grid>
                </div>
            ))}
        </ChallengesListPage>
    );
};
