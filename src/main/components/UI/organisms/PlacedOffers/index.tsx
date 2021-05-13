import { EmployerBasic, EmployerBasicDef } from "@organisms/EmployerBasic";
import { ExclusiveOffers } from "@organisms/ExclusiveOffers";
import * as React from "react";
import style from "./index.module.css";

interface PlacedOffersDef extends EmployerBasicDef {}

export const PlacedOffers = (props: PlacedOffersDef) => {
    return (
        <section className={style.placo}>
            <div className={style.placoEmployers}>
                <EmployerBasic
                    logo={props.logo}
                    headerImg={props.headerImg}
                    name={props.name}
                    info={props.info}
                />
            </div>
            <div className={style.placoOffers}>
                <ExclusiveOffers />
            </div>
        </section>
    );
};
