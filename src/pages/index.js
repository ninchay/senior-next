import styles from '@/styles/Home.module.css'
import { HeaderHome,ContentHome,FooterHome } from "./HomePage/HomePageCon"
import { NavbarHome } from "./HomePage/HomePageComp"

export default function Home() {
  return (
    <div classname={styles.body}>
        <NavbarHome />
        <HeaderHome />
        <ContentHome />
        <FooterHome />
    </div>
  )
}
