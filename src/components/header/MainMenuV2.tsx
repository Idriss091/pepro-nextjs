"use client";
import Link from 'next/link';

interface DataType {
    toggleSubMenu2?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    closeInfoBar?: () => void;
}

const MainMenuV2 = ({ toggleSubMenu2, closeInfoBar }: DataType) => {
    return (
        <>
            <ul className="simple-menu-list">
                <li>
                    <Link href="#" >Home </Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2} />
                    <ul className="sub-menu">
                        <li><Link href="/" onClick={closeInfoBar}>Home Main</Link></li>
                        <li><Link href="/home-6" onClick={closeInfoBar}>Modern Agency</Link></li>
                        <li><Link href="/home-2" onClick={closeInfoBar}>Creative Agency</Link></li>
                        <li><Link href="/home-3" onClick={closeInfoBar}>Startup Agency</Link></li>
                        <li><Link href="/home-7" onClick={closeInfoBar}>Digital Agency</Link></li>
                        <li><Link href="/home-8" onClick={closeInfoBar}>Modern Startup</Link></li>
                        <li><Link href="/home-9" onClick={closeInfoBar}>Design Studio</Link></li>
                        <li><Link href="/home-4" onClick={closeInfoBar}>Showcase Carousel</Link></li>
                        <li><Link href="/home-5" onClick={closeInfoBar}>Showcase Slider</Link></li>
                        <li className="menu-dropdown">
                            <Link href="#">Light Version</Link>
                            <i className="fas fa-plus" onClick={toggleSubMenu2} />
                            <ul className="sub-menu">
                                <li><Link href="/home-1-light" onClick={closeInfoBar}>Home Main</Link></li>
                                <li><Link href="/home-6-light" onClick={closeInfoBar}>Modern Agency</Link></li>
                                <li><Link href="/home-2-light" onClick={closeInfoBar}>Creative Agency</Link></li>
                                <li><Link href="/home-3-light" onClick={closeInfoBar}>Startup Agency</Link></li>
                                <li><Link href="/home-7-light" onClick={closeInfoBar}>Digital Agency</Link></li>
                                <li><Link href="/home-8-light" onClick={closeInfoBar}>Modern Startup</Link></li>
                                <li><Link href="/home-9-light" onClick={closeInfoBar}>Design Studio</Link></li>
                                <li><Link href="/home-4-light" onClick={closeInfoBar}>Showcase Carousel</Link></li>
                                <li><Link href="/home-5-light" onClick={closeInfoBar}>Showcase Slider</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="#">Blog </Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2} />
                    <ul className="sub-menu">
                        <li><Link href="/blog-standard" onClick={closeInfoBar}>Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar" onClick={closeInfoBar}>Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column" onClick={closeInfoBar}>Blog Grid Two column</Link></li>
                        <li><Link href="/blog-3-column" onClick={closeInfoBar}>Blog Grid Three column</Link></li>
                        <li><Link href="/blog-single/1" onClick={closeInfoBar}>Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1" onClick={closeInfoBar}>Blog Single With Sidebar</Link></li>
                    </ul>
                </li>
                <li><Link href="/services" onClick={closeInfoBar}>Services </Link></li>
                <li><Link href="/about-us" onClick={closeInfoBar}>About</Link> </li>
                <li><Link href="/contact-us" onClick={closeInfoBar}>Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenuV2;
