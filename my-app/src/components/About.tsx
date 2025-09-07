import React from "react";
import styles from "../styles/About.module.css";

const About: React.FC = () => (
  <section id="about" data-section="about" className={styles.introSection}>
    <p className={styles.paragraph}>
      Hi, I’m <b className={styles.highlight}>Nguyen Ngoc Quy</b> — a
      Fullstack Developer who enjoys turning ideas into functional and
      user-friendly web applications. I work mainly with <b className={styles.highlight}>React</b>,{" "}
      <b className={styles.highlight}>TypeScript</b>, and <b className={styles.highlight}>Java Spring Boot</b>, combining clean front-end
      design with reliable back-end systems.
    </p>

    <p className={styles.paragraph}>
      Over the past few years, I’ve worked on a variety of projects ranging from
      academic research to freelance collaborations. These experiences have
      helped me develop a strong foundation in both frontend and backend
      development, while also improving my ability to work in teams and
      communicate effectively with designers, clients, and fellow developers.
    </p>

    <p className={styles.paragraph}>
      I’m especially interested in building scalable web applications and
      exploring emerging technologies that enhance user experiences, such as 3D
      environments and real-time systems. My long-term goal is to contribute to
      innovative projects that not only solve technical problems but also create
      meaningful impact for communities and businesses.
    </p>
  </section>
);

export default About;
