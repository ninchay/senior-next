import styles from '../../../styles/ComponentDesign/ComponentDesignComp/resultCom.module.css'

const ResultCom = ({title, output}) => {
  return (
    <div className={styles.Component__Result_Container}>
         <div className={styles.Result__Container_title}>
            <h3>{title}</h3>
        </div>
        <div className={styles.Result__Container_Output}>
            <output name="Result" placeholder={output}/>
            <p>Unit</p>
        </div>
    </div>
  )
}

export default ResultCom