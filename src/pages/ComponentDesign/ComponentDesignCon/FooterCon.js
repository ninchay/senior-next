import styles from '../../../styles/ComponentDesign/ComponentDesignCon/footerCon.module.css';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'

const FooterCon = () => {
  return (
    <div className={styles.Component__Footer_Container}>
      <div className={styles.Component__Footer_Content}>
        <div className={styles.Footer__Title}>
          <p>Contact Us</p>
        </div>          
        <div className={styles.Footer__Email}>
          <p>6238240021@student.chula.ac.th</p>
        </div>          
        <div className={styles.Footer__Icons}>
          <a href="https://www.facebook.com/pongchun.chun/"><FaFacebookF className={styles.FacebookIcon} size={35} style={{margin:"0 5px"}}/></a>
          <a href="https://www.linkedin.com/in/orachun-ruengdej?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2B2lAA%2Fk5R7ChBLBvedVPhA%3D%3D"><FaLinkedinIn className={styles.LinkedinIcon} size={40} style={{margin:"0 5px"}}/></a>
        </div>
        <div className={styles.Footer__Img}>
          <img src = "./plane.png" alt="Plane" />
        </div>
      </div>
    </div>
  )
}

export default FooterCon