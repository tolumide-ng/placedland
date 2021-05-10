import * as React from "react";
import style from "./index.module.css";
import applyImage from "@imgs/applyRight.svg";
import { LoadImg } from "@atoms/LoadImg";

export const ApplyRight = () => {
    return (
        <div className={style.applyr}>
            <LoadImg loadAlt="" loadClass="" loadImg={applyImage} />
        </div>
    );
};
