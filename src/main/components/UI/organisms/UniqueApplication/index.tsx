import * as React from "react";
import { ApplyLeft } from "@molecules/ApplyLeft";
import { ApplyReason } from "@molecules/ApplyReason";
import { ApplyRight } from "@molecules/ApplyRight";
import style from "./index.module.css";

export const UniqueApplication = () => {
    return (
        <div className={style.unique}>
            <ApplyLeft />

            <div className={style.uniqueMid}>
                <ApplyReason />
            </div>
            <ApplyRight />
        </div>
    );
};
