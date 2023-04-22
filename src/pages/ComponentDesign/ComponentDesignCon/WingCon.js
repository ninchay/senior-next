import { Canvas, FeatureCom } from "../ComponentDesignComp";
import { ResultCom } from "../ComponentDesignComp";
import { useEffect, useState } from "react";
import styles from "../../../styles/ComponentDesign/ComponentDesignCon/wingCon.module.css";

const WingCon = (props) => {

  const [wingType, setWingType] = useState("");
  const [airfoil, setAirfoil] = useState("");
  const [taper, setTaper] = useState("");

  useEffect(() => {
    if (wingType == "Rectangular") {
      setTaper(1);
    }
  }, [wingType]);

  // console.log(wingType, taper);
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
                onChange={props.onWingAreaChange}
              />
            <div className={styles.Wing__Selection}>
              <h3>Wing Type</h3>
              <select
                name="WingType"
                value={wingType}
                onChange={(e) => {
                  setWingType(e.target.value);
                  props.onTypeCanvas(e.target.value);
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
              onChange={props.onWingSpanChange}
              maxInput="180"
              step="10"
              unit="cm."
              disable={wingType == "" ? true : false}
            />
            <FeatureCom
              title="Taper Ratio"
              // InputValue={taper}
              onChange={(T) => {
                setTaper(T);
                props.onTaperCanvas(T);
              }}
              maxInput="1"
              step="0.05"
              disable={wingType == "Taper" ? false : true}
              initial={taper}
            />
          </div>
        </div>
        <div className={styles.Component__Wing_Geometry}>
          <div className={styles.Geometry__Canvas}>
            <span className={styles.Geometry__WingSpan}>Wingspan</span>
            <span className={styles.Geometry__Chord}>Chord</span>
            <Canvas
              wingArea={props.wingArea}
              wingType={wingType}
              wingSpan={props.wingSpan}
              taper={taper}
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
