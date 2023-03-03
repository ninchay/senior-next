import styles from '../../styles/Constraint/Result_Cons.module.css';

const Result_Cons = () => {
return (
<div className={styles.result_summary}>

    <div className={styles.header_result}>
        <b>Result Summary</b>
    </div>
    
    <div className={styles.container_result}>
        <div className={styles.sub_header}>
            <span className={styles.word}>P/W</span>
            <span className={styles.word}>W/S</span>
            <span className={styles.word}>Power Required</span>
            <span className={styles.word}>Wing Area</span>
            <span className={styles.word}>CL for Cruise</span>
        </div>

        <div className={styles.result_box}>
            <input type="number" className={styles.power_weight} />
            <input type="number" className={styles.wing_loading} />
            <input type="number" className={styles.power_req} />
            <input type="number" className={styles.wingarea} />
            <input type="number" className={styles.clcruise} />
        </div>

    </div>
    </div>

)
}

export default Result_Cons