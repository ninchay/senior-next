import styles from "../../styles/Constraint/Input_Cons.module.css";

const Input_Cons = (props) => {

  
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.sub_container1}>
          <div className={styles.header1}>
            <b>Fundametal Requirements</b>
          </div>

          <div className={styles.input_container1}>
            <div className={styles.inputTitle}>Estimated Overall Weight</div>
            <div className={styles.inputSection}>
              <input
                className={styles.overall_weight}
                type="number"
                onChange={(e) => {
                  props.handleWeightChange(e.target.value, "overall_weight");
                }}
              />
              <p className={styles.inputUnit}> Unit </p>
            </div>

            <div className={styles.inputTitle}>
              <p>Desired Velocity</p>
            </div>
            <div className={styles.inputSection}>
              <input
                className={styles.velocity}
                type="error"
                onChange={(e) => {
                  props.handleVelocityChange(e.target.value, "velocity");
                }}
              />
              <p className={styles.inputUnit}> Unit </p>
            </div>
          </div>
        </div>

        <div className={styles.sub_container2}>
          <div className={styles.header2}>
            <b>Terrain</b>
          </div>
          <div className={styles.inputTitle}>
            Cruising Altitude
            <div className={styles.inputSection}>
              <input
                className={styles.altitude}
                type="number"
                onChange={(e) => {
                  props.handleAltitudeChange(e.target.value, "altitude");
                }}
              />
              <p className={styles.inputUnit}> Unit </p>
            </div>
          </div>
          <div className={styles.inputTitle}>
            <p>Takeoff Runway Length</p>
            <div className={styles.inputSection}>
              <input
                className={styles.torw}
                type="number"
                onChange={(e) => {
                  props.handleTORWChange(e.target.value, "torw");
                }}
              />
              <p className={styles.inputUnit}> Unit </p>
            </div>
          </div>
        </div>

        <div className={styles.sub_container3}>
          <div className={styles.header3}>
            <b>Performance</b>
          </div>
          <div className={styles.inputTitle}>
            Rate of Climb
            <div className={styles.inputSection}>
              <input
                className={styles.roc}
                type="number"
                onChange={(e) => {
                  props.handleROCChange(e.target.value, "roc");
                }}
              />
              <p className={styles.inputUnit}> Unit </p>
            </div>
          </div>
          <div className={styles.inputTitle}>
            Bank Angle
            <div className={styles.inputSection}>
              <input
                className={styles.BAngle}
                type="number"
                onChange={(e) => {
                  props.handleBAngleChange(e.target.value, "BAngle");
                }}
              />
              <p className={styles.inputUnit}> Unit </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input_Cons;
