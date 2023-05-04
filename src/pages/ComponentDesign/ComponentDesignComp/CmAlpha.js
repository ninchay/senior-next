import { useState } from "react";
import styles from "../../../styles/ComponentDesign/ComponentDesignComp/CmAlpha.module.css";
import { Equation } from "react-equation";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { QuestionHover } from "./QuestionHover";

const CmAlpha = (props) => {
  // react hook
  const [airfoil, setAirfoil] = useState("");
  const [airfoilTail, setAirfoilTail] = useState("");
  const [isStable, setIsStable] = useState("");
  const [isShown, setIsShown] = useState(true);

  // calculate for cg
  const cgPosition =
    props.cgInput == "" ? NaN : (props.cgInput * props.chordM) / 3 / 100;
  //calculation
  const e = 0.85;
  const aWing =
    airfoil == ""
      ? NaN
      : Number(airfoil) /
        Number(
          1 +
            airfoil /
              (Math.PI *
                e *
                Number(Number(props.wingSpan ** 2) / props.wingArea))
        );

  const aTail =
    airfoilTail == ""
      ? NaN
      : Number(airfoilTail) /
        Number(
          1 +
            airfoilTail /
              (Math.PI *
                e *
                Number(Number(props.wingSpan ** 2) / props.wingArea))
        );

  const cmAlpha1 =
    aWing * (cgPosition - props.chordM / 3) -
    -0.7 *
      aTail *
      (1 -
        Number(
          (2 * aWing) /
            (Math.PI * Number(Number(props.wingSpan ** 2) / props.wingArea))
        ));
  const cmAlpha = isNaN(cmAlpha1) ? "" : cmAlpha1.toFixed(3);

  // console.log("cmalpha",cmAlpha, "airfoil", airfoil, "awing", aWing,"atail", aTail, "wing airfoil", airfoil, "tail", airfoilTail)
  // console.log(props.chordM/3)

  return (
    <>
      <div className={styles.threeBox}>
        <div className={styles.Wing}>
          <div className={styles.Component__Wing_Airfoil}>
            <h2>Airfoil Selection for Wing</h2>
            <div className={styles.Airfoil__Selection}>
              <div className={styles.Airfoil__Header}>
                <h3>Airfoil Type</h3>
              </div>
              <select
                name="AirfoilType"
                value={airfoil}
                onChange={(e) => {
                  setAirfoil(parseFloat(e.target.value));
                }}
              >
                <option value="" disabled>
                  --Select Airfoil--
                </option>
                <option value="0.1023">Clark-Y</option>
                <option value="0.1091">E193</option>
                <option value="0.1017">E374</option>
                <option value="0.1108">MH60</option>
                <option value="0.1038">NACA 23012</option>
                <option value="0.115">NACA 2412</option>
                <option value="0.1171">RG15</option>
                <option value="0.1215">S0737</option>
                <option value="0.1027">S3013 103-84</option>
                <option value="0.1149">Wortmann</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.Tail}>
          <div className={styles.Component__Tail_Airfoil}>
            <h2>Airfoil Selection for Tail</h2>
            <div className={styles.Airfoil__Selection}>
              <div className={styles.Airfoil__Header}>
                <h3>Airfoil Type</h3>
              </div>
              <select
                name="AirfoilType"
                value={airfoilTail}
                onChange={(e) => {
                  setAirfoilTail(parseFloat(e.target.value));
                }}
              >
                <option value="" disabled>
                  --Select Airfoil--
                </option>
                <option value="0.105">NACA 0005</option>
                <option value="0.1093">NACA 0007</option>
                <option value="0.1056">NACA 0010</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.cgBox}>
          <div className={styles.cgTitleQuestion}>
            <h2>CG Position</h2>
            <QuestionHover
              title="
            The center of gravity on the mean aerodynamic chord (MAC) in percentage. 
            Ideally, it should be located at the MAC. "
            />
          </div>
          <div className={styles.positionCG}>
            <h3>Position of CG in percentage</h3>
            <input
              type="number"
              max="100"
              step="5"
              min = "0"
              className={styles.cgInput}
              placeholder="Input Value"
              onChange={(e) => {
                props.handleCGchange(e.target.value, "cg");
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.cmAlphaBox}>
        <div className={styles.result}>
          {isShown && cmAlpha < 0 ? (
            <div className={styles.resultBox}>
              <div className={styles.CheckCmAlpha}>
                <CheckCircleIcon style={{ fontSize: 70 }} />
              </div>
              <div className={styles.CheckinfoBox}>
                <li>The value of Lift Curve Slope is {cmAlpha}</li>
                <li>
                  If the lift curve slope is negative (-), it is indicating that
                  the aircraft is STABLE.{" "}
                </li>
                <li>
                  The chosen values for wingspan, wing area, and airfoils for
                  both wing and tail are suitable for achieving optimal
                  aerodynamic performance.
                </li>
              </div>
            </div>
          ) : (
            <div className={styles.resultBox}>
              <div className={styles.CancelCmAlpha}>
                <CancelIcon style={{ fontSize: 70 }} />
              </div>
              <div className={styles.CancelinfoBox}>
                <li>The value of Lift Curve Slope is {cmAlpha}</li>
                <li>
                  If the lift curve slope is positive (+), it is indicating that
                  the aircraft is NOT STABLE.{" "}
                </li>
                <li>
                  The chosen values for wingspan, wing area, and airfoils for
                  both wing and tail may not be appropriate for achieving
                  optimal aerodynamic performance.{" "}
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CmAlpha;
