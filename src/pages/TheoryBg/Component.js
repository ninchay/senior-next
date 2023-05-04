import { useState } from "react";
import styles from "../../styles/TheoryBg/Component.module.css";
import { Equation } from "react-equation";
import { HiMinus, HiPlus } from "react-icons/Hi";


const Component = () => {
  const [describtion, setDescribtion] = useState(false);
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
            {describtion ? (
              <HiMinus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setDescribtion(false)}
              />
            ) : (
              <HiPlus
                className={styles.plusMinus}
                color="#000"
                size={35}
                onClick={() => setDescribtion(true)}
              />
            )}
          </div>
          {describtion && (
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
      </div>
    </>
  );
};

export default Component;
