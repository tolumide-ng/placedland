import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";

interface BenefitProfitDef {
    benefitImg: string;
    benefitTitle: string;
    benefitDescription: string;
    benefitAlt: string;
}

export const BenefitProfit = (props: BenefitProfitDef) => {
    return (
        <div className={style.ben}>
            <div className={style.benLeft}>
                <LoadImg
                    loadAlt={props.benefitAlt}
                    loadImg={props.benefitImg}
                    loadClass={style.benImage}
                />
            </div>

            <div className={style.benRight}>
                <h4 className={style.benTitle}>{props.benefitTitle}</h4>
                <p style={style.benDesc}>{props.benefitDescription}</p>
            </div>
        </div>
    );
};
