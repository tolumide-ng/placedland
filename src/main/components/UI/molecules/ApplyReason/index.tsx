import { Button } from "@atoms/Button";
import * as React from "react";
import style from "./index.module.css";

export const ApplyReason = () => {
    return (
        <div className={style.apply}>
            <h3 className={style.applyTitle}>Ready for something different</h3>
            <p className={style.applyText}>
                You’re more than just a name on a PDF. Embrace an app that helps
                you find and apply for jobs in a way that feels natural to you.
                That means no CVs, no cover letters and access to employers that
                pick on personality not just experience
            </p>

            <div className={style.applyAction}>
                <Button
                    buttonClass={`${style.applyButton} appButton`}
                    buttonText="Start Applying"
                />
            </div>
        </div>
    );
};
