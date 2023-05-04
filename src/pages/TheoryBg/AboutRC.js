import React from 'react'
import { Header_Cons } from '../../index'
import styles from '../../styles/TheoryBg/aboutRC.module.css'

const AboutRC = () => {

return (
<>

<Header_Cons header_title="Theoretical Background"/>

<div className={styles.card1}>
    <div className={styles.title_theory}><p>About RC Plane</p></div>
        <div className={styles.textbox_aboutRC}>
            <div className={styles.rc_describtion}> 
            <p>Remote controlled (RC) aircraft are model airplanes that are flown using a remote control device. These aircraft are typically built from lightweight materials such as foam, balsa wood, or plastic and are powered by an electric motor. </p>
            <p>The remote control device allows the pilot to control the aircraft's speed, direction, and altitude. The pilot can also control the throttle, which adjusts the power of the motor or engine.</p>
            <p>RC aircraft are popular among hobbyists and enthusiasts of all ages. They can be used for recreational flying, aerial photography, and even racing. Building and flying RC planes can also be a fun and educational way to learn about aerodynamics and aviation.</p>
            </div>
        </div>
</div>
</>
)
}

export default AboutRC