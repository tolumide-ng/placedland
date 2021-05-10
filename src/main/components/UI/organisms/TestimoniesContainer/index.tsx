import { Button } from "@atoms/Button";
import * as React from "react";
import style from "./index.module.css";

export const TestimoniesContainer = () => {
    return (
        <section>
            <h3>Others about us</h3>
            <Button buttonClass={style.testiButton} buttonText="Read More" />
        </section>
    );
};
