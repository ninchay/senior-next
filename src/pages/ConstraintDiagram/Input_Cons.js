import styles from '../../styles/Constraint/Input_Cons.module.css'

const Input_Cons = () => {
return (
<div className={styles.card}>
  <div className={styles.container}>

    <div className={styles.sub_container1}>
            <div className={styles.header1}>
                <b>Fundametal Requirements</b>
            </div>

            <div className={styles.input_container1}>
                <div className={styles.inputTitle}>
                    Estimated Overall Weight
                </div>
                <div className={styles.inputSection}>
                  <input 
                    className={styles.input1_value}
                    type="number"
                  />
                  <p className={styles.inputUnit}> Unit </p>
                </div>

                <div className={styles.inputTitle}>
                    <p>Desired Velocity</p>
                </div>
                <div className={styles.inputSection}>
                    <input 
                      className={styles.des_vel}
                      type="number"
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
                <p><input type="value" className={styles.input2_value}/></p> 
                <div className={styles.inputSection}>
                    <input 
                      className={styles.inputValue}
                      type="number"
                    />
                    <p className={styles.inputUnit}> Unit </p>
                </div>
              </div>
              <div className={styles.inputTitle}>
                <p>Takeoff Runway Length</p>
                  <p><input type="value" className={styles.input2_1_value}/></p> 
                <div className={styles.inputSection}>
                    <input 
                      className={styles.inputValue}
                      type="number"
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
                      className={styles.inputValue}
                      type="number"
                    />
                    <p className={styles.inputUni}> Unit </p>
                </div>
              </div>
              <div className={styles.inputTitle}>
                  Bank Angle
                {/* <p><input type="value" className="input2-value"/></p> */}
                <div className={styles.inputSection}>
                    <input 
                      className={styles.inputValue}
                      type="number"
                    />
                    <p className={styles.inputUnit}> Unit </p>
                </div>
              </div>
      </div>
  </div>
</div>

  )
}

export default Input_Cons
