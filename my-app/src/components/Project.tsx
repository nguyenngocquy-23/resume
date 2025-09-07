import React from "react";
import styles from "../styles/Project.module.css";
import { Element } from "react-scroll";
import { MdArrowOutward } from "react-icons/md";

interface Project {
  title: string;
  description: string;
  link: string;
  skills: string[];
  time: string;
}

const projects: Project[] = [
  {
    title: "3D Virtual Campus Website",
    description:
      "Graduation thesis project building a web platform that allows users to explore and interact with immersive 3D spaces directly in the browser. Users can experience virtual tours, collaborate in real time, and contribute new spaces to create a comprehensive digital campus.",
    link: "https://github.com/nguyenngocquy-23/3D-NongLamUniversity",
    skills: [
      "Reactjs",
      "Redux",
      "Typescript",
      "Three.js",
      "R3F",
      "WebSocket",
      "Jakarta EE",
      "JWT",
      "MySQL",
      "Docker",
      "Cloudinary",
      "GLTF/ GLB",
      "Quartz",
      "Figma",
      "Postman",
    ],
    time: "OCT 2024 - PRESENT",
  },
  {
    title: "Online Laptop Shop",
    description:
      "A modern e-commerce platform for selling laptops. Integrated with real-time and data warehouse model with AI analysis. Helps improve sales performance. Helps users access to the latest products.",
    link: "https://github.com/nguyenngocquy-23/Online-Laptop-Shop",
    skills: [
      "Reactjs",
      "Redux",
      "Typescript",
      "Three.js",
      "Spring Boot",
      "Spring JPA",
      "JWT",
      "MySQL",
      "Docker",
    ],
    time: "NOV 2024 - 2025",
  },
  {
    title: "Blog website",
    description:
      "A platform for users to share their thoughts and ideas through blog posts. Features include user authentication, post creation and editing, and a commenting system.",
    link: "https://github.com/nguyenngocquy-23/ASP.NET_blogPage",
    skills: [
      "C#",
      "ASP.NET Core",
      "JWT",
      "HTML & CSS",
      "Typescript",
      "MySQL",
      "Docker",
      "Swagger",
    ],
    time: "JUN - JUL 2024",
  },
  {
    title: "Game Pikachu",
    description:
      "A browser-based Pikachu-style puzzle game built with HTML, CSS, SCSS, Bootstrap, JavaScript, and jQuery. Players match pairs of identical tiles to clear the board under a time limit. The game features responsive design, smooth animations, and is deployed on GitHub Pages.",
    link: "https://github.com/nguyenngocquy-23/FE_gamePikachu",
    skills: [
      "HTML & CSS",
      "SCSS",
      "Javascript",
      "JQuery",
      "Bootstrap",
      "Github",
    ],
    time: "MAR - MAY 2024",
  },
];

const Projects: React.FC = () => (
  <section
    id="projects"
    data-section="projects"
    className={styles.projectsSection}
  >
    <h3 className={styles.heading}>Projects</h3>
    <div className={styles.projectList}>
      {projects.map((p) => (
        <div key={p.title} className={styles.projectItem}>
          <span className={styles.projectTime}>{p.time}</span>
          <div style={{ flex: 1 }}>
            <div className={styles.projectHeader}>
              <h4 className={styles.projectTitle}>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.title}
                  <MdArrowOutward className={styles.icon} />
                  {p.title.includes("Pikachu") ? (
                    <a
                      href="https://nguyenngocquy-23.github.io/FE_gamePikachu/"
                      style={{
                        marginLeft: "2rem",
                        fontSize: "1rem",
                        border: "1px solid #fff",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "5px",
                      }}
                    >
                      Play now
                    </a>
                  ) : (
                    ""
                  )}
                </a>
              </h4>
            </div>
            <p className={styles.description}>{p.description}</p>
            <ul className={styles.skills}>
              {p.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <a
      href="https://tinyurl.com/bddy9m83"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resumeLink}
    >
      View Resume
      <MdArrowOutward className={styles.icon} />
    </a>
  </section>
);

export default Projects;
