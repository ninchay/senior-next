import styles from '../../../styles/ComponentDesign/ComponentDesignCon/fuselageCon.module.css'
import {ResultCom} from '../ComponentDesignComp'

const FuselageCon = () => {
  return (
    <div className={styles.Component__Fuselage_Container}>
      <div className={styles.Fuselage__Container_Title}>
        <h2>Fuselage</h2>
      </div>
      <div className={styles.Fuselage__Container_Calculation}>
        <div className={styles.Fuselage__Container_Style}>
          <div className={styles.Fuselage__Container_Header}>
            <h2>Result</h2>
          </div>
          <ResultCom title="Fuselage Length" />
        </div>
          <div className={styles.Fuselage__Hidden_Box} /> 
      </div>
    </div>
  )
}

export default FuselageCon