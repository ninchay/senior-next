import {
  ResultCom,
  TailFeature,
} from "../../../index";
import {HorizontalArm, VerticalArm} from "../../../index"
import styles from "../../../styles/ComponentDesign/ComponentDesignCon/tailCon.module.css";
import React from "react";

const TailCon = (props) => {
  
  return (
    <div className={styles.Component__Tail_Container}>
      <div className={styles.Component__Theme_Top}>
        <img src="./themes.png" alt="themes" />
      </div>
      <div className={styles.Component__Tail_Header}>
        <p>Tail Sizing</p>
      </div>
      <div className={styles.Component__Tail_Calculation}>
        <div className={styles.Horizontal__Tail_Calculation}>
          <TailFeature
            header="Horizontal Tail"
            title1="Tail Moment Arm"
            title2="Horizontal Tail Span"
            tailType="Horizontal"
            wingArea={props.wingArea}
            MAC={props.chordM}
            tailArm={props.hTailArm}
            onTailArmChange={(value) => props.onTailParamChange("hTailArm", value)}
            onTailSpanChange={(value) => props.onTailParamChange("hTailSpan", value)}
            tailSpan={props.hTailSpan}
            onTailPropsChange={props.onHtailPropsChange}
            content = {HorizontalArm}
          />
        </div>
        <div className={styles.Vertical__Tail_Calculation}>
          <TailFeature
            header="Vertical Tail"
            title1="Tail Moment Arm"
            title2="Vertical Tail Span"
            tailType="Vertical"
            wingArea={props.wingArea}
            wingSpan={props.wingSpan}
            tailArm={props.vTailArm}
            onTailArmChange={(value) => props.onTailParamChange("vTailArm", value)}
            onTailSpanChange={(value) => props.onTailParamChange("vTailSpan", value)}
            tailSpan={props.vTailSpan}
            onTailPropsChange={props.onVtailPropsChange}
            content = {VerticalArm}
          />
        </div>
      </div>
      <div className={styles.Component__Tail_Result}>
        <div className={styles.Tail__Result_Header}>
          <h2>Result</h2>
        </div>
        <div className={styles.Tail__Result_Style}>
          <div className={styles.Result__Style_First}>
            <ResultCom
              title="Horizontal Tail Area"
              output={
                !isNaN(props.HtArea)
                && Number(props.HtArea) != Infinity
                  ? Number(props.HtArea).toFixed(3)
                  : null
              }
              unit={
                <span>
                  m.<sup>2</sup>
                </span>
              }
            />
            <ResultCom
              title="Vertical Tail Area"
              output={
                !isNaN(props.VtArea)
                && Number(props.VtArea) != Infinity
                  ? Number(props.VtArea).toFixed(3)
                  : null
              }
              unit={
                <span>
                  m.<sup>2</sup>
                </span>
              }
            />
          </div>
          <div className={styles.Result__Style_Second}>
            <ResultCom
              title="Horizontal Tail Span"
              output={
                Number(props.hTailSpan) > 0 
                ? Number(props.hTailSpan).toFixed(2) : null
              }
              unit="cm."
            />
            <ResultCom
              title="Vertical Tail Span"
              output={
                Number(props.vTailSpan) > 0
                ? Number(props.vTailSpan).toFixed(2) 
                : null
              }
              unit="cm."
            />
          </div>
          <div className={styles.Result__Style_Third}>
            <ResultCom
              title="Horizontal Tail Chord"
              output={
                !isNaN(props.hTailChord)
                && props.hTailChord != Infinity
                  ? (props.hTailChord * 100).toFixed(2)
                  : null
              }
              unit="cm."
            />
            <ResultCom
              title="Vertical Tail Chord"
              output={
                !isNaN(props.vTailChord)
                && props.vTailChord != Infinity
                  ? (props.vTailChord * 100).toFixed(2)
                  : null
              }
              unit="cm."
            />
          </div>
        </div>
      </div>
      <div className={styles.Component__Theme_Buttom}>
        <img src="./themes2.png" alt="themes2" />
      </div>
    </div>
  );
};

export default TailCon;
