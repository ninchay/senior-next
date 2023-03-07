import { Input_Cons, Navbar_Cons, Result_Cons,Graph_Cons, Header_Cons} from './ConstraintDiagram';
import styles from '../styles/Constraint/Constraint.module.css'
import React, {useState,useEffect} from 'react'

const Constraint = () => {

  const [velocity, setVelocity] = useState(150)
  const [takeoffrwlength, settakeoffrwlength] = useState(150)


  return (
  <>
    <div classname={styles.app}>
<<<<<<< HEAD
      <div style={{minWidth:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Navbar_Cons />
          <Input_Cons handleVelocityChange={(v)=>{setVelocity(v)}}/>
          <Graph_Cons velocity={velocity}/>
          <Result_Cons />
=======
    <div className={styles.Navbar}> 
          <Navbar_Cons />
    </div>
    <div style={{minWidth:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Header_Cons />
        <Input_Cons />
        <Graph_Cons />
        <Result_Cons />
>>>>>>> 39bcbb61d063b3c15f7255f61d5f7f4523de2951
      </div>
    </div>
  </>
  )
}

export default Constraint