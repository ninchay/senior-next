import { useState, useRef, useEffect } from "react";
import CanvasTail from "./CanvasTail";
import styles from "../../../styles/ComponentDesign/ComponentDesignComp/tailfeature.module.css";

const TailFeature = (props) => {
  const illustBox = useRef(null);

  useEffect(() => {
    if (illustBox.current) {
      const width = illustBox.current.clientWidth;
      const height = illustBox.current.clientHeight;
      // console.log(width, height);
    }
  }, []);

  // console.log(props.wingSpan, props.MAC);

  return (
    <div className={styles.Tail__Feature_Container}>
      <h2>{props.header}</h2>
      <div className={styles.Tail__Feature_Calculation}>
        <div className={styles.Tail__Feature_Input}>
          <div className={styles.Tail__Input_Title}>
            <h3>{props.title1}</h3>
            <img src="./QMark.png" alt="Qmark" />
          </div>
          <div className={styles.Tail__Input_1}>
            <input
              type="number"
              placeholder="Input Value"
              onChange={(e) => props.onTailArmChange(e.target.value)}
              min="0"
              max="100"
              step="10"
            />
            <p>cm.</p>
          </div>
          <h3>{props.title2}</h3>
          <div className={styles.Tail__Input_2}>
            <input
              type="number"
              placeholder="Input Value"
              onChange={(e) => props.onTailSpanChange(e.target.value)}
              min="0"
              max="60"
              step="10"
            />
            <p>cm.</p>
          </div>
        </div>
        <div className={styles.Tail__Feature_Geometry} ref={illustBox}>
          <CanvasTail
            tailArm={props.tailArm}
            tailType={props.tailType}
            tailSpan={props.tailSpan}
            wingSpan={props.wingSpan}
            MAC={props.MAC}
            onChange={props.onTailPropsChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TailFeature;
