import React from "react";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  const pages = ["Products", "Pricing", "Blog"];
  return (
    <div className={`row ${styles.footerLinks_container} container`}>
      <div className="col Quick_Links">
        <h5>Quick Links</h5>
        {pages?.map(list => {
          return <div className="row">{list}</div>;
        })}
      </div>
      <div className="col">contact us</div>
      <div className="col">Visit Us</div>
    </div>
  );
};

export default FooterLinks;
