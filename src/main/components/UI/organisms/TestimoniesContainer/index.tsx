import { Button } from "@atoms/Button";
import { TestimonyCard } from "@molecules/TestimonyCard";
import * as React from "react";
import { QuoteInfoDef } from "src/main/commonTypes";
import style from "./index.module.css";
import { testimoniesOptions } from "./index.options";

interface TestimoniesContainerDef {
    quotes: Array<QuoteInfoDef>;
}

export const TestimoniesContainer = (props: TestimoniesContainerDef) => {
    return (
        <section className={style.testi}>
            <h3 className={style.testiTitle}>Others about us</h3>
            <div className={style.testiCont}>
                {props.quotes.map((option) => (
                    <TestimonyCard
                        key={option.author}
                        name={option.author}
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
