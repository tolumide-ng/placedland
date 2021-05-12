import { Button } from "@atoms/Button";
import { TestimonyCard } from "@molecules/TestimonyCard";
import * as React from "react";
import { QuoteInfoDef } from "src/main/commonTypes";
import style from "./index.module.css";

interface TestimoniesContainerDef {
    quotes: Array<QuoteInfoDef>;
}

export const TestimoniesContainer = (props: TestimoniesContainerDef) => {
    return (
        <section className={style.testi}>
            <h3 className={style.testiTitle}>Others about us</h3>
            <ul className={style.testiCont}>
                {props.quotes.map((option) => (
                    <li key={option.author} className={style.testiLi}>
                        <TestimonyCard
                            name={option.author}
                            role={option.position}
                            text={option.text}
                        />
                    </li>
                ))}
            </ul>
            <div className={style.testiBottom}>
                <Button
                    buttonClass={`${style.testiButton} appButton`}
                    buttonText="Read More"
                />
            </div>
        </section>
    );
};
