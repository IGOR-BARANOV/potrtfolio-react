import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills}>
<div className={styles.container}>
  <span className={styles.blockTitle}>My Skills</span>
  <div className={skillsWrapper}>
    <div className={styles.skill}>
    <div className={icon}>
      <img src="" alt=""/>
    </div>
    <span className={styles.skillTitle}>HTML&CSS</span>
    <span className={description}>My texxxxxxxxxxt</span>
  </div>
    <div className={styles.skill}>
      <div className={icon}>
        <img src="" alt=""/>
      </div>
      <span className={styles.skillTitle}>JS</span>
      <span className={description}>My texxxxxxxxxxt</span>
    </div>
    <div className={styles.skill}>
      <div className={icon}>
        <img src="" alt=""/>
      </div>
      <span className={styles.skillTitle}>React</span>
      <span className={description}>My texxxxxxxxxxt</span>
    </div>
  <div className={styles.skill1}>

</div>
    </div>
    </div>
    </div>


  );
}

export default  Skills;
