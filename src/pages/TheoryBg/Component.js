import React from 'react'
import styles from '../../styles/TheoryBg/Component.module.css'
import { Equation } from 'react-equation'

const Component = () => {
  return (
    <div className={styles.component}>
        <div className={styles.title}>Component Design</div>
        <div className={styles.textbox}>
        To begin this part, it is necessary to do the constraint diagram first since the parameter of power-to-weight and wing loading will be used in this section.

        </div>
        <div className={styles.subTitle}>Wing Component Design</div>
        <div className={styles.wingSub}>
            To design the wing, there are a few factors that must be considered: aspect ratio and taper ratio. Both of them affects to aerodynamics of the aircraft.
            .There are many type of wing that can be applied to the aircraft making more efficient in performance. In this website, 2 type of wing planforms can be applied which are rectangular and taper wing. 
            The elliptical wing planform is characterized by a smoothly curved leading edge and tapered wingtips that result in a taper ratio of less than 1. The design was famously used on the Supermarine Spitfire fighter aircraft during World War II.
            The elliptical wing planform is known for producing low drag and high lift, resulting in efficient flight performance. The taper ratio contributes to this by reducing wingtip vortices, which can cause drag and reduce lift. With a taper ratio of less than 1, the wingtips of an elliptical wing create less turbulence and therefore less drag than a wing with a higher taper ratio. 
            The equation for taper ratio can be calculated from equation below.
        </div>
        <Equation
        value = "A= 0.2A^(1/4) cos^2Λ_14"
        />
    </div>
  )
}

export default Component