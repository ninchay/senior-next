import { Navbar_theo, Content_theo, AboutRC, BasicPrinciple,Aerodynamics, Component, FooterCon } from '../index'
import styles from '../styles/TheoryBg/Theory.module.css'

const Theory = () => {

  const variableListTakeoff = [
    {symbol:"ρ", description:"Air density"},
    {symbol:"C_L_max", description:"Maximum Lift Coefficient"},
    {symbol:"g", description:"Gravitational Acceleration"},
    {symbol:"S", description:"Wing Area"},
    {symbol:"S_TO", description:"Required takeoff length"},
    {symbol:"T", description:"Thrust"},
    {symbol:"W_TO",description:"Weight takeoff"},
    {symbol:"V_stall", description:"Stall Velocity"},
    {symbol:"V_TO", description:"Takeoff Velocity"},
    
]

  const variableListLanding = [
    {symbol:"ρ", description:"Air density"},
    {symbol:"σ", description:"Pressure Ratio"},
    {symbol:"C_L_max", description:"Maximum Lift Coefficient"},
    {symbol:"g", description:"Gravitational Acceleration"},
    {symbol:"S", description:"Wing Area"},
    {symbol:"S_FL", description:"Landing Field Length in Landing Configuration"},
    {symbol:"T", description:"Thrust"},
    {symbol:"V_a", description:"Approach Velocoy"},
    {symbol:"V_SL",description:"Stall Velocity at Landing Configuration"},
    {symbol:"W",description:"Weight"},
    {symbol:"(W/S)_LD", description:"Wing loading at Landing Configuration"},
]

const variableListROC = [
  {symbol:"ρ", description:"Air density"},
  {symbol:"ρ", description:"Air density"},
  {symbol:"C_d0", description:"Drag Coefficient at Clean Configuration"},
  {symbol:"C_L_ROC",description:"Lift Coefficient at Rate of Climb"},
  {symbol:"L/D", description:"Lift-to-drag ratio"},
  {symbol:"(L_roc/D_roc)", description:"Lift-to-drag ratio at Rate of Climb Configuration"},
  {symbol:"ROC", description:"Rate of Climb"},
  {symbol:"S", description:"Wing Area"},
  {symbol:"T/W ", description:"Thrust-to-Weight ratio"},
  {symbol:"(P_TO/W_TO)", description:"Power-to-Weight ratio at Takeoff Configuration"},
]

const variableListTurn = [
  {symbol:"ρ", description:"Air density"},
  {symbol:"θ", description:"Bank Angle"},
  {symbol:"C_d0", description:"Drag Coefficient at Clean Configuration"},
  {symbol:"K", description:"Drag Polar Constant"},
  {symbol:"n", description:"Load Factor"},
  {symbol:"q",description:"Dynamic Pressure"},
  {symbol:"S", description:"Wing Area"},
  {symbol:"T", description:"Thrust"},
  {symbol:"V", description:"Velocity"},
  {symbol:"W", description:"Weight"},
  {symbol:"(P_TO/W_TO)", description:"Power-to-Weight ratio at Takeoff Configuration"},
  {symbol:"(W/S)", description:"Wing loading"},
]

const variableListCruise = [
  {symbol:"ρ", description:"Air density"},
  {symbol:"AR", description:"Aspect Ratio"},
  {symbol:"C_d0", description:"Drag Coefficient at Clean Configuration"},
  {symbol:"C_L", description:"Lift Coefficient"},
  {symbol:"D", description:"Drag"},
  {symbol:"e", description:"Oswald Efficiency"},
  {symbol:"K", description:"Drag Polar Constant"},
  {symbol:"q",description:"Dynamic Pressure"},
  {symbol:"S", description:"Wing Area"},
  {symbol:"T", description:"Thrust"},
  {symbol:"V", description:"Velocity"},
  {symbol:"(P_TO/W_TO)", description:"Power to Weight ratio in Takeoff Configuration"},
  {symbol:"W/S", description:"Wing loading"},
]

  return (
<> 
  <div className={styles.app}>
    <Navbar_theo />
    <AboutRC />
    <BasicPrinciple />
    <Aerodynamics />
    <div className={styles.title_Constraint}><p>Constraint Diagram</p></div>
    <Content_theo title="Takeoff"
      subtitle="The originate equation is from AIAA Book eq. 5.56"
      equation ="S_TO = (1.44W_TO^2)/ (ρSC_L_max gT)"
      variableList={variableListTakeoff}
      body="The takeoff velocity is calculated from the equation below"
      equationSub1 = "V_stall_TO = sqrt((2W)/ρSC_L_max)"
      equationSub2 = "V_TO = 1.2 * V_stall_TO"
      body1= "Rearranging the equation and converting the thrust to power for, the eqation of power-to-weight is obtained which can be used for RC aircraft as follow"
      equationFinal ="P_TO/W_TO = (1.44WV_TO)/ (ρSC_L_max g) * (747/550) "
    />
    <Content_theo title="Landing"
      subtitle="The originate equations are from ISE Chulalongkorn University Lecture Slide from Aircraft Design course"
      equation ="V_SL = sqrt ((2(W/S))/(σρC_L_max))"
      variableList={variableListLanding}
      body="Noted that the stall speed obtaing from approching speed equation (equation below) has unit as knot. Please convert the unit before calculating"
      equationSub1 = "V_SL = V_a/1.3"
      equationSub2 = "V_a = sqrt (S_FL / 0.3)"
      body1= {`\nSince there is no thrust involed into landing equation, the equation above can be applied for both jet engine and electric aircraft. The above equation is the rearraging equation in wing loading terms`}
      equationFinal="(W/S)_LD=(V_SL^2σρC_L_max)/(2)"
    />
    <Content_theo title="Cruise"
      subtitle="The originate equations are from ISE Chulalongkorn University Lecture Slide from Aircraft Design course"
      equation ="T=D=qS(C_d0 +KC_L^2)"
      variableList={variableListCruise}
      body="The equation below are used to determine for power-to-weight equation"
      equationSub1 = "K = 1/(πeAR)"
      equationSub2 = "q=1/2ρV^2 "
      body1= {`\nRearranging the equation and converting the thrust to power, the eqation of power-to-weight is obtained which can be used for RC aircraft as follow\n`}
      equationFinal="(P_TO/W_TO)= ((C_d0q)/(W/S) + (K/q)(W/S))*V*(745.7/550)"
    />
    <Content_theo title="Rate of Climb"
      subtitle="The originate equations are from ISE Chulalongkorn University Lecture Slide from Aircraft Design course"
      equation ="ROC = T/W - 1/((L/D))"
      variableList={variableListROC}
      body="The equation below are used to determine for power-to-weight equation"
      equationSub1 = "C_L_ROC = W/(1/2 ρV^2S)"
      equationSub2 = "L_ROC/D_ROC= C_L_ROC/(C_d0 + K(C_L_ROC ^2))"
      body1= {`\nRearranging the equation and converting the thrust to power, the eqation of power-to-weight is obtained which can be used for RC aircraft as follow\n`}
      equationFinal="(P_TO/W_TO)=(ROC+V/(L_roc/D_roc)) * (745.7/550)"
    />
    <Content_theo title="Turn"
      subtitle="Turn equation is similar to the cruise equation as stated above. The originate equations are from AIAA book 5.62"
      equation ="T = C_d0 qS + (Kn^2W^2)/(qs)"
      variableList={variableListTurn}
      body="The equation below are used to determine for power-to-weight equation"
      equationSub1 = "n=1/cos(θ)"
      equationSub2 = "q=1/2ρV^2 "
      body1= {`\nRearranging the equation and converting the thrust to power, the eqation of power-to-weight is obtained which can be used for RC aircraft as follow\n`}
      equationFinal="(P_TO/W_TO)= ((C_d0q)/(W/S) + n^2(K/q)(W/S))*V*(745.7/550)"
    />

    <Component />
    <FooterCon />
  </div>
</>  
  )
}

export default Theory