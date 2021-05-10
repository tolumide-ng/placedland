import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";

interface BenefitPointDef {
    benefitImg: string;
    benefitTitle: string;
    benefitDescription: string;
    benefitAlt: string;
    benefitBackground: string;
}

export const BenefitPoint = (props: BenefitPointDef) => {
    return (
        <div className={`${style.ben} ${props.benefitBackground}`}>
            <div className={style.benLeft}>
                <LoadImg
                    loadAlt={props.benefitAlt}
                    loadImg={props.benefitImg}
                    loadClass={style.benImage}
                />
            </div>

            <div className={style.benRight}>
                <h4 className={style.benTitle}>{props.benefitTitle}</h4>
                <p className={style.benDesc}>{props.benefitDescription}</p>
            </div>
        </div>
    );
};
