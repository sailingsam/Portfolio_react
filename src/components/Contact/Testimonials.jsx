import React from 'react';
import Testimonial from './Testimonial';
import styles from './Contact.module.css';
import image1 from '../../assets/testimonial1.webp'
import image2 from '../../assets/testimonial2.webp'
import image3 from '../../assets/testimonial3.png'

const testimonialsData = [
  {
    text: "Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company. Even while working remotely he's been highly responsive, organized and strategic in his thinking. In addition to staying on top of day-to-day site changes and builds, he's provided us with great advice to stay on top of the current changes in web technologies. He's also implemented effective project management and Q&A processes. As a result Tamal has been an highly valued and impactful member of our team.",
    author: "Mark Greenspan",
    role: "Founder at influenceTHIS Canada",
    image: image1,
    color: "#BC60FB"
  },
  {
    text: "Tamal is AMAZING! If you have any doubt about hiring him, ask me - I am really impressed by this guy!",
    author: "Wilfried Hajek",
    role: "Agile Coach | Speaker | Trainer",
    image: image2,
    color: "#0067DC"
  },
  {
    text: "Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.  ",
    author: "Jonathan Castro",
    role: "CEO & Founder at The Cliff",
    image: image3,
    color: "#923FE6"
  }
];

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.left}>
        <Testimonial testimonial={testimonialsData[0]} />
      </div>
      <div className={styles.right}>
        <Testimonial testimonial={testimonialsData[1]} />
        <Testimonial testimonial={testimonialsData[2]} />
      </div>
    </div>
  );
};

export default Testimonials;