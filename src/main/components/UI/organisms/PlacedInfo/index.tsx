import { RelatedBrands } from "@organisms/RelatedBrands";
import { TestimoniesContainer } from "@organisms/TestimoniesContainer";

import * as React from "react";
import style from "./index.module.css";

export const PlacedInfo = () => {
    return (
        <section className={style.placedIn}>
            <TestimoniesContainer />
            <div className={style.placedInBottom}>
                <RelatedBrands />
            </div>
        </section>
    );
};
