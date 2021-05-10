import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import olajideImg from "@imgs/olajide.svg";

export const OpinionImg = () => {
    return (
        <figure className={style.opCont}>
            <LoadImg
                loadAlt="image showing Olajide Alabi, our diversion and Inclusion specialist"
                loadImg={olajideImg}
                loadClass={style.opImg}
                loadHeight="448px"
                loadWidth="448px"
            />
            <figcaption className={style.opCaption}>
                <p className={style.opName}>Olajide Alabi</p>
                {/* <hr /> */}
                <p className={style.opRole}>Diversity & Inclusion Specialist</p>
            </figcaption>
        </figure>
    );
};
