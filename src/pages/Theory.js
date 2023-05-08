import { Navbar_theo, Content_theo, AboutRC, BasicPrinciple,Aerodynamics, Component, FooterCon } from '../index'
import styles from '../styles/TheoryBg/Theory.module.css'

const Theory = () => {

  const variableListTakeoff = [
    {symbol:"W_TO",description:"Weight takeoff"},
    {symbol:"S_TO", description:"Required takeoff length"},
    {symbol:"ρ", description:"Air density"},
    {symbol:"S", description:"Wing Area"},
    {symbol:"C_L_max", description:"Maximum Lift Coefficient"},
    {symbol:"g", description:"Gravitational Acceleration"},
    {symbol:"T", description:"Thrust"},
]

  const variableListClimb = [
    {symbol:"V_SL",description:"Stall Velocity at Landing Configuration"},
    {symbol:"ρ", description:"Air density"},
    {symbol:"S", description:"Wing Area"},
    {symbol:"C_L_max", description:"Maximum Lift Coefficient"},
    {symbol:"g", description:"Gravitational Acceleration"},
    {symbol:"T", description:"Thrust"},
]
const variableListROC = [
  {symbol:"C_L_ROC",description:"Lift Coefficient at Rate of Climb"},
  {symbol:"ρ", description:"Air density"},
  {symbol:"S", description:"Wing Area"},
  {symbol:"C_d0", description:"Drag Coefficient at Clean Configuration"},
  {symbol:"L/D", description:"Lift-to-drag ratio"},
  {symbol:"T", description:"Thrust"},
]
const variableListTurn = [
  {symbol:"q",description:"Dynamic Pressure"},
  {symbol:"ρ", description:"Air density"},
  {symbol:"S", description:"Wing Area"},
  {symbol:"C_d0", description:"Drag Coefficient at Clean Configuration"},
  {symbol:"V", description:"Velocity"},
  {symbol:"T", description:"Thrust"},
  {symbol:"n", description:"Load Factor"},
  {symbol:"θ", description:"Turn Angle"},
]
const variableListCruise = [
  {symbol:"q",description:"Dynamic Pressure"},
  {symbol:"ρ", description:"Air density"},
  {symbol:"S", description:"Wing Area"},
  {symbol:"C_d0", description:"Drag Coefficient at Clean Configuration"},
  {symbol:"V", description:"Velocity"},
  {symbol:"T", description:"Thrust"},
  {symbol:"D", description:"Drag"},
  {symbol:"K", description:"Drag Polar Constant"},
  {symbol:"e", description:"Oswald Efficiency"},
  {symbol:"AR", description:"Aspect Ratio"},
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
      subtitle="The originate equation is from (AIAA Book) eq. 5.56"
      equation ="S_TO = (1.44W_TO^2)/ (ρSC_L_max gT)"
      variableList={variableListTakeoff}
      body="The takeoff velocity is calculated from the equation below"
      equationSub1 = "V_stall_TO = sqrt((2W)/ρSC_L_max)"
      equationSub2 = "V_TO = 1.2 * V_stall_TO"
      body1= "Rearranging the equation and converting the thrust to power for, the eqation of power-to-weight is obtained which can be used for RC aircraft as follow"
      equationFinal ="P_TO/W_TO = (1.44WV_TO)/ (ρSC_L_max g) * (747/550) "
    />
    <Content_theo title="Landing"
      subtitle="The originate equations are from Lecture BNC"
      equation ="V_SL = sqrt ((2(W/S))/(σρC_L_max))"
      variableList={variableListClimb}
      body="Noted that the stall speed obtaing from approching speed equation (equation below) has unit as knot. Please convert the unit before calculating"
      equationSub1 = "V_SL = V_a/1.3"
      equationSub2 = "V_a = sqrt (S_FL / 0.3)"
      body1= {`\nSince there is no thrust involed into landing equation, the equation above can be applied for both jet engine and electric aircraft. The above equation is the rearraging equation in wing loading terms`}
      equationFinal="(W/S)_LD=(V_SL^2σρC_L_max)/(2)"
    />
    <Content_theo title="Cruise"
      subtitle="The originate equations are from Lecture BNC"
      equation ="T=D=qS(C_d0 +KC_L^2)"
      variableList={variableListCruise}
      body="The equation below are used to determine for power-to-weight equation"
      equationSub1 = "K = 1/(πeAR)"
      equationSub2 = "q=1/2ρV^2 "
      body1= {`\nRearranging the equation and converting the thrust to power, the eqation of power-to-weight is obtained which can be used for RC aircraft as follow\n`}
      equationFinal="(P_TO/W_TO)= ((C_d0q)/(W/S) + (K/q)(W/S))*V*(745.7/550)"
    />
    <Content_theo title="Rate of Climb"
      subtitle="The originate equations are from Lecture BNC"
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