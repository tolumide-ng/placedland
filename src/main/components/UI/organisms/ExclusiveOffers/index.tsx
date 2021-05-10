import { JobOffer } from "@organisms/JobOffer";
import * as React from "react";
import style from "./index.module.css";

export const ExclusiveOffers = () => {
    return (
        <section className={style.excl}>
            <div className={style.exclTitle}>
                <h2>Exclusive Job Offers</h2>
            </div>

            <div className={style.exclJobs}>
                <JobOffer />
            </div>
        </section>
    );
};
