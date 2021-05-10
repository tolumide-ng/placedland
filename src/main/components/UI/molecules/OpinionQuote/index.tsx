import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import quotation from "@imgs/quotation.svg";

export const OpinionQuote = () => {
    return (
        <section className={style.opinon}>
            <LoadImg
                loadImg={quotation}
                loadAlt="image showing a quotation mark"
                loadClass={style.opinionImg}
            />
            <div className={style.opinonQuote}>
                As a Black, African, Gay man, I want Inclusion to be a right and
                not a privilege for a select few. For people not to be tolerated
                as being different, but accepted. We live in a diverse world and
                we can learn so much from each other. I can empathise with
                marginalised groups, having being a part of one all my life, and
                learning how to steer myself in the workplace to 'fit in' I can
                empathise with marginalised groups, having being a part of one
                all my life, and learning how to steer myself in the workplace
                to 'fit in'...
            </div>
        </section>
    );
};
