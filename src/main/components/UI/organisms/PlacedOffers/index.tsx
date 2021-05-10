import { EmployerBasic } from "@organisms/EmployerBasic";
import { ExclusiveOffers } from "@organisms/ExclusiveOffers";
import * as React from "react";
import style from "./index.module.css";

export const PlacedOffers = () => {
    return (
        <section className={style.placo}>
            <div className={style.placoEmployers}>
                <EmployerBasic />
            </div>
            <ExclusiveOffers />
        </section>
    );
};
