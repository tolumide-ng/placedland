import { Button } from "@atoms/Button";
import { JobOffer } from "@organisms/JobOffer";
import * as React from "react";
import style from "./index.module.css";

export const ExclusiveOffers = () => {
    return (
        <section className={style.excl}>
            <div className={style.exclTitle}>
                <h2 className={style.exclTitleH}>Exclusive Job Offers</h2>
            </div>

            <div className={style.exclJobs}>
                {new Array(3).fill("_").map((option, index) => (
                    <JobOffer key={index} />
                ))}
            </div>

            <div className={style.exclAction}>
                <Button
                    buttonClass={`${style.exclButton} appButton`}
                    buttonText="See All"
                    buttonType="button"
                />
            </div>
        </section>
    );
};
