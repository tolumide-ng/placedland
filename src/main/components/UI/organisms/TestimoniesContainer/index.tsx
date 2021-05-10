import { Button } from "@atoms/Button";
import { TestimonyCard } from "@molecules/TestimonyCard";
import * as React from "react";
import style from "./index.module.css";
import { testimoniesOptions } from "./index.options";

export const TestimoniesContainer = () => {
    return (
        <section className={style.testi}>
            <h3 className={style.testiTitle}>Others about us</h3>
            <div className={style.testiCont}>
                {testimoniesOptions.map((option) => (
                    <TestimonyCard
                        name={option.name}
                        role={option.position}
                        text={option.text}
                    />
                ))}
            </div>
            <div className={style.testiBottom}>
                <Button
                    buttonClass={style.testiButton}
                    buttonText="Read More"
                />
            </div>
        </section>
    );
};
