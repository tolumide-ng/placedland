import * as React from "react";
import style from "./index.module.css";
import { CareerPath } from "@organisms/CareerPath";
import { Opinion } from "@organisms/Opinion";

export const PlacedFeatures = () => {
    return (
        <section>
            <CareerPath />
            <Opinion />
        </section>
    );
};
