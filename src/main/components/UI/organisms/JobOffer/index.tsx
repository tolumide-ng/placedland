import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import employerOne from "@imgs/cm1.svg";
import location from "@imgs/location.svg";
import { Button } from "@atoms/Button";

const options = [
    "7.70-9/ph",
    "3-12 months",
    "Full time",
    "Immediate start",
    "...",
];

export const JobOffer = () => {
    return (
        <section className={style.job}>
            <div className={style.jobCont}>
                <div className={style.jobTop}>
                    <div className={style.jobTopLeft}>
                        <LoadImg
                            loadHeight="72px"
                            loadAlt="logo of the employer"
                            loadImg={employerOne}
                            loadClass={style.jobImage}
                        />
                    </div>
                    <div className={style.jobTopRight}>
                        <div className={style.jobTopRightTop}>
                            <h4 className={style.jobEmp}>
                                Gourmet Burger Kitchen
                            </h4>
                            <p className={style.jobRole}>Commis Waiter</p>
                        </div>
                        <div className={style.jobTopRightBottom}>
                            <p className={style.jobDesc}>
                                Fine dinning/Michelin Star...
                            </p>
                            <div className={style.jobLocation}>
                                <img
                                    src={location}
                                    alt="image showing the location of the employer"
                                    className={style.jobLocationImg}
                                />

                                <p className={style.jobLocationText}>
                                    Covent Garden
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.jobMid}>
                    {options.map((option) => (
                        <div key={option} className={style.jobFeat}>
                            {option}
                        </div>
                    ))}
                </div>
                <div className={style.jobBottom}>
                    <Button
                        buttonClass={`${style.jobButton} ${style.jobApply} appButton`}
                        buttonText="Apply"
                    />
                    <Button
                        buttonClass={`${style.jobButton} ${style.jobShortList} appButton`}
                        buttonText="shortList"
                    />
                </div>
            </div>
        </section>
    );
};
