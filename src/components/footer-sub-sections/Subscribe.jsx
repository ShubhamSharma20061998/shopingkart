import React from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import styles from "./Subscribe.module.css";
const Subscribe = () => {
  return (
    <main className={styles.subscribe_page}>
      <h5>KEEP YOURSELF UPDATED</h5>
      <div className={`row container ${styles.form_container}`}>
        <FloatingLabel
          className={`col-md-4 ${styles.label}`}
          controlId="floatingInput"
          label="Email address"
        >
          <Form.Control
            className={styles.input_field}
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <Button className={styles.submit_button} variant="primary">
          Subscribe
        </Button>
      </div>
    </main>
  );
};

export default Subscribe;
