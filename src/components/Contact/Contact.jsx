import React from 'react';
import ContactInfo from './ContactInfo';
import Testimonials from './Testimonials';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div id='contact' className={styles.contact}>
      <ContactInfo />
      <Testimonials />
    </div>
  );
};

export default Contact;