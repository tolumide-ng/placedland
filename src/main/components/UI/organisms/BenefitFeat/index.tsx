import { BenefitsRight } from "@organisms/BenefitRight";
import { BenefitsLeft } from "@organisms/BenefitsLeft";
import * as React from "react";
import styles from "./index.module.css";

export const BenefitFeat = () => {
    return (
        <div className={styles.benefit}>
            <div className={styles.benLeft}>
                <BenefitsLeft />
            </div>
            <div className={styles.benRight}>
                <BenefitsRight />
            </div>
        </div>
    );
};
