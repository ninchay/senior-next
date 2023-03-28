import { Navbar_theo, Content_theo } from './TheoryBg'
import styles from '../styles/TheoryBg/Theory.module.css'

const Theory = () => {
  return (
<> 
  <div className={styles.app}>
    <Navbar_theo />
    <Content_theo />
  </div>
</>  
  )
}

export default Theory