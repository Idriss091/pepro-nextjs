"use client";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import useSidebarMenu from "../../hooks/useSidebarMenu";
import useSubMenuToggle from "../../hooks/useSubMenuToggle";
import useStickyMenu from "../../hooks/useStickyMenu";

const logo = "/brand/pepro-logo-night.png";
const logoLight = "/brand/pepro-logo-new.png";

const HeaderV7 = () => {
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const toggleSubMenu = useSubMenuToggle();
  const isMenuSticky = useStickyMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed ${isMenuSticky ? "sticked" : "no-background"} ${isOpen ? "navbar-responsive" : ""} `}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={openMenu}
              >
                <i className="fa fa-bars" />
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
              >
                <i className="fa fa-times" />
              </button>
              <MainMenu
                toggleSubMenu={toggleSubMenu}
                navbarPlacement="navbar-center"
              />
            </div>
            <div className="attr-right">
              <div className="attr-nav flex">
                <ul>
                  <li className="button">
                    <Link href="/contact-us">Nous contacter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
          />
        </nav>
      </header>
    </>
  );
};

export default HeaderV7;
