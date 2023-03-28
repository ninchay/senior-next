import React, { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';

function Graph_Cons(props) {
  //assign the variable
  const [WS, setWS] = useState(Array.from({ length: 5000 }, (_, i) => i/ 100 * 0.1));
  const [parameter, setParameter] = useState({
    rho0: 0.0023769, //slug/ft3
    Cl_max: 1.2,
    Cl_max_to: 2.35,
    Cl_max_l: 3.1,
    cd_clean: 0.0341,
    AR: 7.32,
    e: 0.85,
    T_SL: 15.04, //SL celcius
    R: 287.05 , //lb/   //287.05 J/kg * K
    P: 101325, //lb/ft2 //101.325 kN/m^2
    g:32.17, //ft/s2
  })
  // solve for density
  const T= parameter.T_SL - (1.98*(props.altitude/1000)); //celcius and ft
  const T_rho = T+273.15; //change to kelvin
  const altitude_rho = props.altitude*0.3048; //convert from ft to m
  const P_rho=parameter.P*(1-(0.0065*altitude_rho/T_rho))**5.2561;
  const rho_cruise= (P_rho/(parameter.R*T_rho))*0.0019403203;

  //////start constraint equation//////
  //takeoff
  const K = 1 / (Math.PI * parameter.e * parameter.AR); 
  const V_stall_to = WS.map((WS) =>
    Math.sqrt((2 * WS) / (rho_cruise * parameter.Cl_max))
  );
  const V_to = V_stall_to.map((v,i) => 1.2 * V_stall_to[i]);
  const PWtakeoff = WS.map(
    (WS, i) => (1.44 * WS * V_to[i] * (745.7 / 550)) / (parameter.g * rho_cruise * parameter.Cl_max * props.torw)
  );
  
  //landing
  const Va = Math.sqrt(props.torw / (0.3 * 0.6));
  const V_STALLL = (Va * 1.68781) / 1.3; //change from knot to ft/s
  const WS_LDSL = (V_STALLL**2 * rho_cruise * parameter.Cl_max) / 2;
  const WS_LDSL_array = WS.map(
    (WS) => WS_LDSL
  )

  //roc
  const CL_ROC = WS.map((WS) => WS / (0.5 * rho_cruise * props.velocity ** 2));
  const LD_ROC = CL_ROC.map((cl) => cl / (parameter.cd_clean + (K * cl**2)));
  const PW_roc = LD_ROC.map((ld) => (props.roc + (props.velocity / ld))*(745.7/550))

  //turn 
  const n = 1 / Math.cos(props.BAngle*Math.PI/180);
  const PW_turn = WS.map(
    (WS) =>
      (((0.5 * rho_cruise * props.velocity**2 * parameter.cd_clean) / WS) + ( (n**2 * K * WS) /(0.5*rho_cruise* props.velocity**2))) * props.velocity * 745.7 / 550);

//
  const PW_Cruise = WS.map(
    (WS) =>
    (((0.5 * rho_cruise * props.velocity**2 * parameter.cd_clean) / WS) + ( (K * WS) /(0.5*rho_cruise* props.velocity**2))) * props.velocity * 745.7 / 550);

function handleChange(value, key) {
  setParameter(prevState => ({
    ...prevState,
    [key]: value
  }))
}

  return (
    <div className="Graph">
      <Plot
        data={[
          {
            x: WS, 
            y: PW_Cruise,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'Cruise',
          },
          {
            x: WS,
            y: PWtakeoff,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'Takeoff',          
          },
          {
            x: WS,
            y: PW_roc,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'ROC',
          },
          {
            x: WS,
            y: PW_turn,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'Turn',
          },
          {
            x: WS_LDSL_array,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'Landing',
          },
        ]}

      layout={{
        showlegend: true,
        xaxis: {range: [0, 5]},
        yaxis: {range: [0, 150]},
        hovermode: 'closet',
        clickmode: 'event+select'
      }
      }
      onClick={(data) => {
        if (data.points.length > 0) {
          const point = data.points[0];
          console.log("HERE",point.x, point.y)
          //setIntersection(`(${point.x}, ${point.y})`);
        }
      }}

/>
    </div>
  )
}

export default Graph_Cons