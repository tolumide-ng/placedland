import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import employerOne from "@imgs/cm1.svg";
import { Button } from "@atoms/Button";

export const JobOffer = () => {
    return (
        <section className={style.job}>
            {/* <div className={style.jobContTop}></div> */}
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
                            <p className="">Commis Waiter</p>
                        </div>
                        <div className={style.jobTopRightBottom}>
                            <p>Fine dinning/Michelin Star</p>
                        </div>
                    </div>
                </div>
                <div className={style.jobMid}></div>
                <div className={style.jobBottom}>
                    <Button buttonClass="" buttonText="Apply" />
                    <Button buttonClass="" buttonText="shortList" />
                </div>
            </div>
        </section>
    );
};
