import styles from '../../../styles/ComponentDesign/ComponentDesignComp/tailfeature.module.css'


const TailFeature = ({header, title1, title2}) => {
  return (
    <div className={styles.Tail__Feature_Container}>
      <h2>{header}</h2>
      <div className={styles.Tail__Feature_Calculation}>
          <div className={styles.Tail__Feature_Input}>
            <div className={styles.Tail__Input_Title}>
                <h3>{title1}</h3>
                <img src = "./QMark.png" alt="Qmark" />
            </div>
              <div className={styles.Tail__Input_1}>
                <input type="text" placeholder="Input Value"/>
                <p>Unit</p>
              </div>
                <h3>{title2}</h3>
              <div className={styles.Tail__Input-2}>
                <input type="text" placeholder="Input Value"/>
                <p>Unit</p>
              </div>
          </div>
          <div className={styles.Tail__Feature_Geometry}>
            <p>Graphical Illustration</p>
          </div>
      </div>
    </div>
  )
}

export default TailFeature