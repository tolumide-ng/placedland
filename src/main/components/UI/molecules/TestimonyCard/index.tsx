import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import placeholder from "@imgs/placeholder.svg";

interface TestimonyCardDef {
    name: string;
    text: string;
    role: string;
}

export const TestimonyCard = (props: TestimonyCardDef) => {
    return (
        <div className={style.test}>
            <div className={style.testText}>{props.text}</div>
            <div className={style.testPerson}>
                <LoadImg
                    loadAlt={`image of ${props.name}`}
                    loadImg={placeholder}
                    loadClass={style.testImg}
                />
                <div className={style.testInfo}>
                    <p className={style.testName}>{props.name}</p>
                    <p className={style.testRole}>{props.role}</p>
                </div>
            </div>
        </div>
    );
};
