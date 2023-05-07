import { useState, useRef, useEffect } from "react";
import { CanvasTail, QuestionHover } from "../../index";
import styles from "../../styles/ComponentDesign/ComponentDesignComp/tailfeature.module.css";

const TailFeature = (props) => {
  const illustBox = useRef(null);

  useEffect(() => {
    if (illustBox.current) {
      const width = illustBox.current.clientWidth;
      const height = illustBox.current.clientHeight;
      // console.log(width, height);
    }
  }, []);

  // console.log(props.tailType);

  return (
    <div className={styles.Tail__Feature_Container}>
      <h2>{props.header}</h2>
      <div className={styles.Tail__Feature_Calculation}>
        <div className={styles.Tail__Feature_Input}>
          <div className={styles.Tail__Input_Title}>
            <h3>{props.title1}</h3>
            <QuestionHover title={props.content} />
          </div>
          <div className={styles.Tail__Input_1}>
            <input
              type="number"
              placeholder="Input Value"
              onChange={(e) => {
                props.onTailArmChange(parseFloat(e.target.value));
              }}
              min="0"
              max="100"
              step="10"
              value={props.tailArm}
            />
            <p>cm.</p>
          </div>
          <h3>{props.title2}</h3>
          <div className={styles.Tail__Input_2}>
            <input
              type="number"
              placeholder="Input Value"
              onChange={(e) => {
                props.onTailSpanChange(parseFloat(e.target.value));
              }}
              min="0"
              max="60"
              step="10"
              value={props.tailSpan}
            />
            <p>cm.</p>
          </div>
        </div>
        <div className={styles.Tail__Feature_Geometry} ref={illustBox}>
          <div className={styles.Geometry__Canvas}>
            <span className={styles.Geometry__Tailspan}>{props.canvasTop}</span>
            <span className={styles.Geometry__TailChord}>{props.canvasBottom}</span>
            <CanvasTail
              wingArea={props.wingArea}
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
    </div>
  );
};

export default TailFeature;
