import React, { useEffect, useState } from "react";
import styles from "../styles/Nav.module.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState("about");

  useEffect(() => {
    const container = document.getElementById("right-content");
    if (!container) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("[data-section]");
      let maxVisibleHeight = 0;
      let current = "about";
      const containerRect = container.getBoundingClientRect();

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, containerRect.top);
        const visibleBottom = Math.min(rect.bottom, containerRect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          current = section.dataset.section!;
        }
      });

      setIsActive(current);
    };

    handleScroll(); // check ngay khi load
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <ScrollLink
            to="about"
            containerId="right-content"
            smooth={true}
            duration={600}
            offset={0}
            spy={true}
            className={isActive === "about" ? styles.active : ""}
            onSetActive={() => setIsActive("about")}
          >
            <span
              className={`${styles.line} ${
                isActive === "about" ? styles.active : ""
              }`}
            />
            ABOUT
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="education"
            containerId="right-content"
            smooth={true}
            duration={600}
            offset={0}
            spy={true}
            className={isActive === "education" ? styles.active : ""}
            onSetActive={() => setIsActive("education")}
          >
            <span
              className={`${styles.line} ${
                isActive === "education" ? styles.active : ""
              }`}
            />
            EDUCATION
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="projects"
            containerId="right-content"
            smooth={true}
            duration={600}
            offset={0}
            spy={true}
            className={isActive === "projects" ? styles.active : ""}
            onSetActive={() => setIsActive("projects")}
          >
            <span
              className={`${styles.line} ${
                isActive === "projects" ? styles.active : ""
              }`}
            />
            PROJECTS
          </ScrollLink>
        </li>
        
        <li>
          <ScrollLink
            to="experience"
            containerId="right-content"
            smooth={true}
            duration={600}
            offset={-50}
            spy={true}
            className={isActive === "experience" ? styles.active : ""}
            onSetActive={() => setIsActive("experience")}
          >
            <span
              className={`${styles.line} ${
                isActive === "experience" ? styles.active : ""
              }`}
            />
            EXPERIENCE
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
