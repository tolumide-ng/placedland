import * as React from "react";
import style from "./index.module.css";

export const CareerPath = () => {
    return (
        <section className={style.career}>
            <div className={style.careerLeft}>
                <h3 className={style.careerTitle}>Take your career further</h3>
                <p className={style.careerP}>
                    It all started back in 2001 when three Kiwi guys set up the
                    first Gourmet Burger Kitchen in London. Word quickly got
                    around - and soon their fresh, quality burgers served up
                    with a dash of personality and fun were a gigantic hit.
                    Before long new restaurants started popping up all over the
                    place - and now there’s 76 of them across the country.
                </p>
                <p className={style.careerP}>
                    But you know what we’ve learned along the way? GBK’s success
                    is all about its people. Close-knit teams who love what they
                    do and light up the place with laughter. People who think
                    for themselves and enjoy doing things their way.
                </p>
            </div>

            <div className={style.careerRight}></div>
        </section>
    );
};
