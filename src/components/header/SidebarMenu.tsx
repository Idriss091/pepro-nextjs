"use client";
import Link from "next/link";
import Image from "next/image";
const logoLight = "/brand/pepro-logo-new.png";
import MainMenuV2 from "./MainMenuV2";
import SocialShareV3 from "../social/SocialShareV3";
import HeaderNewsLetter from "./HeaderNewsLetter";
import useSubMenuToggleV2 from "../../hooks/useSubMenuToggleV2";

interface DataType {
    openMenu?: () => void;
    isInfoOpen?: boolean;
    openInfoBar?: () => void;
    closeInfoBar?: () => void;
}

const SidebarMenu = ({ isInfoOpen, closeInfoBar, openInfoBar }: DataType) => {

    const toggleSubMenu2 = useSubMenuToggleV2();

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
                                aria-label="Ouvrir le menu lateral"
                                aria-expanded={Boolean(isInfoOpen)}
                                aria-controls="sidebar-menu-panel"
                            >
                                <strong>MENU </strong>
                                <div className="line">
                                    <span className="bar-1" />
                                    <span className="bar-2" />
                                    <span className="bar-3" />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <div
                        id="sidebar-menu-panel"
                        className={`side ${isInfoOpen ? "on" : ""}`}
                        role="dialog"
                        aria-modal="true"
                        aria-hidden={!isInfoOpen}
                    >
                        <button type="button" className="close-side" onClick={closeInfoBar} aria-label="Fermer le menu lateral">
                            Close <i className="fas fa-times" aria-hidden="true" />
                        </button>
                        <div className="widget">
                            <div className="logo">
                                <Link href="/">
                                    <Image src={logoLight} alt="Logo" width={210} height={56} />
                                </Link>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="side-navbar-inner">
                                        <div className="simple-menu">
                                            <MainMenuV2 toggleSubMenu2={toggleSubMenu2} closeInfoBar={closeInfoBar} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                                    <div className="side-widgets">
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
                                                            <strong>+33 7 81 91 19 92</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;
