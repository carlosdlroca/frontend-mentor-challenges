import React from "react";
import { Page, Grid, Header, Signup, Info } from "./Styles";
import { RoundedButton } from "../../shared/components/Button";

export default () => (
    <Page>
        <Grid>
            <Header>
                <h2 className='Title'>Join our community</h2>
                <p className='Guarantee'>
                    30-day, hassle-free money back guarantee
                </p>
                <p className='Text'>
                    Gain access to our full library of tutorials along with
                    expert code reviews. Perfect for any developers who are
                    serious about honing their skills.
                </p>
            </Header>
            <Signup>
                <h2 className='Title'>Monthly Subscription</h2>
                <p>
                    <span className='Price'>$29</span>{" "}
                    <span className='Rate'>per month</span>
                </p>
                <p>Full access for less than $1 a day</p>
                <RoundedButton
                    backgroundColor={"var(--color-yellow)"}
                    textColor={"white"}
                    padding={"1rem"}
                >
                    Sign up
                </RoundedButton>
            </Signup>
            <Info>
                <h2 className='Title'>Why US</h2>

                <ul>
                    <li>Tutorials by industry experts</li>
                    <li>Peer &amp; expert code review</li>
                    <li>Coding exercises</li>
                    <li>Access to our GitHub repos</li>
                    <li>Community forum</li>
                    <li>Flashcard decks</li>
                    <li>New videos every week</li>
                </ul>
            </Info>
        </Grid>
    </Page>
);
