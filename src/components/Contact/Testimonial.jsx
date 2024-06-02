import React from "react";
import styles from "./Contact.module.css";
import { ImQuotesRight } from "react-icons/im";

const Testimonial = ({ testimonial }) => {
  return (
    <div
      className={styles.testimonial}
      style={{ backgroundColor: testimonial.color }}
    >
      <div className={styles.photoContainer}>
        <ImQuotesRight className={styles.rightQuote} />
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className={styles.image}
        />
      </div>
      <p>{testimonial.text}</p>
      <p>
        <strong>- {testimonial.author}</strong>
        <br />
        {testimonial.role}
      </p>
    </div>
  );
};

export default Testimonial;
