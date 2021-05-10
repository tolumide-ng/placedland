import * as React from "react";
import style from "./index.module.css";

export const DashedLines = () => {
    return (
        <div className={style.dotted}>
            <hr className={style.dottedDash} />
            <hr className={style.dottedDash} />
            <hr className={style.dottedDash} />
        </div>
    );
};
