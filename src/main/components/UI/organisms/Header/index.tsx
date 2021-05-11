import * as React from "react";
import { LoadImg } from "../../atoms/LoadImg";
import placedLogo from "@imgs/placedLogo.svg";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { Button } from "@atoms/Button";

const headerRoutes = [
    { name: "blog", route: "/blog" },
    { name: "find a job", route: "jobs" },
    { name: "hire staff", route: "/hire" },
    { name: "features", route: "/features" },
    { name: "login", route: "/login" },
];

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLogoCont}>
                <LoadImg
                    loadAlt="image showing the logo of Placed"
                    loadImg={placedLogo}
                    loadClass={style.headerLogo}
                />
            </div>

            <div className="">
                {headerRoutes.map((route) => (
                    <Link
                        to={route.route}
                        key={route.name}
                        className={style.headerRoute}
                    >
                        {route.name}
                    </Link>
                ))}
                <Button
                    buttonClass={`${style.headerButton} appButton`}
                    buttonText="Book A demo"
                    buttonType="button"
                />
            </div>
        </header>
    );
};
