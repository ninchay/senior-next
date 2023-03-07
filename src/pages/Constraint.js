import { Input_Cons, Navbar_Cons, Result_Cons,Graph_Cons, Header_Cons} from './ConstraintDiagram';
import styles from '../styles/Constraint/Constraint.module.css'

const Constraint = () => {
  return (
  <>
    <div classname={styles.app}>
    <div className={styles.Navbar}> 
          <Navbar_Cons />
    </div>
    <div style={{minWidth:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Header_Cons />
        <Input_Cons />
        <Graph_Cons />
        <Result_Cons />
      </div>
    </div>
  </>
  )
}

export default Constraint