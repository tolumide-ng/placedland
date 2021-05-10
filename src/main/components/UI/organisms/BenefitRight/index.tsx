import * as React from "react";
import { BenefitPoint } from "@molecules/BenefitPoint";
import style from "./index.module.css";

import cycle from "@imgs/cycle.svg";
import referrals from "@imgs/referral.svg";
import money from "@imgs/money.svg";

const allBenefits = [
    {
        image: cycle,
        title: "Cycle to work scheme",
        description: " Available to all employees",
        alt: "image showing a person riding a bicycle",
    },
    {
        image: referrals,
        title: "Referrals",
        description: "Get up to £250 for each person you refer",
        alt: "image showing a referrals icon",
    },
    {
        image: money,
        title: "Tips",
        description: "Keep 100% of all your tips",
        alt: "image showing a money icon",
    },
];

export const BenefitsRight = () => {
    return (
        <div className="">
            {allBenefits.map((benefit) => (
                <BenefitPoint
                    benefitImg={benefit.image}
                    key={benefit.title}
                    benefitTitle={benefit.title}
                    benefitDescription={benefit.description}
                    benefitAlt={benefit.alt}
                />
            ))}
        </div>
    );
};
