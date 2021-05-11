import { PlacedFeatures } from "@organisms/PlacedFeatures";
import { PlacedInfo } from "@organisms/PlacedInfo";
import { PlacedOffers } from "@organisms/PlacedOffers";
import * as React from "react";
import "./index.css";

export const LandingPage = () => {
    const [data, setData] = React.useState(undefined);
    return (
        <article className="ldpg">
            <article className="ldpg-cont">
                <PlacedOffers />
                <PlacedFeatures />
                <PlacedInfo />
            </article>
        </article>
    );
};
