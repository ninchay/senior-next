import { Canvas, FeatureCom, QuestionHover } from "../../../index";
import { ResultCom } from "../../../index";
import { useEffect, useState } from "react";
import styles from "../../../styles/ComponentDesign/ComponentDesignCon/wingCon.module.css";
import {wingArea, wingType, wingSpan, taperedRatio} from "../../../index"

const WingCon = (props) => {


  useEffect(() => {
    if (props.wingType == "Rectangular") {
      props.onWingParamChange("wingTaper", 1);
    }
  }, [props.wingType]);

  // console.log("wingType",props.wingType, "wingArea",props.wingArea,"wingSpan",props.wingSpan);
  return (
    <div className={styles.Component__Wing_Container}>
      <div className={styles.Component__Wing_Calculation}>
        <div className={styles.Component__Wing_Input}>
          <h2>Wing Parameters</h2>
          <div className={styles.Component__Wing_Style}>
              <FeatureCom
                title="Wing Area"
                unit={
                  <span>
                    m.<sup>2</sup>
                  </span>
                }
                step="0.1"
                storedValue = {props.wingArea}
                onChange={(value) => props.onWingParamChange("wingArea", value)}
                content={wingArea}
              />
            <div className={styles.Wing__Selection}>
              <div className={styles.wing__Selection_Title}>
              <h3>Wing Type</h3>
                <QuestionHover  title={wingType}/>
              </div>
              <select
                value={props.wingType}
                onChange={(e) => {
                  props.onWingParamChange("wingType",e.target.value);
                }}
              >
                <option value="" disabled>
                  --Select Wing Type--
                </option>
                <option value="Rectangular">Rectangular Wing</option>
                <option value="Taper">Tapered Wing</option>
              </select>
            </div>
            <FeatureCom
              title="Wingspan"
              // InputValue={props.wingSpan}
              onChange={(value) => props.onWingParamChange("wingSpan",value)}
              maxInput="180"
              step="10"
              unit="cm."
              disable={props.wingType == "" ? true : false}
              storedValue={props.wingSpan}
              content={wingSpan}
            />
            <FeatureCom
              title="Taper Ratio"
              // InputValue={taper}
              onChange={(value) => props.onWingParamChange("wingTaper", value)}
              maxInput="1"
              step="0.05"
              disable={props.wingType == "Taper" ? false : true}
              storedValue={props.wingTaper}
              content={taperedRatio}
            />
          </div>
        </div>
        <div className={styles.Component__Wing_Geometry}>
          <div className={styles.Geometry__Canvas}>
            <span className={styles.Geometry__WingSpan}>Wingspan</span>
            <span className={styles.Geometry__Chord}>Chord</span>
            <Canvas
              wingArea={props.wingArea}
              wingType={props.wingType}
              wingSpan={props.wingSpan}
              taper={props.wingTaper}
              canvasPropsChange={props.onCanvasPropsChange}
              />
          </div>
        </div>
      </div>
      <div className={styles.Component__Wing_Result}>
        <h2>Result</h2>
        <div className={styles.Wing__Result_Style}>
          <ResultCom
            title="Root Chord"
            output={
              !isNaN(props.canvasProps.rootM / 3)
                ? (props.canvasProps.rootM / 3).toFixed(2)
                : null
            }
            unit="cm."
          />
          <ResultCom
            title="Tip Chord"
            output={
              !isNaN(props.canvasProps.tipM / 3)
                ? (props.canvasProps.tipM / 3).toFixed(2)
                : null
            }
            unit="cm."
          />
          <ResultCom
            title="Mean Aerodynamic Chord"
            output={
              !isNaN(props.canvasProps.chordM / 3)
                ? (props.canvasProps.chordM / 3).toFixed(2)
                : null
            }
            unit="cm."
          />
        </div>
      </div>
    </div>
  );
};

export default WingCon;
