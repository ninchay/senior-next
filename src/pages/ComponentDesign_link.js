import { CombinationCon, FooterCon, FuselageCon, HeaderCon, TailCon, WingCon} from './ComponentDesign/ComponentDesignCon' ;
import { NavbarCom, Canvas, CmAlpha} from './ComponentDesign/ComponentDesignComp';
import styles from '../styles/ComponentDesign/ComponentDesign.module.css';
import { useState, useEffect} from 'react';

const ComponentDesign = () => {
  
  //use for pass parameter to combination, wing, and tail
  const [wingSpan,setWingspan] = useState(null);
  const handleWingSpanChange = (b) => {
    setWingspan(b);
  };

  //Use for pass parameter to tail and fuselage
  const [hTailArm, setHtailArm] = useState(null);

  const handleHtailArmChange = (m) => {
      setHtailArm(m);
    }
    
  //use for pass parameters to wing, tail, fuselage  
  const [canvasProps, setCanvasProps] = useState({
    chordM: null,
    rootM: null,
    tipM: null,
  });
  const handleCanvasPropsChange = (chordM) => {
    setCanvasProps(chordM);
  };

// For Retrieve State from WingCon to illustrate another wing Canvas
  const [taper,setTaper] = useState(null);

  const handleTaperCanvas = (T) => {
    setTaper(T);
  }
  const [wingType,setWingType] = useState(null)

  const handleTypeCanvas = (w) => {
    setWingType(w);
  }

  useEffect(() => {
    if (wingType == "Rectangular") {
      setTaper(1);
    }
  }, [wingType]);

  // For retrieve HtailChord for refine fuselage length
  const [hTailChord,setHtailChord] = useState(null);

  const handleHtailChord = (hTail) => {
    setHtailChord(hTail);
  }

  // Fuselage Legth Parameter used in Combination
  const[fuseL, setFuseL] = useState(null);

  const handleFuseL = (f) => {
    setFuseL(f);
  }

  // Horizontal TailSpan used in Combination
  const[hTailSpan, setHtailSpan] = useState(null);

  const handleHtailSpan = (hTailSpan) => {
    setHtailSpan(hTailSpan);
  }

  // Wing Area used for determine wing dimension
  const[wingArea, setWingArea] = useState(null)

  const handleWingArea = (A) => {
    setWingArea(A);
  }

  const[vTailChord, setVtailChord] = useState(null)

  const handleVtailChord = (vTail) => {
    setVtailChord(vTail);
  }

  const[vTailSpan, setVtailSpan] = useState(null);

  const handleVtailSpan = (vs) => {
    setVtailSpan(vs);
  }

const [airfoil, setAirfoil]=useState(null)
const airfoilNumber=parseFloat(airfoil);

  return (
    <div className={styles.App}>
        <NavbarCom/>
        <HeaderCon/>
      <div className="Wing">
        <WingCon
        wingArea = {wingArea}
        onWingAreaChange = {handleWingArea}
        wingSpan = {wingSpan}
        onWingSpanChange={handleWingSpanChange}
        canvasProps = {canvasProps}
        onCanvasPropsChange = {handleCanvasPropsChange}
        onTaperCanvas = {handleTaperCanvas}
        onTypeCanvas ={handleTypeCanvas}
        />
      </div>
      <div className="Tail">
        <TailCon
        tailArm = {hTailArm}
        wingArea = {wingArea}
        onTailArmChange ={handleHtailArmChange}
        wingSpan = {wingSpan}
        chordM = {canvasProps.chordM}
        onHtailChordChange = {handleHtailChord}
        onVtailChordChange = {handleVtailChord}
        onHtailSpanChange = {handleHtailSpan}
        onVtailSpanChange = {handleVtailSpan}
        />
      </div>
      <div className="cmAlpha">
        <CmAlpha 
        wingArea = {wingArea}
        wingSpan = {wingSpan}
        airfoilProp={airfoilNumber}
        />
      </div>
      <div className="cmAlpha">
        <CmAlpha 
        wingArea = {wingArea}
        wingSpan = {wingSpan}
        airfoilProp={airfoilNumber}
        />
      </div>
      <div className="Fuselage">
        <FuselageCon 
        tailArm={hTailArm}
        chordM={canvasProps.chordM}
        hTailChord = {hTailChord}
        onFuseChange = {handleFuseL}
        />
      </div>
      <div className="combination">
        <CombinationCon 
        fuseL = {fuseL}
        wingSpan={wingSpan}
        chordM = {canvasProps.chordM}
        taper ={taper}
        wingType={wingType}
        rootM = {canvasProps.rootM}
        tipM = {canvasProps.tipM}
        canvasPropsChange = {handleCanvasPropsChange}
        hTailSpan = {hTailSpan}
        hTailChord = {hTailChord}
        vTailChord = {vTailChord}
        vTailSpan = {vTailSpan}
        />
      </div>
      <div className="Footer">
        <FooterCon />
      </div>
    </div>
  )
}

export default ComponentDesign