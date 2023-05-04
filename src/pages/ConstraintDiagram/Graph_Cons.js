import { ReportProblemSharp } from '@mui/icons-material';
import {Result_Cons} from '../../index'
import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic';

function Graph_Cons(props) {
  //dynamic 
  const Plot=dynamic(()=> import('react-plotly.js'),{ssr:false})
  //assign the variable
  const [WS, setWS] = useState(Array.from({ length: 5000 }, (_, i) => i/ 100 * 0.1));
  const [parameter, setParameter] = useState({
    rho0: 0.0023769, //slug/ft3
    Cl_max: 1.2,
    cd_clean: 0.0341,
    AR: 7.32,
    e: 0.85,
    T_SL: 15.04, //SL celcius
    R: 287.05 , //lb/   //287.05 J/kg * K
    P: 101325, //lb/ft2 //101.325 kN/m^2
    g:32.17, //ft/s2
  })
  const [intersection, setIntersection] = useState("");
  const { onRhoCruiseChange } = props;
  // const {handlePowerToWeight} = props;
  const unitMap={"weight":{"si":2.20462, "imperial":1},
                  "velocity":{"si":3.28084, "imperial":1},
                  "altitude":{"si":3.28084, "imperial":1},
                  "torw":{"si":3.28084, "imperial":1},
                  "roc":{"si":3.28084, "imperial":1}
}
//   console.log("weight",props.weight*unitMap["weight"][props.unit],
//   "velocity", props.velocity*unitMap["velocity"][props.unit],
// "torw", props.torw*unitMap["torw"][props.unit]
//   )
  // solve for density
  const T= parameter.T_SL - (1.98*((props.altitude*unitMap["altitude"][props.unit])/1000)); //celcius and ft
  const T_rho = T+273.15; //change to kelvin
  const altitude_rho = (props.altitude*unitMap["altitude"][props.unit])*0.3048; //convert from ft to m
  const P_rho=parameter.P*(1-(0.0065*altitude_rho/(T_rho)))**5.2561;
  const rhoCruise= (P_rho/(parameter.R*T_rho))*0.0019403203;

  useEffect(() => {
    onRhoCruiseChange(rhoCruise);
  }, [ onRhoCruiseChange, rhoCruise]);


  //////start constraint equation//////
  //takeoff
  const K = 1 / (Math.PI * parameter.e * parameter.AR); 
  const V_stall_to = WS.map((WS) =>
    Math.sqrt((2 * WS) / (rhoCruise * parameter.Cl_max))
  );
  const V_to = V_stall_to.map((v,i) => 1.2 * V_stall_to[i]);
  const PWtakeoff = WS.map(
    (WS, i) => (1.44 * WS * V_to[i] * (745.7 / 550)) / (parameter.g * rhoCruise * parameter.Cl_max *(props.torw*unitMap["torw"][props.unit]))
  );
  
  //landing
  const Va = Math.sqrt((props.torw*unitMap["torw"][props.unit]) / (0.3 * 0.6));
  const V_STALLL = (Va * 1.68781) / 1.3; //change from knot to ft/s
  const WS_LDSL = (V_STALLL**2 * rhoCruise * parameter.Cl_max) / 2;
  const WS_LDSL_array = WS.map(
    (WS) => WS_LDSL
  )



  //roc
  const CL_ROC = WS.map((WS) => WS / (0.5 * rhoCruise * (props.velocity*unitMap["velocity"][props.unit]) ** 2));
  const LD_ROC = CL_ROC.map((cl) => cl / (parameter.cd_clean + (K * cl**2)));
  const PW_roc =  LD_ROC.map((ld)=>(Number(props.roc*unitMap["roc"][props.unit]) + Number(((props.velocity*unitMap["velocity"][props.unit]) / ld)))*(745.7/550))
// (props.roc +(props.velocity / ld))*(745.7/550))
  //turn 
  const n = 1 / Math.cos(props.BAngle*Math.PI/180);
  const PW_turn = WS.map(
    (WS) =>
      (((0.5 * rhoCruise * (props.velocity*unitMap["velocity"][props.unit])**2 * parameter.cd_clean) / WS) + ( (n**2 * K * WS) /(0.5*rhoCruise* (props.velocity*unitMap["velocity"][props.unit])**2))) * (props.velocity*unitMap["velocity"][props.unit]) * 745.7 / 550);
//
  const PW_Cruise = WS.map(
    (WS) =>
    (((0.5 * rhoCruise * (props.velocity*unitMap["velocity"][props.unit])**2 * parameter.cd_clean) / WS) + ( (K * WS) /(0.5*rhoCruise* (props.velocity*unitMap["velocity"][props.unit])**2))) * (props.velocity*unitMap["velocity"][props.unit]) * 745.7 / 550);
console.log(WS_LDSL_array)

// function handleChange(value, key) {
//   setParameter(prevState => ({
//     ...prevState,
//     [key]: value
//   }))
// }

// const handleDataClick = (data) => {
//   if (data.points.length > 0) {
//     const point = data.points[0];
//     const pw = point.x;
//     const wl = point.y;
//     setPowerToWeight(pw.toFixed(2));
//     setWingLoading(wl.toFixed(2));
//     props.onDataClick(pw.toFixed(2), wl.toFixed(2));
//   }
// };

// const [powerToWeight, setPowerToWeight] = useState(null)
// const [wingLoading, setWingLoading] = useState(null)
// const handleDataClick = (event) => {
//   onclick(x,y);
//   const {x, y} = event.point;
//   console.log(`Clicked on (${x}, ${y})`);
//   setIntersection(`(${x}, ${y})`);
// }
// const [clickedPoint, setClickedPoint] = useState(null);

// const handlePlotClick = (event) => {
//   if (event.points.length > 0)4
//     const point = event.points[0];
//     const x = point.x.toFixed(2);
//     const y = point.y.toFixed(2);
//     const text = `Clicked point: (${x}, ${y})`;
//   }
// };
  return (
<>
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
            hoverinfo: 'all',
            hovertemplate: 'x: %{x}<br>y: %{y}',
            colorbar:'blue'
          },
          {
            x: WS,
            y: PWtakeoff,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'Takeoff',
            hoverinfo: 'all',
            hovertemplate: 'x: %{x}<br>y: %{y}',
          },
          {
            x: WS,
            y: PW_roc,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'ROC',
            hoverinfo: 'all',
            hovertemplate: 'x: %{x}<br>y: %{y}',
          },
          {
            x: WS,
            y: PW_turn,
            type: 'scatter',
            mode: 'lines',
            fill: 'tozeroy',
            name: 'Turn',
            hoverinfo: 'all',
            hovertemplate: 'x: %{x}<br>y: %{y}',
          },
          {
            x: WS_LDSL_array,
            type: 'line',
            fill: 'tonextx',
            name: 'Landing',
            hoverinfo: 'all',
            hovertemplate: 'x: %{x}<br>y: %{y}',
          },
        ]}

      layout={{
        showlegend: true,
        title:"Constraint Diagram",
        xaxis: {
          range: [0, 5],
          title: "Wing Loading",
        },
        yaxis: {
          range: [0, 150],
          title:"Power-to-Weight",
        },
        hoverinfo: 'all',
        hovertemplate: 'x: %{x}<br>y: %{y}',
      }
      }
      onClick={(data) => {
        if (data.points.length > 0) {
          const point = data.points[0];
          const PW1 = point.y
          const WS1 = point.x
          const PW = PW1.toFixed(3)
          const WS = WS1.toFixed(3)
          setIntersection(`(${point.x}, ${point.y})`);
          props.handlePWChange(PW)
          props.handleWSChange(WS)
          // console.log("here", point.x,point.y, PW)
        }
      }}
/>
    </div>
</>
  )
}
export default Graph_Cons