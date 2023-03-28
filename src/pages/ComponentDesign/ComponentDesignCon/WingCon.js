import { Canvas, FeatureCom } from "../ComponentDesignComp";
import { ResultCom } from "../ComponentDesignComp";
import { useEffect, useState, useRef} from "react";
import styles from "../../../styles/ComponentDesign/ComponentDesignCon/wingCon.module.css";

const WingCon = () => {
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });
  // console.log(count.current)
  const [wingType, setWingType] = useState("");
  const [airfoil, setAirfoil] = useState("");
  const [wingSpan, setWingSpan] = useState("");
  const [taper, setTaper] = useState("");
  const [canvasProps, setCanvasProps] = useState({
    chordM: "",
    rootM: "",
    tipM: "",
  });

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
              <h3>Wing Type</h3>
              <select
                name="WingType"
                value={wingType}
                onChange={(e) => setWingType(e.target.value)}
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
              InputValue={wingSpan}
              onChange={(b) => setWingSpan(b)}
              maxInput="180"
              step="10"
              unit="cm."
            />
            <FeatureCom
              title="Taper Ratio"
              InputValue={taper}
              onChange={(T) => setTaper(T)}
              maxInput="1"
              step="0.05"
              disable={wingType == "Taper" ? false : true}
              initial={taper}
            />
          </div>
        </div>
        <div className={styles.Component__Wing_Geometry}>
          <Canvas
            wingType={wingType}
            wingSpan={wingSpan}
            taper={taper}
            canvasPropsChange={(props) => setCanvasProps(props)}
          />
        </div>
      </div>
      <div className={styles.Component__Wing_Result}>
        <h2>Result</h2>
        <div className={styles.Wing__Result_Style}>
          <ResultCom
            title="Root Chord"
            output={(canvasProps.rootM / 3).toFixed(2)}
            unit ="cm."
          />
          <ResultCom
            title="Tip Chord"
            output={(canvasProps.tipM / 3).toFixed(2)}
            unit ="cm."
          />
          <ResultCom
            title="Mean Aerodynamic Chord"
            output={(canvasProps.chordM / 3).toFixed(2)}
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
            <option value="ClarkY">Clark-Y</option>
            <option value="NACA23015">NACA-23015</option>
            <option value="Eppler236">Eppler-236</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default WingCon;
