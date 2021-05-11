import * as React from "react";
import style from "./index.module.css";

export const BouncyLoader = () => {
    return (
        <div className={style.lazy}>
            <div className={style.lazyC}></div>
            <div className={style.lazyC}></div>
            <div className={style.lazyC}></div>
        </div>
    );
};
