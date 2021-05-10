import * as React from "react";
import style from "./index.module.css";

export const TestimonyCard = () => {
    return (
        <div className={style.test}>
            <div className={style.testText}></div>
            <div className={style.testPerson}>
                <img src="" alt="" className={style.testImage} />
                <div className={style.testInfo}>
                    <p className={style.testName}></p>
                    <p className={style.testRole}></p>
                </div>
            </div>
        </div>
    );
};
