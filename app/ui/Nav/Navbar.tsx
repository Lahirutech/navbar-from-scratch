"use client";
import React, { useRef } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const navMenue = useRef<HTMLDivElement>(null);
  const navToggle = useRef<HTMLDivElement>(null);

  const clickToggle = () => {
    if (navMenue.current) {
      navMenue?.current?.classList.add(styles.showMenu);
    }
  };

  const closeNav = () => {
    console.log("🚀 ~ closeNav ~ closeNav:", closeNav);

    if (navMenue.current) {
      navMenue?.current?.classList.remove(styles.showMenu);
    }
  };

  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.nav} ${styles.container}`}>
        <Link href="" className={styles.navLogo}>
          Logo
        </Link>
        <div className={`${styles.navMenu}`} id="nav-menu" ref={navMenue}>
          <ul className={`${styles.navList}`}>
            <li className={`${styles.navItem}`}>
              <a href="#" className={`${styles.navLink}`}>
                <i className="ri-arrow-right-up-line"></i>
                <span>Home</span>
              </a>
            </li>

            <li className={`${styles.navItem}`}>
              <a href="#" className={`${styles.navLink}`}>
                <i className="ri-arrow-right-up-line"></i>
                <span>About Us</span>
              </a>
            </li>

            <li className={`${styles.navItem}`}>
              <a href="#" className={`${styles.navLink}`}>
                <i className="ri-arrow-right-up-line"></i>
                <span>Projects</span>
              </a>
            </li>

            <li className={`${styles.navItem}`}>
              <a href="#" className={`${styles.navLink}`}>
                <i className="ri-arrow-right-up-line"></i>
                <span>Studio</span>
              </a>
            </li>

            <li className={`${styles.navItem}`}>
              <a href="#" className={`${styles.navLink}`}>
                <i className="ri-arrow-right-up-line"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          {/* <!-- Close button --> */}
          <div className={`${styles.navClose}`} id="nav-close">
            <i className="ri-close-large-line" onClick={closeNav}></i>
          </div>

          <div className={`${styles.navSocial}`}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className={`${styles.navSocialLink}`}
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className={`${styles.navSocialLink}`}
            >
              <i className="ri-github-line"></i>
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className={`${styles.navSocialLink}`}
            >
              <i className="ri-dribbble-line"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className={`${styles.navSocialLink}`}
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
        {/* <!-- Toggle button --> */}
        <div
          className={`${styles.navToggle}`}
          id="nav-toggle"
          ref={navToggle}
          onClick={clickToggle}
        >
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
