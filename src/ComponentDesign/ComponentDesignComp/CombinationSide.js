import { React, useEffect, useRef } from "react";

const CombinationSide = (props) => {
  // Fuselage Initial Position Parameters
  const intX = 328.5 - Number(props.fuseL * 1.5);
  const intY = 317 - Number(props.fuseL * 0.09);

  //Wing Initial Position Parameters
  const intWingX = intX + Number(props.chordM * 1.5);
  const intWingY = intY - Number(props.fuseL * 0.06);

  //Horizontal Tail Initial Position Parameters
  const intHtailX =
    328.5 + Number(props.fuseL * 1.5) - Number(props.hTailChord * 300);
  const intHtailY = intY - Number(props.fuseL * 0.06);

  //Vertical Tail Initial Position Parameters
  const intVtailX =
    328.5 + Number(props.fuseV * 1.5) - Number(props.vTailChord * 300);
  const intVtailY = intY - Number(props.vTailSpan * 3);

  const combinationSideRef = useRef(null);

  useEffect(() => {
    const canvas = combinationSideRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    // construct Fuselage
    ctx.rect(intX, intY, props.fuseL * 3, props.fuseL * 0.18);
    ctx.fillStyle = "#F6623E";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 2;

    // RectangularWing

    // Start a new path
    ctx.beginPath();
    // Draw the rectangle with the new dimensions and position
    ctx.rect(intWingX, intWingY, props.chordM, props.fuseL * 0.06);

    //Gemometry Style
    ctx.fillStyle = "#FF8980";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 2;
    
    //Construct Vertical Tail

    // Start a new path
    ctx.beginPath();
    ctx.rect(intVtailX, intVtailY, props.vTailChord * 300, props.vTailSpan * 3);

    ctx.fillStyle = "#F6623E";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 2;

    //Construct Horizontal Tail

    // Start a new path
    ctx.beginPath();
    ctx.rect(intHtailX, intHtailY, props.hTailChord * 300, props.fuseL * 0.06);

    //Gemometry Style
    ctx.fillStyle = "#FF8980";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 2;

  }, [
    props.fuseL,
    props.fuseV,
    props.chordM,
    props.vTailSpan,
    ,
    props.taper,
    props.wingType,
    props.vTailChord,
  ]);
  return <canvas ref={combinationSideRef} height={634} width={657} />;
};

export default CombinationSide;
