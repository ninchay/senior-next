import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Graph_Cons(props) {
  //assign the variable
  const [WS, setWS] = useState(Array.from({ length: 121 }, (_, i) => i));
  const [parameter, setParameter] = useState({
    rho0: "0.0023769", //slug/ft3
    Cl_max: "1.35",
    Cl_max_to: "2.35",
    Cl_max_l: "3.1",
    cd_clean: "0.025",
    AR: "8.8",
    e: "0.7",
    roc: "16.67",
    S_L: "300",
    S_to: "200",
    T_SL: "15", //celcius
    R: "287.05", // J/kg * K
    P: "101.325", //kN/m^2
  })
  // solve for density
  const T= parameter.T_SL - 1.98*(props.altitude/1000) ;
  const rho_cruise= parameter.P/(parameter.R*T);
  //start constraint equation
  const K = 1 / (Math.PI * parameter.e * parameter.AR);
  const V_stall_to = WS.map((WS) =>
    Math.sqrt((2 * WS) / (parameter.rho0 * parameter.Cl_max_to))
  );
  const V_to = V_stall_to.map((v) => 1.2 * props.velocity);
  const PWtakeoff = WS.map(
    (WS, i) => (1.44 * setWS.WS * V_to[i] * (745.7 / 550)) / (32.17 * parameter.rho0 * parameter.Cl_max_to * parameter.S_to)
  );

  const Va = Math.sqrt(parameter.S_L / (0.3 * 0.6));
  const V_STALLL = (Va * 1.68781) / 1.3;
  const WS_LDSL = (V_STALLL**2 * parameter.rho0 * parameter.Cl_max_l) / 2;

  const CL_ROC = WS.map((WS) => WS / (0.5 * rho_cruise * props.velocity ** 2));
  const LD_ROC = CL_ROC.map((cl) => cl / (parameter.cd_clean + K * cl  **2));
  const PW_roc = LD_ROC.map((ld) => parameter.roc + (props.velocity / ld));

  const B_Angle = 30; //deg
  const n = 1 / Math.cos((B_Angle * Math.PI) / 180);
  const PW_turn = WS.map(
    (WS) =>
      ((0.5 * rho_cruise * props.velocity**2 * parameter.cd_clean) / WS + K * ((n**2 * WS) / (0.5 * rho_cruise * props.velocity**2))) * (props.velocity * 745.7) / 550);

const PW_Cruise = WS.map(
    (WS) =>
      ((0.5 * rho_cruise * props.velocity**2 * parameter.cd_clean) / WS +(K * WS) / (0.5 * rho_cruise * props.velocity**2)) *(props.velocity * 745.7) / 550);

const WS_LDSL_array = WS.map(
  (WS) => WS_LDSL
)

function handleChange(value, key) {
  setParameter(prevState => ({
    ...prevState,
    [key]: value
  }))
}

  return (
    <div className="Graph">
    {/* //   <header className="Graph-header">
    //     <input min={0} max={10} type={"number"} onChange={(e) => {handleChange(e.target.value,"velocity")}}></input>
    //     <input type={"number"} onChange={(e) => {handleChange(e.target.value,"cl")}}></input> */}
      <Plot
        data={[
          {
            x: WS,
            y: PW_Cruise,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy'
          },
          {
            x: WS,
            y: PWtakeoff,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
          },
          {
            x: WS,
            y: PW_roc,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
          },
          {
            x: WS,
            y: PW_Cruise,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
          },
          {
            x: WS,
            y: PW_turn,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
          },
          {
            x: WS_LDSL_array,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
          },
        ]}
        layout={ {width: '100%', height: '100%', title: 'Constraint Diagram'} }
      />
    </div>
  )
}

export default Graph_Cons