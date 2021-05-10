import { DashedLines } from "@molecules/DashedLines";
import { BrandsCard } from "@organisms/BrandsCard";
import * as React from "react";
import style from "./index.module.css";
import { relatedBrandsOptions } from "./index.options";

export const RelatedBrands = () => {
    return (
        <section className={style.rbrands}>
            <h3 className={style.rbrandsTitle}>Related Brands</h3>
            <div className={style.rbrandsCont}>
                {relatedBrandsOptions.map((brand) => (
                    <BrandsCard
                        brandImg={brand.img}
                        brandLogo={brand.logo}
                        brandMoto={brand.motto}
                        brandName={brand.name}
                    />
                ))}
            </div>
            <DashedLines />
        </section>
    );
};
