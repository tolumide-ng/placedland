import { BouncyLoader } from "@molecules/BouncyLoader";
import * as React from "react";
import style from "./index.module.css";

export const LoadScreen = () => {
    return (
        <div className={style.load}>
            <BouncyLoader />
        </div>
    );
};
