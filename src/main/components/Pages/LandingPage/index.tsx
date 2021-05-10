import { EmployerBasic } from "@organisms/EmployerBasic";
import { ExclusiveOffers } from "@organisms/ExclusiveOffers";
import * as React from "react";
import "./index.css";

export const LandingPage = () => {
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                <EmployerBasic />

                {/* <ExclusiveOffers /> */}
            </article>
        </article>
    );
};
