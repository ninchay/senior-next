import styles from '../../styles/Constraint/Navbar_Cons.module.css'
import {RiMenu2Line, RiCloseLine} from "react-icons/ri";
import React, {useState} from 'react'
import Link from 'next/link'

const Menu = () => (
  <>
  <p><Link href="/">Home</Link></p>
  <p><Link href="/ComponentDesign_link">Component Design</Link></p>
  <p><Link href="/Theory">Theoretical Background</Link></p>
  </>
)
const Navbar_Cons = () => {
  const[ToggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.Constraint_Navbar}>
      <div className={styles.toggle}>
        <div className={styles.Constraint_Navbar_Menu}>
          {ToggleMenu
            ? <RiCloseLine  color="#000" size={35} margin-left={10} onClick={() => setToggleMenu(false)} />
            : <RiMenu2Line color="#000" size={35} onClick={() => setToggleMenu(true)} />
          }
        </div>
        {ToggleMenu && (
          <div className={styles.Navbar__Menu_Container}>
            <div className={styles.Menu__Container_Link}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
      )
    }   
export default Navbar_Cons