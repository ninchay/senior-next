import styles from '@/styles/Home.module.css'
import { HeaderHome,ContentHome,FooterHome } from "../../src"
import { NavbarHome } from "../../src"

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
