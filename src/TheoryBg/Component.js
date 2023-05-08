import { useState } from "react";
import styles from "../styles/TheoryBg/Component.module.css";
import { Equation } from "react-equation";
import { HiMinus, HiPlus } from "react-icons/hi";

const Component = () => {
  const [wingDescribtion, setWingDescribtion] = useState(false);
  const [tailDescribtion, setTailDescribtion] = useState(false);
  const [fuseDescribtion, setFuseDescribtion] = useState(false);
  return (
    <>
      <div className={styles.component}>
        <div className={styles.title}>Component Design</div>
        <div className={styles.textbox}>
          To begin this part, it is necessary to do the constraint diagram first
          since the parameter of power-to-weight and wing loading will be used
          in this section.
        </div>

        <div className={styles.wing}>
          <div className={styles.toggle}>
            <div className={styles.subTitle}>Wing Component Design</div>
            {wingDescribtion ? (
              <HiMinus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setWingDescribtion(false)}
              />
            ) : (
              <HiPlus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setWingDescribtion(true)}
              />
            )}
          </div>
          {wingDescribtion && (
            <>
              <div className={styles.wingSub}>
                <p>To design the wing, there are a few factors that must be
                considered: aspect ratio and taper ratio. Both of them affects
                to aerodynamics of the aircraft.</p>
                  <p><Equation style={{display:"flex", justifyContent:"center"}} value="A=b^2/S"/></p>
                  <p><Equation style={{display:"flex", justifyContent:"center"}} value="λ=c_t/c_r"/></p>
                <p>Then, the aspect ratio is inspected to observe whether it pass the historical data criterion using equation below</p>
                <p><Equation  style={{display:"flex", justifyContent:"center"}} value="λ ≥ 0.2A^(1/4)  cos^2Λ_25%"/></p>
                <p>If the equation above is satisfised, the root and tip chord can then be calculated accordingly.</p>
                <p>The mean aerodynamics chord (the average chord length in the simpler meaning) can be determined as follow</p>
                <p><Equation style={{display:"flex", justifyContent:"center"}} value="(c_w )=2/3 c_r ((1+λ+λ^2)/(1+λ))"/></p>
              </div>
            </>
          )}
        </div>

        <div className={styles.wing}>
          <div className={styles.tailToggle}>
            <div className={styles.subTitle}>Tail Component Design</div>
            {tailDescribtion ? (
              <HiMinus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setTailDescribtion(false)}
              />
            ) : (
              <HiPlus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setTailDescribtion(true)}
              />
            )}
          </div>
          {tailDescribtion && (
            <>
              <div className={styles.wingSub}>
                <p>To design the tail, the tail area must be initially defined and it requires
                wing parameters. The horizontal and vertical tail use distinct required variables.
                Horizontal and vertical tail area can be calculated respectively with formulas below. 
                </p>
                  <p><Equation style={{display:"flex", justifyContent:"center"}} value="S_HT = C_HT*((MAC*S_W)/l_HT)"/></p>
                  <p><Equation style={{display:"flex", justifyContent:"center"}} value="S_VT = C_VT*((b*S_W)/l_VT)"/></p>
                <p>After getting tail area, the dimension of the tail can be calculated according to tail
                  span input since the tail type is restricted to be merely rectangle. Finally, tail chord will be defined.</p>
                <p><Equation  style={{display:"flex", justifyContent:"center"}} value="Chord = S_T/b_T"/></p>
              </div>
            </>
          )}
        </div>

        <div className={styles.wing}>
          <div className={styles.fuseToggle}>
            <div className={styles.subTitle}>Fuselage Component Design</div>
            {fuseDescribtion ? (
              <HiMinus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setFuseDescribtion(false)}
              />
            ) : (
              <HiPlus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setFuseDescribtion(true)}
              />
            )}
          </div>
          {fuseDescribtion && (
            <>
              <div className={styles.wingSub}>
                <p>Fuselage for radio-controlled aircraft can be determined based on various variables.
                  The relation was derived and adapted from Basic RC model aircraft design textbook, and the relation
                  is shown below.
                </p>
                  <p><Equation style={{display:"flex", justifyContent:"center"}} value="L_f = 1.75*MAC + L_HT + Chord_HT"/></p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Component;
