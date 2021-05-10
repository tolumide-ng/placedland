import * as React from "react";
import style from "./index.module.css";
import { OpinionImg } from "@molecules/OpinonImg";

export const Opinion = () => {
    return (
        <section className={style.opinion}>
            <OpinionImg />
        </section>
    );
};
