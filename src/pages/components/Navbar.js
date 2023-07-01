import React,{ useEffect } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import styles from '@/styles/Home.module.css';

// import './Navbar.css';

const Navbar = () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.nav-list');
        menu.classList.toggle('showing');
    };

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            if (window.scrollY) {
                nav.classList.add('black');
            } else {
                nav.classList.remove('black');
            }
        };

        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);

    return (
        <div className="wrapper">
            <header className="header">
                <nav>
                    <div className="menu-icon" onClick={toggleMenu}>
                        <i className="fa fa-bars fa-2x"></i>
                    </div>

                    <div className="menu">
                        <ul className={`nav-list ${styles.navList}`}>
                            <div className={styles.navImgDiv}>
                                <Image
                                    className={styles.navLogo}
                                    src="/android-chrome-512x512.png"
                                    alt="maxfandom logo"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                            <li className={`nav-item ${styles.navItem}`}><a className="nav-link" href="#">Home</a></li>
                            <li className={`nav-item ${styles.navItem}`}><a className="nav-link" href="#">About</a></li>
                            <li className={`nav-item ${styles.navItem}`}><a className="nav-link" href="#">Blog</a></li>
                            <li className={`nav-item ${styles.navItem}`}><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
