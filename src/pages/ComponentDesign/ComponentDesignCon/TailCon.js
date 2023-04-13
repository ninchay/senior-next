import {
  ResultCom,
  TailFeature,
} from "../../ComponentDesign/ComponentDesignComp";
import styles from "../../../styles/ComponentDesign/ComponentDesignCon/tailCon.module.css";
import { useEffect, useState } from "react";

const TailCon = (props) => {
  // console.log(props.wingSpan, props.chordM)
  const [canvasHtailProps, setCanvasHtailProps] = useState({
    HtArea: "",
    hTailChord: "",
  });
  const [canvasVtailProps, setCanvasVtailProps] = useState({
    VtArea: "",
    vTailChord: "",
  });

  const [hTailSpan, setHtailSpan] = useState(null);
  const [vTailSpan, setVtailSpan] = useState(null);
  const [vTailArm, setVtailArm] = useState(null);


  const handleHtailPropsChange = ({ HtArea, hTailChord }) => {
    setCanvasHtailProps({ HtArea, hTailChord });
    props.onHtailChordChange(hTailChord);
  };
  const handleVtailPropsChange = ({ VtArea, vTailChord }) => {
    setCanvasVtailProps({ VtArea, vTailChord });
  };

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
            wingArea = {props.wingArea}
            tailType="Horizontal"
            tailArm = {props.tailArm}
            onTailArmChange = {props.onTailArmChange}
            MAC={props.chordM}
            tailSpan={hTailSpan}
            onTailPropsChange={handleHtailPropsChange}
            onTailSpanChange={(h) => {setHtailSpan(h); props.onHtailSpanChange(h)}}
          />
        </div>
        <div className={styles.Vertical__Tail_Calculation}>
          <TailFeature
            header="Vertical Tail"
            title1="Tail Moment Arm"
            title2="Vertical Tail Span"
            wingArea = {props.wingArea}
            tailType="Vertical"
            tailArm = {vTailArm}
            onTailArmChange = {(arm) => setVtailArm(arm)}
            wingSpan={props.wingSpan}
            tailSpan={vTailSpan}
            onTailPropsChange={handleVtailPropsChange}
            onTailSpanChange={(v) => setVtailSpan(v)}
          />
        </div>
      </div>
      <div className={styles.Component__Tail_Graph}>
        <p>CM-Alpha Graph</p>
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
                !isNaN(canvasHtailProps.HtArea)
                  ? (Number(canvasHtailProps.HtArea) * 1e4).toFixed(2)
                  : Number(0).toFixed(2)
              }
              unit={
                <span>
                  cm.<sup>2</sup>
                </span>
              }
            />
            <ResultCom
              title="Vertical Tail Area"
              output={
                !isNaN(canvasVtailProps.VtArea)
                  ? (Number(canvasVtailProps.VtArea) * 1e4).toFixed(2)
                  : Number(0).toFixed(2)
              }
              unit={
                <span>
                  cm.<sup>2</sup>
                </span>
              }
            />
          </div>
          <div className={styles.Result__Style_Second}>
            <ResultCom
              title="Horizontal Tail Span"
              output={Number(hTailSpan).toFixed(2)}
              unit="cm."
            />
            <ResultCom
              title="Vertical Tail Span"
              output={Number(vTailSpan).toFixed(2)}
              unit="cm."
            />
          </div>
          <div className={styles.Result__Style_Third}>
            <ResultCom
              title="Horizontal Tail Chord"
              output={
                !isNaN(canvasHtailProps.hTailChord)
                  ? (canvasHtailProps.hTailChord * 100).toFixed(2)
                  : Number(0).toFixed(2)
              }
              unit="cm."
            />
            <ResultCom
              title="Vertical Tail Chord"
              output={
                !isNaN(canvasVtailProps.vTailChord)
                  ? (canvasVtailProps.vTailChord * 100).toFixed(2)
                  : Number(0).toFixed(2)
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
