import React from "react";
import Navbar from "./Nav";
import styles from "../styles/Home.module.css";
import { FaGithub, FaInstagram, FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home: React.FC = () => (
  <div className={styles.homeContainer}>
    <Link
      to="about"
      smooth={true}
      duration={600}
      spy={true}
      offset={-50}
      activeClass={styles.active}
      className={styles.name}
    >
      NGUYEN NGOC QUY
    </Link>
    <p className={styles.title}>Fullstack Engineer</p>
    <Navbar />
    <div className={styles.socialLinks}>
      <a href="https://www.facebook.com/nguyen.quy.682606/">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/qu%C3%BD-nguy%E1%BB%85n-04543b2b3/">
        <FaLinkedin />
      </a>
      <a href="">
        <FaInstagram />
      </a>
      <a href="">
        <FaLink />
      </a>
    </div>
  </div>
);

export default Home;
