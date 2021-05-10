import { Button } from "@atoms/Button";
import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";

interface BrandsCardDef {
    brandImg: string;
    brandLogo: string;
    brandName: string;
    brandMoto: string;
}

export const BrandsCard = (props: BrandsCardDef) => {
    return (
        <div className={style.brand}>
            <figure className={style.brandFig}>
                <LoadImg
                    loadAlt={`image showing ${props.brandName}`}
                    loadImg={props.brandImg}
                    loadClass={style.brandImg}
                />
                <figcaption className={style.brandCaption}>
                    <LoadImg
                        loadAlt={`image showing the logo of ${props.brandName}`}
                        loadImg={props.brandLogo}
                        loadClass={style.brandLogo}
                    />
                    <Button
                        buttonClass={style.brandButton}
                        buttonText="Follow"
                    />
                </figcaption>
            </figure>
            <div className={style.brandName}>{props.brandName}</div>
            <p className={style.brandMotto}>{props.brandMoto}</p>
        </div>
    );
};
