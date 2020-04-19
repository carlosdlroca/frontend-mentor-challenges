import React from "react";
import Router from "./Router";
import BaseStyles from "./Styles/BaseStyles";
import ResetStyles from "./Styles/Reset";

export default () => (
    <div>
        <BaseStyles />
        <ResetStyles />
        <Router />
    </div>
);
