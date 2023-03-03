import styles from '../../styles/Constraint/Navbar_Cons.module.css'
import {RxHamburgerMenu} from "react-icons/rx";


const Navbar_Cons = () => {
  return (
  <>
  <div className={styles.header}>  
      <div className={styles.burger}>
        <RxHamburgerMenu/>
      </div>
  </div>

  <div className={styles.top_page}>
        Constraint Diagram
  </div>
  </>
  )
}

export default Navbar_Cons