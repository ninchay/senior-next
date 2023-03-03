import { ResultCom, TailFeature } from '../../ComponentDesign/ComponentDesignComp'
import styles from '../../../styles/ComponentDesign/ComponentDesignCon/tailCon.module.css'

const TailCon = () => {
  return (
    <div className={styles.Component__Tail_Container}>
      <div className={styles.Component__Theme_Top}>
        <img src="./themes.png" alt="themes" />
      </div>
      <div className={styles.Component__Tail_Header}>
        <p>Tail Sizing</p>
      </div>
      <div className={styles.Component__Tail_Calculation}>
        <div className={styles.Horizontal__Tail_Calculation}>
          <TailFeature header="Horizontal Tail" title1="Tail Moment Arm"
          title2="Horizontal Tail Span" />
        </div>
        <div className={styles.Vertical__Tail_Calculation}>
          <TailFeature header="Vertical Tail" title1="Tail Moment Arm"
          title2="Vertical Tail Span" />
        </div>
      </div>
      <div className={styles.Component__Tail_Graph}>
        <p>CM-Alpha Graph</p>
      </div>
      <div className={styles.Component__Tail_Result}>
        <div className={styles.Tail__Result_Header}>
          <h2>Result</h2>
        </div>
        <div className={styles.Tail__Result_Style}>
          <div className={styles.Result__Style_First}>
            <ResultCom title="Horizontal Tail Area" output="Horizontal Tail Area" />
            <ResultCom title="Vertical Tail Area" output="Vertical Tail Area" />
          </div>
          <div className={styles.Result__Style_Second}>
            <ResultCom title="Horizontal Tail Span" output="Horizontal Tail Span" />
            <ResultCom title="Vertical Tail Span" output="Vertical Tail Span" />
          </div>
          <div className={styles.Result__Style_Third}>
            <ResultCom title="Horizontal Tail Chord" output="Horizontal Tail Chord" />
            <ResultCom title="Vertical Tail Chord" output="Vertical Tail Chord" />
          </div>
        </div>
      </div>
      <div className={styles.Component__Theme_Buttom}>
        <img src="./themes2.png" alt="themes2" />
      </div>
    </div>
  )
}

export default TailCon