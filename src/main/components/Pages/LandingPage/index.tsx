import { EmployerBasic } from "@organisms/EmployerBasic";
import { ExclusiveOffers } from "@organisms/ExclusiveOffers";
import { PlacedFeatures } from "@organisms/PlacedFeatures";
import { PlacedInfo } from "@organisms/PlacedInfo";
import { RelatedBrands } from "@organisms/RelatedBrands";
import { TestimoniesContainer } from "@organisms/TestimoniesContainer";
import * as React from "react";
import "./index.css";

export const LandingPage = () => {
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                <EmployerBasic />
                <PlacedFeatures />
                <PlacedInfo />
            </article>
        </article>
    );
};
