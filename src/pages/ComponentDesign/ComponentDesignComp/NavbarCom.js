import React, {useState} from 'react'
import {RiMenu2Line, RiCloseLine} from 'react-icons/ri';

import styles from '../../../styles/ComponentDesign/ComponentDesignComp/navbarCom.module.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#Constraint">Constraint Diagram</a></p>
  <p><a href="#Background">Theoretical Background</a></p>
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
          <div className={styles.Navbar__Menu_Container.scale_up_center}>
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