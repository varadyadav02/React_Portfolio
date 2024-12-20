import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Utility function to handle image paths
const getImagePath = (imageName) => `/assets/${imageName}`;

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImagePath(skill.imageSrc)} // Resolve image path
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* Work History Section */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImagePath(historyItem.imageSrc)} // Resolve image path
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  
                  <ul>
                    {historyItem.experiences.map((experience, expId) => {
                      return <li key={expId}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
