import React from "react";
import styles from "../styles/Education.module.css";

interface Experience {
  company: string;
  position: string;
  time: string;
  description: string;
}

const education: Experience[] = [
  {
    company: "Nina Trading and Service Company Limited",
    position: "Intern Sale website",
    time: "JUN - 2024",
    description:
      "Trained in deploying information to users to gain access to the company's products.",
  },
  {
    company: "Online designer",
    position: "Freelancer",
    time: "MAR - 2024",
    description:
      "Use tools like figma, photoshop, illustrator to realize customers' ideas and design boards.",
  },
  {
    company: "Café and Restaurant",
    position: "Service Staff / Kitchen Assistant",
    time: "2022 - 2024",
    description:
      "Friendly, sociable, and hardworking; experienced in customer service.",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      data-section="experience"
      className={styles.educationsSection}
    >
      <h3 className={styles.heading}>Experience</h3>
      <div className={styles.educationContainer}>
        {education.map((e) => (
          <div key={e.company} className={styles.educationItem}>
            <span className={styles.educationTime}>{e.time}</span>
            <div style={{ flex: 1 }}>
              <h4 className={styles.school}>{e.company}</h4>
              <p className={styles.degree}>{e.position}</p>
              <p className={styles.description}>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
