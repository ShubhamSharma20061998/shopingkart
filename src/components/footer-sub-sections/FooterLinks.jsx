import React from "react";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <div className={`row ${styles.footerLinks_container}`}>
      <div className="col">Quick Links</div>
      <div className="col">contact us</div>
      <div className="col">subscribe</div>
    </div>
  );
};

export default FooterLinks;
