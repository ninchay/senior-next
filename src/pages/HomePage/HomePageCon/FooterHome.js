import styles from '../../../styles/Container/HomePage/footerHome.module.css';

const FooterHome = () => {
  return (
    <div className={styles.Home__Footer_container}>
      <div className={styles.Home__Footer_container_quote}>
        <p>Let's begin designing your<br/>own aircraft !</p>
      </div>
      <div className={styles.Home__Footer_container_contact}>
        <p>Contact Us</p>
        <div className={styles.Home__Footer_container_input}>
          <input type="email" placeholder="Enter Your Email Address" />
          <button type="button"><a href='Registration'>Get Started</a></button>
        </div>  
      </div>
      <div className={styles.Home__footer_container_space}>
        <div />
      </div>
    </div>
  )
}

export default FooterHome