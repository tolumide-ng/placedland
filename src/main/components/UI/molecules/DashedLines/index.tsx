import * as React from "react";
import style from "./index.module.css";

export const DashedLines = () => {
    return (
        <div className={style.dotted}>
            <div className={style.dottedDash}></div>
            <div className={style.dottedDash}></div>
            <div className={style.dottedDash}></div>
        </div>
    );
};
