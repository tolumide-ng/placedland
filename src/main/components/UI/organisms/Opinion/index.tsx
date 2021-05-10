import * as React from "react";
import style from "./index.module.css";
import { OpinionImg } from "@molecules/OpinonImg";
import { OpinionQuote } from "@molecules/OpinionQuote";
import { DashedLines } from "@molecules/DashedLines";

export const Opinion = () => {
    return (
        <section className={style.opinion}>
            <div className={style.opinionCont}>
                <OpinionImg />
                <OpinionQuote />
            </div>
            <DashedLines />
        </section>
    );
};
