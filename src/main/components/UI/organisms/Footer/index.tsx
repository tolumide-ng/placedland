import { LoadImg } from "@atoms/LoadImg";
import * as React from "react";
import style from "./index.module.css";
import placedFooter from "@imgs/placedFooter.svg";
import appStore from "@imgs/appStore.svg";
import playStore from "@imgs/playStore.svg";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="">
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
        </footer>
    );
};
