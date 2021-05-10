import { LoadImg } from "@atoms/LoadImg";
import applyImage from "@imgs/applyLeft.svg";
import * as React from "react";
import style from "./index.module.css";

export const ApplyLeft = () => {
    return (
        <div className={style.applyl}>
            <LoadImg loadAlt="" loadClass="" loadImg={applyImage} />
        </div>
    );
};
