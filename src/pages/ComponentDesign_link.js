import {
  CombinationCon,
  FooterCon,
  FuselageCon,
  HeaderCon,
  TailCon,
  WingCon,
} from "./ComponentDesign/ComponentDesignCon";
import { NavbarCom, CmAlpha } from "./ComponentDesign/ComponentDesignComp";
import styles from "../styles/ComponentDesign/ComponentDesign.module.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const ComponentDesign = () => {
  //Wing Parameters State and their HandleChange

  const [wingParam, setWingParam] = useState({
    wingArea: "",
    wingType: "",
    wingSpan: "",
    wingTaper: "",
  });

  
  //CanvasPropsChange
  const [canvasProps, setCanvasProps] = useState({
    chordM: null,
    rootM: null,
    tipM: null,
  });
  const handleCanvasPropsChange = (props) => {
    setCanvasProps(props);
  };

  const handleWingParam = (name, value) => {
    setWingParam({ ...wingParam, [name]: value });
    Cookies.set(name, value, { expires: 1 / (24 * 60) });
  };
  
  //Tail Parameters, CanvasTailProps, and their HandleChanges
  
  const [tailParam, setTailParam] = useState({
    hTailArm: "",
    hTailSpan: "",
    vTailArm: "",
    vTailSpan: "",
  });
  
  const handleTailParam = (name, value) => {
    setTailParam({ ...tailParam, [name]: value });
    Cookies.set(name, value, { expires: 1 / (24 * 60) });
  };
  
  const [canvasHtailProps, setCanvasHtailProps] = useState({
    HtArea: null,
    hTailChord: null,
  });
  
  const handleHtailPropsChange = ({HtArea, hTailChord}) => {
    setCanvasHtailProps({HtArea, hTailChord});
  }
  const [canvasVtailProps, setCanvasVtailProps] = useState({
    VtArea: null,
    vTailChord: null,
  });
  const handleVtailPropsChange = ({VtArea, vTailChord}) => {
    setCanvasVtailProps({VtArea, vTailChord});
  }

  //Fuselage Parameters and Their HandleChanges
  const [fuseProps, setFuseProps] = useState({
    FuseL: null,
    FuseV: null,
  })

  const handleFuseChange = ({FuseL, FuseV}) => {
    setFuseProps({FuseL, FuseV});
  };

  const [cgInput, setCgInput] = useState("");
  const handleCGchange = (cgInput) => {
    setCgInput(cgInput);
  };
  
  const [airfoil, setAirfoil] = useState(null);
  const airfoilNumber = parseFloat(airfoil);

  useEffect(() => {
    //WingParam Storage
    const storedWingArea = Cookies.get("wingArea");
    if (storedWingArea) {
      setWingParam((prevState) => ({ ...prevState, wingArea: storedWingArea }));
    }
    const storedWingType = Cookies.get("wingType");
    if (storedWingType) {
      setWingParam((prevState) => ({ ...prevState, wingType: storedWingType }));
    }
    const storedWingSpan = Cookies.get("wingSpan");
    if (storedWingSpan) {
      setWingParam((prevState) => ({ ...prevState, wingSpan: storedWingSpan }));
    }
    const storedWingTaper = Cookies.get("wingTaper");
    if (storedWingTaper) {
      setWingParam((prevState) => ({...prevState,wingTaper: storedWingTaper}));
    }
    //TailParam Storage
    const storedhTailArm = Cookies.get("hTailArm");
    if (storedhTailArm) {
      setTailParam((prevState) => ({ ...prevState, hTailArm: storedhTailArm }));
    }
    const storedhTailSpan = Cookies.get("hTailSpan");
    if (storedhTailSpan) {
      setTailParam((prevState) => ({ ...prevState, hTailSpan: storedhTailSpan }));
    }
    const storedvTailArm = Cookies.get("vTailArm");
    if (storedvTailArm) {
      setTailParam((prevState) => ({ ...prevState, vTailArm: storedvTailArm }));
    }
    const storedvTailSpan = Cookies.get("vTailSpan");
    if (storedvTailSpan) {
      setTailParam((prevState) => ({...prevState,vTailSpan: storedvTailSpan}));
    }
  }, []);

  return (
    <div className={styles.App}>
      <NavbarCom />
      <HeaderCon />
      <div className="Wing">
        <WingCon
          {...wingParam}
          onWingParamChange={handleWingParam}
          canvasProps={canvasProps}
          onCanvasPropsChange={handleCanvasPropsChange}
          />
      </div>
      <div className="Tail">
        <TailCon
          wingArea={wingParam.wingArea}
          wingSpan={wingParam.wingSpan}
          {...tailParam}
          {...canvasHtailProps}
          {...canvasVtailProps}
          onTailParamChange={handleTailParam}
          onHtailPropsChange={handleHtailPropsChange}
          onVtailPropsChange={handleVtailPropsChange}
          chordM={canvasProps.chordM}
        />
      </div>
      <div className="cmAlpha">
        <CmAlpha
          wingArea={wingParam.wingArea}
          wingSpan={wingParam.wingSpan}
          airfoilProp={airfoilNumber}
          cgInput={cgInput}
          handleCGchange={handleCGchange}
          chordM={canvasProps.chordM}
        />
      </div>
      <div className="Fuselage">
        <FuselageCon
          tailArm={tailParam.hTailArm}
          chordM={canvasProps.chordM}
          hTailChord={canvasHtailProps.hTailChord}
          vTailArm={tailParam.vTailArm}
          onFuseChange={handleFuseChange}
        />
      </div>
      <div className="combination">
        <CombinationCon
          {...fuseProps}
          {...wingParam}
          {...canvasProps}
          {...tailParam}
          canvasPropsChange={handleCanvasPropsChange}
          hTailChord={canvasHtailProps.hTailChord}
          vTailChord={canvasVtailProps.vTailChord}
        />
      </div>
      <div className="Footer">
        <FooterCon />
      </div>
    </div>
  );
};

export default ComponentDesign;
