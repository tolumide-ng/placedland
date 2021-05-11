import * as React from "react";
import style from "./index.module.css";
import { CareerPath } from "@organisms/CareerPath";
import { Opinion } from "@organisms/Opinion";
import { BenefitFeat } from "@organisms/BenefitFeat";
import { MainQuoteDef } from "src/main/commonTypes";

interface PlacedFeaturesDef {
    mainQuote: MainQuoteDef;
    carousel: Array<string>;
    name: string;
}

export const PlacedFeatures = (props: PlacedFeaturesDef) => {
    return (
        <section>
            <CareerPath carousel={props.carousel} name={props.name} />
            <Opinion mainQuote={props.mainQuote} />
            <BenefitFeat />
        </section>
    );
};
