import * as React from "react";
import style from "./index.module.css";
import { Button } from "@atoms/Button";

const CAMPAIGN_SITE = process.env.ACTIVE_CAMPAIGN;

export const SubscribeEmployer = () => {
    return (
        <div className={style.subscribe}>
            <form
                className={`${style.subscribeCont} form _form_10 _inline-form  _dark`}
                method="POST"
                action={CAMPAIGN_SITE}
                id="_form_10_"
                noValidate
            >
                <input type="hidden" name="u" value="10" />
                <input type="hidden" name="f" value="10" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className={`${style.subscribeInput} ${style.subscribeEmail} _form-label`}
                    required
                />

                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Your Name"
                    className={`${style.subscribeInput} ${style.subscribeName} _form-label`}
                    required
                />
                <Button
                    buttonClass={`${style.subscribeButton} appButton _submit`}
                    buttonText="follow"
                    buttonType="submit"
                    buttonId="_form_10_submit"
                />
            </form>
        </div>
    );
};
