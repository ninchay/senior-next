import { FooterCon, FuselageCon, HeaderCon, TailCon, WingCon} from './ComponentDesign/ComponentDesignCon' ;
import { NavbarCom } from './ComponentDesign/ComponentDesignComp';
import styles from '../styles/ComponentDesign/ComponentDesign.module.css';

const ComponentDesign = () => {
  return (
    <div className={styles.App}>
      <div className="Wing">
        <NavbarCom/>
        <HeaderCon/>
        <WingCon/>
      </div>
      <div className="Tail">
        <TailCon/>
      </div>
      <div className="Fuselage">
        <FuselageCon />
        <FooterCon />
      </div>
    </div>
  )
}

export default ComponentDesign