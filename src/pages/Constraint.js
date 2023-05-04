import {
  Input_Cons,
  Navbar_Cons,
  Result_Cons,
  Graph_Cons,
  Header_Cons,
  Note,
} from "../index";
import { FooterHome } from "../index";
import styles from "../styles/Constraint/Constraint.module.css";
import React, { useState, useEffect } from "react";

const Constraint = () => {
  const [weight, setWeight] = useState("");
  const [velocity, setVelocity] = useState("");
  const [altitude, setAltitude] = useState("");
  const [roc, setROC] = useState("");
  const [torw, setTORW] = useState("");
  const [BAngle, setBAngle] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [wSValue, setWsValue] = useState("");
  const [rhoCruise, setRhoCruise] = useState("");

  const handlePWChange = (PW) => {
    setPwValue(PW);
  };
  const handleWSChange = (WS) => {
    setWsValue(WS);
  };
  const handleRhoCruiseChange = (rhoCruise) => {
    setRhoCruise(rhoCruise);
  };

  const [unit, setUnit] = useState("imperial");
  function handleUnitChange(event) {
    setUnit(event.target.value)
  }

  return (
    <>
      <div className={styles.app}>
        <div className={styles.Navbar}>
          <Navbar_Cons />
        </div>
        <div
          style={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header_Cons header_title="Constraint Diagram" />
          <Input_Cons
            unit={unit}
            handleUnitChange={handleUnitChange}
            weight={weight}
            handleWeightChange={(weight) => {
              setWeight(weight);
            }}

            handleVelocityChange={(velocity) => {
              setVelocity(velocity);
            }}
            handleAltitudeChange={(altitude) => {
              setAltitude(altitude);
            }}
            handleROCChange={(roc) => {
              setROC(roc);
            }}
            handleTORWChange={(torw) => {
              setTORW(torw);
            }}
            handleBAngleChange={(BAngle) => {
              setBAngle(BAngle);
            }}
          />
          <Graph_Cons
            unit={unit}
            weight={weight}
            velocity={velocity}
            altitude={altitude}
            roc={roc}
            torw={torw}
            BAngle={BAngle}
            pwValue={pwValue}
            handlePWChange={handlePWChange}
            handleWSChange={handleWSChange}
            wSValue={wSValue}
            onRhoCruiseChange={handleRhoCruiseChange}
            rhoCruise={rhoCruise}
          />
          <Result_Cons
            unit={unit}
            pwValue={pwValue}
            wSValue={wSValue}
            weight={weight}
            velocity={velocity}
            rhoCruise={rhoCruise}
          />
          <Note/>
          <FooterHome />
        </div>
      </div>
    </>
  );
};

export default Constraint;
