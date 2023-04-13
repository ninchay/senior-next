import { useState } from 'react';
import styles from '../../styles/Constraint/Result_Cons.module.css';

const Result_Cons = (props) => {
    const powerReq1 = props.pwValue*(props.weight*2.20462)
    const wingArea1 = ((props.weight*2.20462)/props.wSValue)*0.092903
    const clCruise1 = (2/Number(props.rhoCruise * props.velocity**2)) *Number(props.wSValue)
//round number 
const powerReq = powerReq1.toFixed(3)
const wingArea = wingArea1.toFixed(3)
const clCruise = clCruise1.toFixed(3)

return (
<div className={styles.result_summary}>

    <div className={styles.header_result}>
        <b>Result Summary</b>
    </div>

    <div className={styles.container_result}>

        <div className={styles.pwResult}>
            <span className={styles.word}>Power to Weight</span>
            <div className={styles.answer}>   
                <div className={styles.power_weight}>
                    {props.pwValue > 0 && props.pwValue}
                </div>
                <div className={styles.unit}>Watt/kg</div>
            </div>
        </div>

        <div className={styles.wsResult}>
            <span className={styles.word}>Wing Loading </span>
            <div className={styles.answer}>   
                <div className={styles.wingLoading}>
                    {props.wSValue}
                </div>
                <div className={styles.unit}>kg/m^2</div>
            </div>
        </div>

        <div className={styles.powerReqResult}>
            <span className={styles.word}>Power Required</span>
            <div className={styles.answer}>   
                <div className={styles.powerReq}>
                {powerReq>0 && powerReq}
                </div>
                <div className={styles.unit}>Watt</div>
            </div>
        </div>

        <div className={styles.wingAreaResult}>
            <span className={styles.word}>Wing Area</span>
            <div className={styles.answer}>   
                <div className={styles.wingArea}>
                    {wingArea > 0
                    && wingArea != Infinity
                    && wingArea}
                </div>
                <div className={styles.unit}>m^2</div>
            </div>
        </div>

        <div className={styles.clCruiseaResult}>
            <span className={styles.word}>CL for Cruise</span>
            <div className={styles.answer}>   
                <div className={styles.clCruise}>
                    {clCruise > 0 && clCruise}
                </div>
                <div className={styles.unit}></div>
            </div>
        </div>
    </div>
</div>
)
}

export default Result_Cons