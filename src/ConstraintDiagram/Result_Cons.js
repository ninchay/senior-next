import { useState } from "react";
import styles from "../../styles/Constraint/Result_Cons.module.css";
import { Equation } from "react-equation";

const Result_Cons = (props) => {
  const unitMap = {
    powerW: { si: 2.20462, imperial: 1 },
    wingLoading: { si: 4.88243, imperial: 1 },
  };
  const pw1 = props.pwValue * unitMap["powerW"][props.unit];
  const ws1 = props.wSValue * unitMap["wingLoading"][props.unit];
  const powerReq1 =
    Number(props.pwValue * unitMap["powerW"][props.unit]) *
    Number(props.weight);
  const wingArea1 =
    props.weight / (props.wSValue * unitMap["wingLoading"][props.unit]);
  const clCruise1 =
    (2 / Number(props.rhoCruise * props.velocity ** 2)) *
    Number(props.wSValue * unitMap["wingLoading"][props.unit]);
  //round number
  const pw = pw1.toFixed(3);
  const ws = ws1.toFixed(3);
  const powerReq = powerReq1.toFixed(3);
  const wingArea = wingArea1.toFixed(3);
  const clCruise = clCruise1.toFixed(3);

  return (
    <div className={styles.result_summary}>
      <div className={styles.header_result}>
        <b>Result Summary</b>
      </div>

      <div className={styles.container_result}>
        <div className={styles.pwResult}>
          <span className={styles.word}>Power to Weight</span>
          <div className={styles.answer}>
            <div className={styles.power_weight}>{pw > 0 && pw}</div>
            <div className={styles.unit}>
              {props.unit === "imperial" ? (
                <Equation value="Watt/lbf" />
              ) : (
                <Equation value="Watt/kg" />
              )}
            </div>
          </div>
        </div>

        <div className={styles.wsResult}>
          <span className={styles.word}>Wing Loading </span>
          <div className={styles.answer}>
            <div className={styles.wingLoading}>{ws > 0 && ws}</div>
            <div className={styles.unit}>
              {props.unit === "imperial" ? (
                <Equation value="lbf/ft ^ 2" />
              ) : (
                <Equation value="kg/m ^ 2" />
              )}
            </div>
          </div>
        </div>

        <div className={styles.powerReqResult}>
          <span className={styles.word}>Power Required</span>
          <div className={styles.answer}>
            <div className={styles.powerReq}>{powerReq > 0 && powerReq}</div>
            <div className={styles.unit}>Watt</div>
          </div>
        </div>

        <div className={styles.wingAreaResult}>
          <span className={styles.word}>Wing Area</span>
          <div className={styles.answer}>
            <div className={styles.wingArea}>
              {wingArea > 0 && wingArea != Infinity && wingArea}
            </div>
            <div className={styles.unit}>
              {props.unit === "imperial" ? (
                <Equation value="ft ^ 2" />
              ) : (
                <Equation value="m ^ 2" />
              )}
            </div>
          </div>
        </div>

        <div className={styles.clCruiseaResult}>
          <span className={styles.word}>CL for Cruise</span>
          <div className={styles.answer}>
            <div className={styles.clCruise}>{clCruise > 0 && clCruise}</div>
            <div className={styles.unit}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result_Cons;
