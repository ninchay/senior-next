import styles from '../../../styles/ComponentDesign/ComponentDesignComp/resultCom.module.css'

const ResultCom = (props) => {
  return (
    <div className={styles.Component__Result_Container}>
         <div className={styles.Result__Container_title}>
            <h3>{props.title}</h3>
        </div>
        <div className={styles.Result__Container_Output}>
            <p>{props.output}</p>
            <span>{props.unit}</span>
        </div>
    </div>
  )
}

export default ResultCom