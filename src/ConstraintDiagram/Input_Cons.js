import styles from "../styles/Constraint/Input_Cons.module.css";
import { useEffect, useState } from "react";
import { Equation } from "react-equation";
import { QuestionHover } from "../index";
const Input_Cons = (props) => {

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
                </div>
                  <QuestionHover
                    title="
                The overall weight of the aircraft in this section is an estimation, further calculation is needed for the preliminary design.
                The overall weight of the RC aircraft normally falls between 5-8 kg (11-18 lb).
                "
                  />
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

              <div className={styles.questionHover}>
              <div className={styles.inputTitle}>Desired Velocity</div>
              <QuestionHover 
              title="The maximum velocity for RC aircraft depends on the motor, which is normally around 70 ft/s or 21 m/s"
              />
              </div>
              <div className={styles.inputSection}>
                <input
                  className={styles.velocity}
                  type="number"
                  placeholder="Input Value"
                  max="100"
                  onChange={(e) => {
                    props.handleVelocityChange(parseFloat(e.target.value))
                  }}
                />
                <p className={styles.inputUnit}>
                  {props.unit === "imperial" ? (
                    <Equation value="ft/s" />
                  ) : (
                    <Equation value="m/s" />
                  )}33  91
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sub_container2}>
              <div className={styles.header2}>
                <b>Terrain</b>
              </div>
            <div className={styles.questionHover}>
              <div className={styles.inputTitle}>Cruising Altitude</div>
            <QuestionHover title="
            Flying at high altitudes allows for faster speeds and reduces the amount of turbulence that the aircraft encounters.
            However, the RC aircraft typically flys between 100 ft to around 1,000 ft (30m to 300m)"
            />
            </div>
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
            <div className={styles.questionHover}>
              <div className={styles.inputTitle}>Takeoff Runway Length</div>
              <QuestionHover title="
              This refers to the distance required for an aircraft to accelerate from a stationary position to a speed that enables it to lift off the ground safely. 
              The takeoff runway length of an RC aircraft, typically around 70ft (21m), is crucial for a successful flight.
              "/>
            </div>
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
            <div className={styles.questionHover}>
              <div className={styles.inputTitle}>Rate of Climb</div>
              <QuestionHover  title= "
              The rate of climb of RC aircraft is around 12 ft/s or 4 m/s. It is an important performance characteristic of an RC aircraft, as it can affect its ability to clear obstacles and execute certain maneuvers."
              />
            </div>
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
