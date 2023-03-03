import styles from '../../../styles/HomePage/HomePageCon/contentHome.module.css';
import Link from 'next/link';

const ContentHome = () => {
  return (
    <div className={styles.Home__Content_container}>
      <div className={styles.Home__content_Constraint}>
        <Link href="/Constraint"><p>Constraint<br/>Diagram<br/>
        <img src="/graph.png" alt='Graph'/></p></Link>

        <div className={styles.constraint_decor}>
          <img src="/cloud.png" alt='Cloud'/>
        </div>
      </div>
      <div className={styles.Home__content_Component}>
        <Link href="/ComponentDesign_link" className="ComponentDesign_link_name"><p>Component<br/>Design<br/>
        <img src="/planegraphic.png" alt='Graph'/></p></Link>
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