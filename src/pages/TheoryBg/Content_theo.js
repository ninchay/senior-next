import styles from "../../styles/TheoryBg/Content.module.css";
import { HiMinus, HiPlus } from "react-icons/Hi";
import { useState } from "react";
import { Equation } from "react-equation";

const renderEquation = (symbol, description) => {
  return (
    <div>
      <Equation value={symbol} /> = {description}
    </div>
  );
};

const Content_theo = ({
  title,
  subtitle,
  body,
  equation,
  equationFinal,
  variableList,
  body1,
  equationSub1,
  equationSub2,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
    
      <div className={styles.columnBox}>
        <div className={styles.box}>
          <>
            <div className={styles.wrap}>
              <div className={styles.title}>{title}</div>
              <div className={styles.toggle}>
                {selected ? (
                  <HiMinus
                    color="#000"
                    size={35}
                    onClick={() => setSelected(false)}
                  />
                ) : (
                  <HiPlus
                    color="#000"
                    size={35}
                    onClick={() => setSelected(true)}
                  />
                )}
              </div>
            </div>
            <div>
              {selected && (
                <div className={styles.body}>
                  <p> {subtitle}</p>
                  <p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "center",
                      }}
                    >
                      <Equation value={equation} />
                    </div>
                    <br />
                    {variableList.map((item) => {
                      return renderEquation(item.symbol, item.description);
                    })}
                    <br />
                    <div>{body}</div>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "center",
                      }}
                    >
                      <Equation value={equationSub1} />
                      <br />
                      <Equation value={equationSub2} />
                    </div>
                    <br />
                    <div style={{ marginBottom: 1, marginTop: 1 }}>{body1}</div>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyItems: "center",
                        alignItems: "center",
                      }}
                    >
                      <Equation value={equationFinal} />
                    </div>
                  </p>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Content_theo;
