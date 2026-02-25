"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import MainMenu from "./MainMenu";
import SidebarInfo from "./SidebarInfo";
const logo = "/brand/pepro-logo-dark.svg";
const logoLight = "/brand/pepro-logo.svg";
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useSidebarInfo from "../../hooks/useSidebarInfo";
import useStickyMenu from "../../hooks/useStickyMenu";

const HeaderV1 = () => {
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
  const isMenuSticky = useStickyMenu();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (isOpen) closeMenu();
      if (isInfoOpen) closeInfoBar();
    };

    if (!isOpen && !isInfoOpen) return;

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isInfoOpen, closeMenu, closeInfoBar]);

  return (
    <>
      <header>
        <nav
          aria-label="Navigation principale"
          className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""}`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={openMenu}
                aria-label="Ouvrir le menu"
                aria-expanded={isOpen}
                aria-controls="navbar-menu"
              >
                <i className="fa fa-bars" aria-hidden="true" />
              </button>
              <Link className="navbar-brand" href="/">
                <Image
                  src={logoLight}
                  className="logo logo-display"
                  alt="Logo"
                  width={210}
                  height={56}
                  priority
                />
                <Image
                  src={logoLight}
                  className="logo logo-scrolled"
                  alt="Logo"
                  width={210}
                  height={56}
                />
                <Image
                  src={logo}
                  className="logo-dark"
                  alt="Logo"
                  width={210}
                  height={56}
                />
              </Link>
            </div>
            <div className="desktop-nav d-none d-lg-flex">
              <MainMenu
                toggleSubMenu={toggleSubMenu}
                navbarPlacement="navbar-center"
              />
            </div>
            <div
              className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`}
              id="navbar-menu"
              aria-hidden={!isOpen}
            >
              <Image
                className="regular-img"
                src={logoLight}
                alt="Logo"
                width={210}
                height={56}
              />
              <Image
                className="light-img"
                src={logo}
                alt="Logo"
                width={210}
                height={56}
              />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={closeMenu}
                aria-label="Fermer le menu"
                aria-expanded={isOpen}
                aria-controls="navbar-menu"
              >
                <i className="fa fa-times" aria-hidden="true" />
              </button>
              <MainMenu
                toggleSubMenu={toggleSubMenu}
                navbarPlacement="navbar-center"
              />
            </div>
            <SidebarInfo
              openInfoBar={openInfoBar}
              closeInfoBar={closeInfoBar}
              isInfoOpen={isInfoOpen}
            />
          </div>
          <button
            type="button"
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
            aria-label="Fermer le menu mobile"
            aria-hidden={!isOpen}
            tabIndex={isOpen ? 0 : -1}
          />
        </nav>
      </header>
    </>
  );
};

export default HeaderV1;
