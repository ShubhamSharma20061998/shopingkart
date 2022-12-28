import React from "react";
import { Parallax } from "react-parallax";
import Copyright from "./footer-sub-sections/Copyright";
import FooterLinks from "./footer-sub-sections/FooterLinks";
import OurMission from "./footer-sub-sections/OurMission";
import Subscribe from "./footer-sub-sections/Subscribe";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <Parallax
        blur={5}
        bgImage="https://images.pexels.com/photos/5332931/pexels-photo-5332931.jpeg"
        bgImageAlt="the cat"
        strength={300}
      >
        <section className={styles.subscribe}>
          <Subscribe />
        </section>
      </Parallax>
      <section className="mission">
        <OurMission />
      </section>
      <section className="footer_links">
        <FooterLinks />
      </section>
      <section className="copyright">
        <Copyright />
      </section>
    </footer>
  );
};

export default Footer;
