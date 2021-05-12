import { DashedLines } from "@molecules/DashedLines";
import { BrandsCard } from "@organisms/BrandsCard";
import { UniqueApplication } from "@organisms/UniqueApplication";
import * as React from "react";
import style from "./index.module.css";
import { relatedBrandsOptions } from "./index.options";

export const RelatedBrands = () => {
    return (
        <section className={style.rbrands}>
            <h3 className={style.rbrandsTitle}>Related Brands</h3>
            <ul className={style.rbrandsCont}>
                {relatedBrandsOptions.map((brand, index) => (
                    <li key={index} className={style.rbrandsLi}>
                        <BrandsCard
                            brandImg={brand.img}
                            brandLogo={brand.logo}
                            brandMoto={brand.motto}
                            brandName={brand.name}
                        />
                    </li>
                ))}
            </ul>

            <div className={style.rbrandsDash}>
                <DashedLines />
            </div>

            <UniqueApplication />
        </section>
    );
};
