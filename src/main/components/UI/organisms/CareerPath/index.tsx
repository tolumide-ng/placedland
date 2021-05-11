import * as React from "react";
import style from "./index.module.css";
import burger from "@imgs/burger.svg";
import eatBurger from "@imgs/eatBurger.svg";
import holdBurger from "@imgs/holdBurger.svg";
import burgerWithChips from "@imgs/burgerWithChips.svg";
import walkBurger from "@imgs/walkBurger.svg";
import seeBurger from "@imgs/seeBurger.svg";
import gallery from "@imgs/gallery.svg";
import { Button } from "@atoms/Button";

const careerImages = [
    {
        img: burgerWithChips,
        alt: "image showing burger with chips and sauce on a table",
    },
    { img: holdBurger, alt: "image showing a chef holding a very long burger" },
    { img: eatBurger, alt: "image showing a person eating burger" },
    { img: burger, alt: "image showing a burger" },
    { img: seeBurger, alt: "image showing burger and chips" },
    {
        img: walkBurger,
        alt:
            "image focusing on a burger and a lady eyeing it on the background",
    },
];

interface CareerPathDef {
    carousel: Array<string>;
    name: string;
}

export const CareerPath = (props: CareerPathDef) => {
    return (
        <section className={style.career}>
            <div className={style.careerLeft}>
                <h3 className={style.careerTitle}>Take your career further</h3>
                <p className={style.careerP}>
                    It all started back in 2001 when three Kiwi guys set up the
                    first Gourmet Burger Kitchen in London. Word quickly got
                    around - and soon their fresh, quality burgers served up
                    with a dash of personality and fun were a gigantic hit.
                    Before long new restaurants started popping up all over the
                    place - and now there’s 76 of them across the country.
                </p>
                <p className={style.careerP}>
                    But you know what we’ve learned along the way? GBK’s success
                    is all about its people. Close-knit teams who love what they
                    do and light up the place with laughter. People who think
                    for themselves and enjoy doing things their way.
                </p>
            </div>

            <div className={style.careerRight}>
                {props.carousel.map((img) => (
                    <img
                        src={img}
                        alt={`pictures from ${props.name}`}
                        key={img}
                        className={style.careerImg}
                    />
                ))}

                <Button
                    buttonClass={style.careerButton}
                    buttonText=""
                    buttonJsx={
                        <>
                            <figure className={style.careerGallery}>
                                <img
                                    src={gallery}
                                    alt="click on this image to view more Images"
                                    className={style.careerImg}
                                />
                                <figcaption className={style.careerCaption}>
                                    Gallery
                                </figcaption>
                            </figure>
                        </>
                    }
                />
            </div>
        </section>
    );
};
