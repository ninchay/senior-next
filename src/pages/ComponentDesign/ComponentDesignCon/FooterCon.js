import styles from '../../../styles/ComponentDesign/ComponentDesignCon/footerCon.module.css';

const FooterCon = () => {
  return (
    <div className={styles.Component__Footer_Container}>
      <div className={styles.Component__Footer_Content}>
        <p>Contact Us</p>
        <input type="email" placeholder="Enter Your Email Address" />
        <div className={styles.Footer__Img}>
          <img src = "./plane.png" alt="Plane" />
        </div>
      </div>
    </div>
  )
}

export default FooterCon