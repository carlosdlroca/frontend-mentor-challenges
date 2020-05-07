import React from "react";
import { Page, Left, Right } from "./Styles";
import Form from "./Form";

export default () => (
    <Page>
        <Left>
            <h1 className='Title'>Learn to code by watching others</h1>
            <p className='Text'>
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
            </p>
        </Left>
        <Right>
            <p className='TryItFree'>
                <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
            <Form />
        </Right>
    </Page>
);
