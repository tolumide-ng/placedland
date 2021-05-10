import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import olajideImg from "@imgs/olajide.svg";

export const OpinionImg = () => {
    return (
        <figure>
            <LoadImg
                loadAlt="image showing Olajide Alabi, our diversion and Inclusion specialist"
                loadImg={olajideImg}
                loadClass={style.opImg}
            />
            <figcaption>
                <p>Olajide Alabi</p>
                <hr />
                <p>Diversity & Inclusion Specialist</p>
            </figcaption>
        </figure>
    );
};
