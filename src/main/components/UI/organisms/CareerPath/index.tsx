import * as React from "react";
import style from "./index.module.css";
import gallery from "@imgs/gallery.svg";
import { Button } from "@atoms/Button";

interface CareerPathDef {
    carousel: Array<string>;
    name: string;
    about: string;
}

export const CareerPath = (props: CareerPathDef) => {
    const divRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (divRef.current) {
            divRef.current.innerHTML = props.about;
        }
    }, [props.about]);

    return (
        <section className={style.career}>
            <div className={style.careerLeft}>
                {/* <h3 className={style.careerTitle}>Take your career further</h3> */}
                <div className={style.careerP} ref={divRef}></div>
            </div>

            <div className={style.careerRight}>
                {props.carousel.map((img) => (
                    <li key={img} className={style.careerLi}>
                        <img
                            src={img}
                            alt={`pictures from ${props.name}`}
                            className={style.careerImg}
                        />
                    </li>
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
