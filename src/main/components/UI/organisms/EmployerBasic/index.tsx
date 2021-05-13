import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import { SubscribeEmployer } from "@molecules/SubscribeEmployer";

export interface EmployerBasicDef {
    logo: string;
    headerImg: string;
    name: string;
    info: string;
}

export const EmployerBasic = (props: EmployerBasicDef) => {
    return (
        <section className={style.emp}>
            <figure className={style.empFig}>
                <LoadImg
                    loadAlt="image showing employer's logo"
                    loadImg={props.headerImg}
                    loadHeight="440px"
                    loadClass={style.empHeader}
                />

                <figcaption className={style.empCaption}>
                    <LoadImg
                        loadAlt="image showing employer's logo"
                        loadImg={props.logo}
                        loadHeight="96px"
                        loadClass={style.empCaptionLogo}
                    />
                    <h2 className={style.empName}>{props.name}</h2>
                    <p className={style.empDesc}>{props.info}</p>
                    <SubscribeEmployer />
                </figcaption>
            </figure>
        </section>
    );
};
