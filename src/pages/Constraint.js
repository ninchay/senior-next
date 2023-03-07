import { Input_Cons, Navbar_Cons, Result_Cons,Graph_Cons, Header_Cons} from './ConstraintDiagram';
import styles from '../styles/Constraint/Constraint.module.css'
import React, {useState,useEffect} from 'react'

const Constraint = () => {

  const [velocity, setVelocity] = useState(150)
  const [takeoffrwlength, settakeoffrwlength] = useState(150)


  return (
  <>
    <div classname={styles.app}>
      <div style={{minWidth:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Navbar_Cons />
          <Input_Cons handleVelocityChange={(v)=>{setVelocity(v)}}/>
          <Graph_Cons velocity={velocity}/>
          <Result_Cons />
      </div>
    </div>
  </>
  )
}

export default Constraint