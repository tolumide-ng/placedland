import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import { SubscribeEmployer } from "@molecules/SubscribeEmployer";
import gourmentBg from "@imgs/gourmentBackground.svg";

interface EmployerBasicDef {
    logo: string;
    headerImg: string;
}

export const EmployerBasic = (props: EmployerBasicDef) => {
    return (
        <section className={style.emp}>
            <figure className={style.empFig}>
                <LoadImg
                    loadAlt="image showing employer's logo"
                    // loadImg={props.headerImg}
                    loadImg={gourmentBg}
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
                    <h2 className={style.empName}>Gourment Burger Kitchen</h2>
                    <p className={style.empDesc}>
                        Fine Dining/ Michelin Star Restaurant
                    </p>
                    <SubscribeEmployer />
                </figcaption>
            </figure>
        </section>
    );
};
