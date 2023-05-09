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
import Cookies from "js-cookie";

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

  useEffect(() => {

    const storedWeight = Cookies.get("weight");
    if (storedWeight) {
      setWeight(storedWeight);
    }
    const storedVelocity = Cookies.get("velocity");
    if (storedVelocity) {
      setVelocity(storedVelocity);
    }
    const storedAltitude = Cookies.get("altitude");
    if (storedAltitude) {
      setAltitude(storedAltitude);
    }
    const storedROC = Cookies.get("roc");
    if (storedROC) {
      setROC(storedROC);
    }
    const storedTORW = Cookies.get("torw");
    if (storedTORW) {
      setTORW(storedTORW);
    }
    const storedBAngle= Cookies.get("BAngle");
    if (storedBAngle) {
      setBAngle(storedBAngle);
    }
  }, []);

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
              Cookies.set("weight", weight, { expires: 1 / (24 * 60) });
            }}

            handleVelocityChange={(velocity) => {
              setVelocity(velocity);
              Cookies.set("velocity", velocity, { expires: 1 / (24 * 60) });
            }}
            handleAltitudeChange={(altitude) => {
              setAltitude(altitude);
              Cookies.set("altitude", altitude, { expires: 1 / (24 * 60) });
            }}
            handleROCChange={(roc) => {
              setROC(roc);
              Cookies.set("roc", roc, { expires: 1 / (24 * 60) });
            }}
            handleTORWChange={(torw) => {
              setTORW(torw);
              Cookies.set("torw", torw, { expires: 1 / (24 * 60) });
            }}
            handleBAngleChange={(BAngle) => {
              setBAngle(BAngle);
              Cookies.set("BAngle", BAngle, { expires: 1 / (24 * 60) });
            }}
            velocity={velocity}
            altitude={altitude}
            roc={roc}
            torw={torw}
            BAngle={BAngle}
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
