
// import cloud from '../../../assets/cloud.png' ;
// import clouds from '../../../assets/cloud-small.png' ;
// import icon1 from '../../../assets/graph.png' ;
// import icon2 from '../../../assets/planegraphic.png' ;
// import icon3 from '../../../assets/bulb.png';

import styles from '../../../styles/Container/HomePage/contentHome.module.css';


const ContentHome = () => {
  return (
    <div className={styles.Home__Content_container}>
      <div className={styles.Home__content_Constraint}>
        <a href='Constraint-Diagram'><p>Constraint<br/>Diagram<br/>
        <img src="/graph.png" alt='Graph'/></p></a>
        <div className={styles.constraint_decor}>
          <img src="/cloud.png" alt='Cloud'/>
        </div>
      </div>
      <div className={styles.Home__content_Component}>
        <a href='Component-Design'><p>Component<br/>Design<br/>
        <img src="planegraphic.png" alt='Graph'/></p></a>
        <div className={styles.Component_decor}>
          <img src="/cloud.png" alt='Cloud'/>
        </div>
      </div>
      <div className={styles.Home__content_Theory}>
        <a href='Theoretical-Background'><p>Theoretical<br/>Background<br/>
        <img src="/bulb.png" alt='Graph'/></p></a>
        <div className={styles.Theory_decor}>
          <img src="/cloud-small.png" alt='Small-Cloud'/>
        </div>
      </div>
    </div>
  )
}

export default ContentHome