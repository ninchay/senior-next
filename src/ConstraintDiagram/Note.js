import React from "react";
import styles from '../styles/Constraint/Note.module.css';

const Note = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <p>How</p>
        <p>To</p>
        <p>Choose</p> 
        <p>Design</p> 
        <p>Point</p> 
        <p>?</p>
      </div>
      <div className={styles.box}>
        <div className={styles.describtion}>
          <p>
            <strong>
              Noted: Only the coordinate on the WHITE area can be used as a
              design point.
            </strong>{" "}
          </p>
        </div>
        <div className={styles.describtion}>
          <p>
            The most preferable point is high wing loading (weight-to-wing area) and low power to
            weight ratio
          </p>
        </div>
        <div className={styles.describtion}>
          <p>
            Since the motor is expensive, it is better to choose the lower power
            to save the cost. Also, the weight of aircraft isexpected to be heavier than
            the estimated value due to manufacturing process (glue and etc.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Note;
