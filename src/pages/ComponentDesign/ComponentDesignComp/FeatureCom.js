import styles from '../../../styles/ComponentDesign/ComponentDesignComp/featureCom.module.css'

const FeatureCom = ({title, input}) => {
  return (
    <div className={styles.Component__Feature_Container}>
          <div className={styles.Feature__Container_title}>
              <h3>{title}</h3>
          </div>
          <div className={styles.Feature__Container_Input}>
              <input type="text" placeholder={input}/>
              <p>Unit</p>
          </div>
    </div>
  )
}

export default FeatureCom