import { RelatedBrands } from "@organisms/RelatedBrands";
import { TestimoniesContainer } from "@organisms/TestimoniesContainer";

import * as React from "react";
import { QuoteInfoDef } from "src/main/commonTypes";
import style from "./index.module.css";

interface PlacedInfoDef {
    quotes: Array<QuoteInfoDef>;
}

export const PlacedInfo = (props: PlacedInfoDef) => {
    return (
        <section className={style.placedIn}>
            <TestimoniesContainer quotes={props.quotes} />
            <div className={style.placedInBottom}>
                <RelatedBrands />
            </div>
        </section>
    );
};
