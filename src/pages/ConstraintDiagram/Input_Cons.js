import { Equalizer } from "@mui/icons-material";
import styles from "../../styles/Constraint/Input_Cons.module.css";
import { useEffect, useState } from "react";
import { Equation } from "react-equation";
import { QuestionHover } from "../ComponentDesign/ComponentDesignComp";
const Input_Cons = (props) => {
  // const [weight, setWeight] = useState("");
  // const [isTrue, setIsTrue] = useState("2"); // set initial value to Imperial
  // const [isSI, setIsSI] = useState(false);
  // const handleSIchange = (isSI) => {
  //   setIsSI(isSI);
  // };
  // Function to handle weight changes and convert values to the selected unit system
  // const handleUnitSystemChange = () => {
  //   const convertedValue = unitSystem === "si"
  //   ? props.weight=Number(props.weight)*2.20462
  //   : props.weight
  //   setWeight(convertedValue);
  // };

  // function handleWeightChange(value) {
  //   if (unitMultiplierWeight == 1) {
  //     props.handleWeightChange(parseFloat(value));
  //   } else {
  //     const weight = parseFloat(value) * Number(unitMultiplierWeight);
  //     props.handleWeightChange(weight);
  //   }
  // // }
  // useEffect(()=> {
  //   handleWeightChange(props.weight)
  // },[unitMultiplierWeight])
  // console.log(props.weight,unitMultiplierWeight)
  // onChange={handleUnitChange}
  return (
    <>
      <div className={styles.option}>
        <select name="unitSelect" onChange={props.handleUnitChange} className={styles.unitSelect}>
          <option select disabled>--Select Unit--</option>
          <option value="imperial">Imperial</option>
          <option value="si">SI</option>
        </select>
      </div>

      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.sub_container1}>
            <div className={styles.header1}>
              <b>Fundametal Requirements</b>
            </div>

            <div className={styles.input_container1}>
              <div className={styles.questionHover}>
                <div className={styles.inputTitle}>
                  Estimated Overall Weight
                  <QuestionHover
                    title="
                The overall weight of the aircraft in this section is an estimation, further calculation is needed for the preliminary design.
                The overall weight of the RC aircraft nomrally falls between 5-8 kg.
                "
                  />
                </div>
              </div>
              <div className={styles.inputSection}>
                <input
                  className={styles.overall_weight}
                  type="number"
                  placeholder="Input Value"
                  onChange={(e) => {
                    props.handleWeightChange(e.target.value);
                  }}
                />
                <p className={styles.inputUnit}>
                  {props.unit === "imperial" ? (
                    <Equation value="lb" />
                  ) : (
                    <Equation value="kg" />
                  )}
                </p>
              </div>

              <div className={styles.inputTitle}>Desired Velocity</div>
              <div className={styles.inputSection}>
                <input
                  className={styles.velocity}
                  type="number"
                  placeholder="Input Value"
                  onChange={(e) => {
                    props.handleVelocityChange(e.target.value, "velocity");
                  }}
                />
                <p className={styles.inputUnit}>
                  {props.unit === "imperial" ? (
                    <Equation value="ft/s" />
                  ) : (
                    <Equation value="m/s" />
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sub_container2}>
            <div className={styles.header2}>
              <b>Terrain</b>
            </div>
            <div className={styles.inputTitle}>Cruising Altitude</div>
            <div className={styles.inputSection}>
              <input
                className={styles.altitude}
                type="number"
                placeholder="Input Value"
                onChange={(e) => {
                  props.handleAltitudeChange(e.target.value, "altitude");
                }}
              />
              <p className={styles.inputUnit}>
                {props.unit === "imperial" ? (
                  <Equation value="ft" />
                ) : (
                  <Equation value="m" />
                )}
              </p>
            </div>
            <div className={styles.inputTitle}>Takeoff Runway Length</div>
            <div className={styles.inputSection}>
              <input
                className={styles.torw}
                type="number"
                placeholder="Input Value"
                onChange={(e) => {
                  props.handleTORWChange(e.target.value, "torw");
                }}
              />
              <p className={styles.inputUnit}>
                {props.unit === "imperial" ? (
                  <Equation value="ft" />
                ) : (
                  <Equation value="m" />
                )}
              </p>
            </div>
          </div>

          <div className={styles.sub_container3}>
            <div className={styles.header3}>
              <b>Performance</b>
            </div>
            <div className={styles.inputTitle}>Rate of Climb</div>
            <div className={styles.inputSection}>
              <input
                className={styles.roc}
                type="number"
                placeholder="Input Value"
                onChange={(e) => {
                  props.handleROCChange(e.target.value, "roc");
                }}
              />
              <p className={styles.inputUnit}>
                {props.unit === "imperial" ? (
                  <Equation value="ft/s" />
                ) : (
                  <Equation value="m/s" />
                )}
              </p>
            </div>
            <div className={styles.inputTitle}>Bank Angle</div>
            <div className={styles.inputSection}>
              <input
                className={styles.BAngle}
                type="number"
                placeholder="Input Value"
                onChange={(e) => {
                  props.handleBAngleChange(e.target.value, "BAngle");
                }}
              />
              <div className={styles.inputUnit}>
                {props.unit === "imperial" ? "degree" : "degree"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input_Cons;
