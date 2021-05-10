import { BenefitFeat } from "@organisms/BenefitFeat";
import { EmployerBasic } from "@organisms/EmployerBasic";
import { ExclusiveOffers } from "@organisms/ExclusiveOffers";
import { PlacedFeatures } from "@organisms/PlacedFeatures";
import { TestimoniesContainer } from "@organisms/TestimoniesContainer";
import * as React from "react";
import "./index.css";

export const LandingPage = () => {
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                <EmployerBasic />
                <PlacedFeatures />
                <TestimoniesContainer />
            </article>
        </article>
    );
};
