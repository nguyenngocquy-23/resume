import { useState } from "react";
import styles from "../styles/Footer.module.css";

export default function Footer({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerIcon} onClick={() => setIsOpen(true)}>
        <img src="/robot.gif" alt="" />
      </div>
    </div>
  );
}
