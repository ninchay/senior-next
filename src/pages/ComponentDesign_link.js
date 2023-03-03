import { FooterCon, FuselageCon, HeaderCon, TailCon, WingCon} from '../pages/ComponentDesign/ComponentDesignCon' ;
import { NavbarCom } from '../pages/ComponentDesign/ComponentDesignComp';
import styles from '../styles/ComponentDesign/ComponentDesign.module.css';

const ComponentDesign = () => {
  return (
    <div className={styles.body}>
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