import * as React from "react";
import style from "./index.module.css";
import { Button } from "@atoms/Button";

export const SubscribeEmployer = () => {
    return (
        <div className={style.subscribe}>
            <div className={style.subscribeCont}>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className={`${style.subscribeInput} ${style.subscribeEmail}`}
                />

                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className={`${style.subscribeInput} ${style.subscribeName}`}
                />
                <Button
                    buttonClass={style.subscribeButton}
                    buttonText="follow"
                />
            </div>
        </div>
    );
};
