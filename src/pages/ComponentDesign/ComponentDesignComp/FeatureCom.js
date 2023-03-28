import styles from '../../../styles/ComponentDesign/ComponentDesignComp/featureCom.module.css'

const FeatureCom = ({title, onChange, maxInput,step, disable,unit,initial}) => {
  // console.log(title , InputValue)
  return (
    <div className={styles.Component__Feature_Container}>
          <div className={styles.Feature__Container_title}>
              <h3>{title}</h3>
          </div>
          <div className={styles.Feature__Container_Input}>
              <input type="number" placeholder="Input Value" value={initial}
              onChange={(e)=>{onChange(e.target.value)}} min="0" max={maxInput} step={step}
              disabled ={disable}/>
              <p>{unit}</p>
          </div>
    </div>
  )
}

export default FeatureCom