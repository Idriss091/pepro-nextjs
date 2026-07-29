"use client";
import { useEffect, useRef } from "react";
import SocialShareV3 from "../social/SocialShareV3";
import Image from "next/image";
import HeaderNewsLetter from "./HeaderNewsLetter";
const logoLight = "/brand/pepro-logo-new.png";

interface SidebarInfoProps {
    openInfoBar?: () => void;
    isInfoOpen?: boolean;
    closeInfoBar?: () => void;
}

const SidebarInfo = ({ openInfoBar, isInfoOpen, closeInfoBar }: SidebarInfoProps) => {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (isInfoOpen) {
            closeButtonRef.current?.focus();
        }
    }, [isInfoOpen]);

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <button
                                type="button"
                                className="side-menu-button"
                                onClick={openInfoBar}
                                aria-label="Ouvrir le panneau d'informations"
                                aria-expanded={Boolean(isInfoOpen)}
                                aria-controls="sidebar-info-panel"
                            >
                                <span className="bar-1" />
                                <span className="bar-2" />
                                <span className="bar-3" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div
                    id="sidebar-info-panel"
                    className={`side ${isInfoOpen ? "on" : ""}`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Informations de contact Pepro"
                    aria-hidden={!isInfoOpen}
                >
                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="close-side"
                        onClick={closeInfoBar}
                        aria-label="Fermer le panneau d'informations"
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <div className="top">
                        <div className="widget">
                            <div className="logo">
                                <Image src={logoLight} alt="Logo" width={210} height={56} />
                            </div>
                        </div>
                        <div className="widget address">
                            <div>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <p>Adresse</p>
                                            <strong>Paris, France (intervention nationale et internationale)</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>Email</p>
                                            <strong>contact@pepro.fr</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <p>Téléphone</p>
                                            <strong>+33 6 18 66 35 95</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="widget newsletter">
                            <h4 className="title">Recevoir nos actualités</h4>
                            <HeaderNewsLetter />
                        </div>
                        <div className="widget social">
                            <ul className="link">
                                <SocialShareV3 />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;
