import { JobOffer } from "@organisms/JobOffer";
import * as React from "react";
import style from "./index.module.css";

export const ExclusiveOffers = () => {
    return (
        <section className={style.excl}>
            <div className="">
                <h2>Exclusive Job Offers</h2>
            </div>

            <JobOffer />
        </section>
    );
};
