import {React,useEffect,useRef,useState} from 'react'
import styles from '../../styles/ComponentDesign/ComponentDesignCon/combinationCon.module.css'
import { CombinationTop, CombinationSide } from '../../index';

const CombinationCon = (props) => {

  const illustBox = useRef(null);

  useEffect(() => {
    if (illustBox.current) {
      const width = illustBox.current.clientWidth;
      const height = illustBox.current.clientHeight;
      // console.log(width, height);
    }
  }, []);

  // console.log(props.vTailChord,props.FuseL,props.wingSpan)

  return (
    <div className={styles.CombinationCon}>
      <div className={styles.CombinationCon_Header}>
        <h2>Aircraft Preview</h2>
      </div>
      <div className={styles.combinationCon_Content}>
        <div className={styles.contentTop}>
          <h3>Aircraft Top View</h3>
          <div className={styles.contentTop_Canvas} ref={illustBox}>
            <CombinationTop 
            fuseL = {props.FuseL}
            fuseV = {props.FuseV}
            wingSpan={props.wingSpan}
            chordM = {props.chordM}
            taper ={props.taper}
            wingType={props.wingType}
            rootM = {props.rootM}
            tipM = {props.tipM}
            canvasPropsChange = {props.canvasPropsChange}
            hTailSpan = {props.hTailSpan}
            hTailChord = {props.hTailChord}
            vTailChord = {props.vTailChord}
            />
          </div>
        </div>
        <div className={styles.contentSide}>
          <h3>Aircraft Side View</h3>
          <div className={styles.contentSide_Canvas}>
            <CombinationSide 
            fuseL = {props.FuseL}
            fuseV = {props.FuseV}
            wingSpan={props.wingSpan}
            chordM = {props.chordM}
            taper ={props.taper}
            wingType={props.wingType}
            rootM = {props.rootM}
            tipM = {props.tipM}
            canvasPropsChange = {props.canvasPropsChange}
            vTailSpan = {props.vTailSpan}
            hTailChord = {props.hTailChord}
            vTailChord = {props.vTailChord}
            />

          </div>
        </div>

      </div>
      <div className={styles.Component__Theme_Bottom}>
        <img src="./themes.png" alt="themes" />
      </div>
    </div>
  )
}

export default CombinationCon