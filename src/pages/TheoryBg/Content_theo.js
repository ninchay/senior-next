import styles from '../../styles/TheoryBg/Content.module.css'
import { Header_Cons } from '../ConstraintDiagram'
import {HiMinus, HiPlus} from 'react-icons/Hi'
import { useState } from 'react'

// const Toggle = ({body}) => {
//   const [selected, setSelected]=useState(false);
  
//   return (
// <>
//   <div className={styles.select_container}>
//     { selected ? <AiOutlineMinus color="#000" size={35} onClick={() => setSelected(false)}/>
//                 : <AiOutlinePlus color="#000" size={35} onClick={() => setSelected(true)}/>
//     }

//     { selected && (
//       <div className={styles.body}>{body}</div>
//     )

//                   }
//   </div>
// </>
// )
// }
    



const Content_theo = () => {
  const [selected, setSelected]=useState(false);
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

      <div className={styles.card2}>
        <div className={styles.title_Constraint}><p>Constraint Diagram</p></div>
          <div className={styles.rowbox}>

            <div className={styles.takeoff_box}>
              <>
              <div styles={{display:"flex", flexDirection:"colume"}}>
                <div>Takeoff</div> 
                <div className={[styles.toggle1, {flex:1}]}>
                    { selected ? <HiMinus color="#000" size={35} onClick={() => setSelected(false)}/>
                                : <HiPlus color="#000" size={35} onClick={() => setSelected(true)}/>
                    }
                </div>
              </div>

              <div style={{flex:1}}>
                  { selected && (
                    <div className={styles.takeoff_body}>This is takeoff body for theory Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, omnis ratione dolorum hic iusto, eaque, doloribus consequatur et sit quaerat doloremque ipsam! Quia dolores accusamus, similique totam voluptates ducimus ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis necessitatibus consequuntur vel et est dolorem nemo repellendus, recusandae dicta, possimus esse eveniet accusantium. Neque voluptatibus vel ipsam quam suscipit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsam sunt consectetur cum atque quod. Est ipsam reiciendis modi excepturi? Quae saepe atque hic ipsum soluta, minus vel facilis aut.</div>
                  )

                  }
              </div>
              </>
            </div>




            <div className={styles.roc_des}>
              <div>Climb Rate</div>

            </div>

            <div className={styles.cruise_des}>Cruise</div>
            <div className={styles.turn_des}>Turn</div>
            <div className={styles.land_des}>Landing</div> 
          </div>
      </div>


    </div>
</>    
)
}

export default Content_theo