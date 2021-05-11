import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import quotation from "@imgs/quotation.svg";

interface OpinionQuoteDef {
    quote: string;
}

export const OpinionQuote = (props: OpinionQuoteDef) => {
    return (
        <section className={style.opinon}>
            <LoadImg
                loadImg={quotation}
                loadAlt="image showing a quotation mark"
                loadClass={style.opinionImg}
            />
            <div className={style.opinonQuote}>
                <p className={style.opinonText}>{props.quote}</p>
            </div>
        </section>
    );
};
