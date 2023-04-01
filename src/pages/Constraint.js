import { Input_Cons, Navbar_Cons, Result_Cons,Graph_Cons, Header_Cons} from './ConstraintDiagram';
import styles from '../styles/Constraint/Constraint.module.css'
import React, {useState,useEffect} from 'react'

const Constraint = () => {

  const [velocity, setVelocity] = useState(70)
  const [altitude, setAltitude] = useState(1000)
  const [roc, setROC] = useState(12)
  const [torw, setTORW] = useState(65.6)
  const [BAngle, setBAngle] = useState(60)
  const [intersection, setIntersection] = useState(null);

  return (
  <>
    <div className={styles.app}>
      <div className={styles.Navbar}>
        <Navbar_Cons />
      </div>
      <div style={{minWidth:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Header_Cons header_title="Constraint Diagram"/>
          <Input_Cons handleVelocityChange={(velocity)=>{
                        setVelocity(velocity)}}
                      handleAltitudeChange={(altitude)=>{
                        setAltitude(altitude)}}
                      handleROCChange={(roc)=>{
                        setROC(roc)}}
                      handleTORWChange={(torw)=>{
                        setTORW(torw)}}
                      handleBAngleChange={(BAngle)=>{
                        setBAngle(BAngle)}}            
                        
          />
          <Graph_Cons velocity={velocity} 
                      altitude={altitude}
                      roc={roc}
                      torw={torw}
                      BAngle={BAngle}
                      />
          <Result_Cons />
      </div>
    </div>
  </>
  )
}

export default Constraint