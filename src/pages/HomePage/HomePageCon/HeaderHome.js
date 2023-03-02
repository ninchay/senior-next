
import styles from '../../../styles/HomePage/HomePageCon/headerHome.module.css'

const HeaderHome = () => {
  return (
    <div className={styles.Home_Header}>
      <div className={styles.Home_Topic}>
        <h1>Radio Controlled Aircraft Design</h1>
      </div>
      <div className={styles.billboard}>
        <img src="/billboard.png" alt='Home_Wallpaper'/>
      </div>
    </div>
  )
}

export default HeaderHome