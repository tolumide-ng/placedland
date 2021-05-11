import * as React from "react";
import style from "./index.module.css";
import { OpinionImg } from "@molecules/OpinonImg";
import { OpinionQuote } from "@molecules/OpinionQuote";
import { DashedLines } from "@molecules/DashedLines";
import { MainQuoteDef } from "src/main/commonTypes";

interface OpinionDef {
    mainQuote: MainQuoteDef;
}

export const Opinion = (props: OpinionDef) => {
    return (
        <section className={style.opinion}>
            <div className={style.opinionCont}>
                <OpinionImg
                    name={props.mainQuote.heading}
                    position={props.mainQuote.footer}
                    image={props.mainQuote.footer_photo}
                />
                <OpinionQuote quote={props.mainQuote.body} />
            </div>
            <DashedLines />
        </section>
    );
};
