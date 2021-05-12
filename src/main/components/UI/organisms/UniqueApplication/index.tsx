import * as React from "react";
import { ApplyReason } from "@molecules/ApplyReason";
import style from "./index.module.css";

export const UniqueApplication = () => {
    return (
        <div className={style.unique}>
            <div className={style.uniqueMid}>
                <ApplyReason />
            </div>
        </div>
    );
};
