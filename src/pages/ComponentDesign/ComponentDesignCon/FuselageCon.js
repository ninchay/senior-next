import { useEffect } from "react";
import styles from "../../../styles/ComponentDesign/ComponentDesignCon/fuselageCon.module.css";
import { ResultCom } from "../ComponentDesignComp";

const FuselageCon = (props) => {
  const FuseL =
    (1.75 * props.chordM) / 3 + Number(props.tailArm) + 100*props.hTailChord ;

  useEffect(()=>{
    props.onFuseChange(FuseL);
  },[props.chrodM, props.tailArm, props.hTailChord]);

  console.log(props.hTailChord)
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
          <ResultCom
            title="Fuselage Length"
            output={!isNaN(FuseL) ? FuseL.toFixed(2) : null}
            unit="cm."
          />
        </div>
        <div className={styles.Fuselage__Hidden_Box} />
      </div>
    </div>
  );
};

export default FuselageCon;
