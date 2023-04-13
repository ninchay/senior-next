import { Canvas, FeatureCom } from "../ComponentDesignComp";
import { ResultCom } from "../ComponentDesignComp";
import { useEffect, useState, useRef} from "react";
import styles from "../../../styles/ComponentDesign/ComponentDesignCon/wingCon.module.css";

const WingCon = (props) => {
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });
  // console.log(count.current)
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
            <div className={styles.Wing__Selection}>
              <FeatureCom
                title="Wing Area"
                unit={<span>cm.<sup>2</sup></span>}
                onChange={props.onWingAreaChange}
              />
              <h3>Wing Type</h3>
              <select
                name="WingType"
                value={wingType}
                onChange={(e) => {setWingType(e.target.value); props.onTypeCanvas(e.target.value)}}
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
              onChange={(T) => {setTaper(T); props.onTaperCanvas(T)}}
              maxInput="1"
              step="0.05"
              disable={wingType == "Taper" ? false : true}
              initial={taper}
            />
          </div>
        </div>
        <div className={styles.Component__Wing_Geometry}>
          <span className={styles.Geometry__WingSpan}>Wingspan</span>
          <span className={styles.Geometry__Chord}>Chord</span>
          <Canvas
          wingArea = {props.wingArea}
            wingType={wingType}
            wingSpan={props.wingSpan}
            taper={taper}
            canvasPropsChange={props.onCanvasPropsChange}
          />
        </div>
      </div>
      <div className={styles.Component__Wing_Result}>
        <h2>Result</h2>
        <div className={styles.Wing__Result_Style}>
          <ResultCom
            title="Root Chord"
            output={(props.canvasProps.rootM / 3).toFixed(2)}
            unit ="cm."
          />
          <ResultCom
            title="Tip Chord"
            output={(props.canvasProps.tipM / 3).toFixed(2)}
            unit ="cm."
          />
          <ResultCom
            title="Mean Aerodynamic Chord"
            output={(props.canvasProps.chordM / 3).toFixed(2)}
            unit ="cm."
          />
        </div>
      </div>
      <div className={styles.Component__Wing_Airfoil}>
        <h2>Airfoil Selection</h2>
        <div className={styles.Airfoil__Selection}>
          <div className={styles.Airfoil__Header}>
            <h3>Airfoil Type</h3>
            <img src="./Qmark.png" alt="Question Mark" />
          </div>
          <select
            name="AirfoilType"
            value={airfoil}
            onChange={(e) => {
              setAirfoil(e.target.value);
            }}
          >
            <option value="" disabled>
              --Select Airfoil--
            </option>
            <option value="3.5">Clark-Y</option>
            <option value="NACA23015">NACA-23015</option>
            <option value="Eppler236">Eppler-236</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default WingCon;
