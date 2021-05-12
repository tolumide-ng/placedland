import * as React from "react";
import style from "./index.module.css";
import placedFooter from "@imgs/placedFooter.svg";
import appStore from "@imgs/appStore.svg";
import playStore from "@imgs/playStore.svg";
import { LoadImg } from "@atoms/LoadImg";
import { footerOptions } from "./index.options";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerCont}>
                <div className={style.footerUs}>
                    <LoadImg
                        loadAlt="image showing placed's logo"
                        loadClass={style.footerLogo}
                        loadImg={placedFooter}
                    />

                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <LoadImg
                            loadAlt="Click on this image to download placed on Google Play store"
                            loadClass={style.footerLogo}
                            loadImg={playStore}
                        />
                    </a>

                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <LoadImg
                            loadAlt="Click on this image to download placed on Apple's Play store"
                            loadClass={style.footerLogo}
                            loadImg={appStore}
                        />
                    </a>
                </div>
                {footerOptions.map((option) => (
                    <div className="" key={option.title}>
                        <h4 className={style.footerTitle}>{option.title}</h4>
                        <div className={style.footerLinksDiv}>
                            {option.options.map((subOption) => (
                                <Link
                                    key={subOption}
                                    to={`/${subOption}`}
                                    className={style.footerLink}
                                >
                                    {subOption}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
};
