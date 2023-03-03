import { FeatureCom } from '../ComponentDesignComp/FeatureCom'
import { ResultCom } from '../ComponentDesignComp/ResultCom'
import styles from '../../../styles/ComponentDesign/ComponentDesignCon/wingCon.module.css'

const WingCon = () => {
  return (
    <div className={styles.Component__Wing_Container}>
      <div className={styles.Component__Wing_Calculation}>
        <div className={styles.Component__Wing_Input}>
            <h2>Wing Parameters</h2>
            <div className={styles.Component__Wing_Style}>
              <div className={styles.Wing__Selection}>
                  <h3>Wing Type</h3>
                  <select name="WingType" id="WingType">
                    <option value="" disabled selected>--Select Wing Type--</option>
                    <option value="Rectangular">Rectangular Wing</option>
                    <option value="Tapered">Tapered Wing</option>
                  </select>
              </div>
                <FeatureCom title="Wingspan" input="Input Value" />
                <FeatureCom title="Taper Ratio" input="Input Value" />
            </div>
        </div>
        <div className={styles.Component__Wing_Geometry}>
          <p>Graphical Illustration</p>
        </div>
      </div>
      <div className={styles.Component__Wing_Result}>
          <h2>Result</h2>
          <div className={styles.Wing__Result_Style}> 
            <ResultCom title="Root Chord" output="Root Chord"/>
            <ResultCom title="Tip Chord" output="Tip Chord"/>
            <ResultCom title="Mean Aerodynamic Chord" output="Mean Aerodynamic Chord" />
          </div>
      </div>
      <div className={styles.Component__Wing_Airfoil}>
          <h2>Airfoil Selection</h2>
          <div className={styles.Airfoil__Selection}>
            <div className={styles.Airfoil__Header}>
              <h3>Airfoil Type</h3>
              <img src="./Qmark.png" alt="Question Mark" />
            </div>
            <select name="AirfoilType" id="AirfoilType">
              <option value="" disabled selected>--Select Airfoil--</option>
              <option value="ClarkY">Clark-Y</option>
              <option value="NACA23015">NACA-23015</option>
              <option value="Eppler236">Eppler-236</option>
            </select>
          </div>
      </div>
    </div>
  )
}

export default WingCon