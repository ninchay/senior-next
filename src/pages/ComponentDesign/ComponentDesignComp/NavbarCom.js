import React, {useState} from 'react'
import {RiMenu2Line, RiCloseLine} from 'react-icons/ri';
import Link from 'next/link';

import styles from '../../../styles/ComponentDesign/ComponentDesignComp/navbarCom.module.css'

const Menu = () => (
  <>
  <p><Link href="/">Home</Link></p>
  <p><Link href="/Constraint">Constraint Diagram</Link></p>
  <p><Link href="/Theory">Theoretical Background</Link></p>
  </>
)

const NavbarCom = () => {
  const[ToggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.Component__Navbar}>
      <div className={styles.Component__Navbar_Menu}>
        {ToggleMenu
          ? <RiCloseLine color="#000" size={35} onClick={() => setToggleMenu(false)} />
          : <RiMenu2Line color="#000" size={35} onClick={() => setToggleMenu(true)} />
        }
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

export default NavbarCom