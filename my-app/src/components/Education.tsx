import React from "react";
import styles from "../styles/Education.module.css";

interface EducationItem {
  school: string;
  degree: string;
  time: string;
  gpa?: string;
  description: string;
}

const education: EducationItem[] = [
  {
    school: "Nong Lam University, Ho Chi Minh City",
    degree: "Bachelor of Engineering in Information Technology",
    time: "2021 - 2025",
    gpa: "8.12/10",
    description:
      "Focused on software development, Java, ReactJS, and web technologies.",
  },
  {
    school: "An Nhon High School No. 1",
    degree: "Natural Sciences Program",
    time: "2018 - 2021",
    description:
      "Specialized in Mathematics and Natural Sciences; proactive and collaborative in learning.",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      data-section="education"
      className={styles.educationsSection}
    >
      <h3 className={styles.heading}>Education</h3>
      <div className={styles.educationContainer}>
        {education.map((e) => (
          <div key={e.school} className={styles.educationItem}>
            <span className={styles.educationTime}>{e.time}</span>
            <div style={{ flex: 1 }}>
              <h4 className={styles.school}>{e.school}</h4>
              <p className={styles.degree}>
                {e.degree} {e.gpa && ` — GPA: ${e.gpa}`}
              </p>
              <p className={styles.description}>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
