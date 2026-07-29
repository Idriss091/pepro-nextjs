"use client";
import { useEffect } from "react";

const ThemeDark = () => {
    useEffect(() => {
        document.body.classList.remove("bg-dark");
    }, []);

    return null;
};

export default ThemeDark;
