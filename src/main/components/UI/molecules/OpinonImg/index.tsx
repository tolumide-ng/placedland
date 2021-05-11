import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";

interface OpinionImgDef {
    image: string;
    position: string;
    name: string;
}

export const OpinionImg = (props: OpinionImgDef) => {
    return (
        <figure className={style.opCont}>
            <LoadImg
                loadAlt="image showing Olajide Alabi, our diversion and Inclusion specialist"
                loadImg={props.image}
                loadClass={style.opImg}
                loadHeight="448px"
                loadWidth="448px"
            />
            <figcaption className={style.opCaption}>
                <p className={style.opName}>{props.name}</p>
                {/* <hr /> */}
                <p className={style.opRole}>{props.position}</p>
            </figcaption>
        </figure>
    );
};
