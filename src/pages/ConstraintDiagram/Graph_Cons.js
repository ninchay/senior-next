import React, { useState } from 'react';
import './Graph_Cons.css';
import Plot from 'react-plotly.js';


function parameters() {
  const [parameter, setparameter] = useState({
    rho0: "0.0023769", //slug/ft3
    Cl_max: "1.35",
    Cl_max_to: "2.35",
    Cl_max_l: "3.1",
    cd_clean: "0.025",
    AR: "8.8",
    e: "0.7",
  });


function AircraftDiagram() {
  const [WS, setWS] = useState(Array.from({ length: 121 }, (_, i) => i));
  const rho_cruise = 0.786 * rho0; 
  const S_to = 1293; //input
  const S_L = 1145; //input
  const roc = 16.67; //input
  const V = 145 * 1.68781; //Velocity steady climb //input
  const K = 1 / (Math.PI * e * parameters.AR);

  //begin constaint
  const V_stall_to = WS.map((ws) =>
    Math.sqrt((2 * ws) / (parameter.rho0 * parameter.Cl_max_to))
  );
  const V_to = V_stall_to.map((v) => 1.2 * V);
  const PWtakeoff = WS.map(
    (ws, i) => (1.44 * ws * V_to[i] * (745.7 / 550)) / (32.17 * parameter.rho0 * parameter.Cl_max_to * S_to)
  );

  const Va = Math.sqrt(S_L / (0.3 * 0.6));
  const V_STALLL = (Va * 1.68781) / 1.3;
  const WS_LDSL = (V_STALLL ** 2 * rho0 * parameter.Cl_max_l) / 2;

  const CL_ROC = WS.map((ws) => ws / (0.5 * rho_cruise * V ** 2));
  const LD_ROC = CL_ROC.map((cl) => cl / (parameter.cd_clean + K * cl ** 2));
  const PW_roc = LD_ROC.map((ld) => roc + (parameter.V / ld));

  const B_Angle = 30; //deg
  const n = 1 / Math.cos((B_Angle * Math.PI) / 180);
  const PW_turn = WS.map(
    (ws) =>
      ((0.5 * rho_cruise * V ** 2 * parameter.cd_clean) / ws +
        K * ((n ** 2 * ws) / (0.5 * rho_cruise * V ** 2))) *
      (V * 745.7) / 550
  );

const PW_Cruise = WS.map(
    (ws) =>
      ((0.5 * rho_cruise * V ** 2 * parameter.cd_clean) / ws +
        (K * ws) / (0.5 * rho_cruise * V ** 2)) *
      (V * 745.7) / 550
  );

  const WS_LDSL_array = WS.map(
    (ws) => WS_LDSL
  )
  
