import * as React from "react";
import style from "./index.module.css";

const benefitList = [
    "It all started back in 2001 when three Kiwi guys set up the first Gourmet Burger Kitchen in London.",
    "Word quickly got around - and soon their fresh, quality burgers served up with a dash of personality and fun were a gigantic hit.",
    "Before long new restaurants started popping up all over the place - and now there’s 76 of them across the country.",
    " But you know what we’ve learned along the way? GBK’s success is all about its people. Close-knit teams who love what they do and light up the place with laughter.",
];

export const BenefitsLeft = () => {
    return (
        <div className={style.benleft}>
            <h3 className={style.benleftTitle}>Benefits</h3>
            <ul className={style.benleftUl}>
                {benefitList.map((ben) => (
                    <li key={ben} className={style.benleftLi}>
                        {ben}
                    </li>
                ))}
            </ul>
        </div>
    );
};
