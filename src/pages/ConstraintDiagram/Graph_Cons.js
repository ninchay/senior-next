import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import '../../styles/Constraint/Graph_Cons.module.css'

function Graph_Cons() {
  const [WS, setWS] = useState(Array.from({ length: 121 }, (_, i) => i));
  const [V, setVelocity] = useState(150)
  const [parameter, setparameter] = useState({
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
  })

  //start constraint equation
  const rho_cruise = setparameter.rho0 * 1;
  const K = 1 / (Math.PI * setparameter.e * setparameter.AR);
  const V_stall_to = WS.map((WS) =>
    Math.sqrt((2 * setWS.WS) / (setparameter.rho0 * setparameter.Cl_max_to))
  );
  const V_to = V_stall_to.map((v) => 1.2 * setVelocity.V);
  const PWtakeoff = WS.map(
    (WS, i) => (1.44 * setWS.WS * V_to[i] * (745.7 / 550)) / (32.17 * setparameter.rho0 * setparameter.Cl_max_to * setparameter.S_to)
  );

  const Va = Math.sqrt(setparameter.S_L / (0.3 * 0.6));
  const V_STALLL = (Va * 1.68781) / 1.3;
  const WS_LDSL = (V_STALLL**2 * setparameter.rho0 * setparameter.Cl_max_l) / 2;

  const CL_ROC = WS.map((ws) => setWS.WS / (0.5 * rho_cruise * setVelocity.V ** 2));
  const LD_ROC = CL_ROC.map((cl) => cl / (setparameter.cd_clean + K * cl  **2));
  const PW_roc = LD_ROC.map((ld) => setparameter.roc + (setVelocity.V / ld));

  const B_Angle = 30; //deg
  const n = 1 / Math.cos((B_Angle * Math.PI) / 180);
  const PW_turn = WS.map(
    (ws) =>
      ((0.5 * rho_cruise * V**2 * setparameter.cd_clean) / setWS.WS +
        K * ((n**2 * setWS.WS) / (0.5 * rho_cruise * setVelocity.V**2))) *
      (setVelocity.V * 745.7) / 550
  );

const PW_Cruise = WS.map(
    (ws) =>
      ((0.5 * rho_cruise * V**2 * setparameter.cd_clean) / setWS.WS +
        (K * setWS.WS) / (0.5 * rho_cruise * V**2)) *
      (V * 745.7) / 550
  );

console.log(WS_LDSL)

const WS_LDSL_array = WS.map(
  (WS) => WS_LDSL
)

function handleChange(value, key) {
  setparameter(prevState => ({
    ...prevState,
    [key]: value
  }))
  console.log(parameter)
}

  return (
    <div className="Graph">
      <header className="Graph-header">
        <input min={0} max={10} type={"number"} onChange={(e) => {handleChange(e.target.value,"velocity")}}></input>
        <input type={"number"} onChange={(e) => {handleChange(e.target.value,"cl")}}></input>
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
        layout={ {width: '100%', height: '100%', title: 'Fancy Plot'} }
      />
      </header>
    </div>
  )
}

export default Graph_Cons