import React from 'react'
import styles from '../../styles/Constraint/Header_Cons.module.css'
const Header_Cons = ({header_title}) => {
  return (
    <div className={styles.Header_Cons_Container}>
        <p>{header_title}</p>
    </div>
  )
}

export default Header_Cons
