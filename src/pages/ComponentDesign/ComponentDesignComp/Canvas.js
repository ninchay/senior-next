import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const {canvasPropsChange} = props
  //Parameters
  const aspectRatio = 6;
  const wingSpanM = props.wingSpan * 3;
  const chordM = wingSpanM / aspectRatio;
  const wingSpanM_Pos = 0.5 * wingSpanM;
  const chordM_Pos = 0.5 * chordM;
  const newPosX = 317.2 - wingSpanM_Pos;
  const newPosY = 263.32 - chordM_Pos;
  const Mac_chordM = wingSpanM / aspectRatio;
  const rootM = (2 * Mac_chordM) / (1 + Number(props.taper));
  const tipM = rootM * (props.taper);
  // console.log(taper)

  useEffect(() => {
    canvasPropsChange({ chordM, rootM, tipM });
  }, [chordM, rootM, tipM]);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (props.wingType === "Taper") {
      // TaperedWing

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the Taper with the new dimensions and position
      ctx.beginPath();

      //1/4 wing area top right
      ctx.moveTo(317.2, 263.22 - rootM / 2);
      ctx.lineTo(317.2 + wingSpanM / 2, 263.22 - tipM / 2);
      ctx.lineTo(317.2 + wingSpanM / 2, 263.22);

      //1/4 wing area buttom right
      ctx.lineTo(317.2 + wingSpanM / 2, 263.22);
      ctx.lineTo(317.2 + wingSpanM / 2, 263.22 + tipM / 2);
      ctx.lineTo(317.2, 263.22 + rootM / 2);

      //1/4 wing area top Left
      ctx.moveTo(317.2, 263.22 - rootM / 2);
      ctx.lineTo(317.2 - wingSpanM / 2, 263.22 - tipM / 2);

      //1/4 wing area buttom left
      ctx.lineTo(317.2 - wingSpanM / 2, 263.22);
      ctx.lineTo(317.2 - wingSpanM / 2, 263.22 + tipM / 2);
      ctx.lineTo(317.2, 263.22 + rootM / 2);

      //Gemometry Style
      ctx.fillStyle = "#F6623E";
      ctx.fill();
      ctx.stroke();
      ctx.lineWidth = 1.5;

    } else if (props.wingType === "Rectangular") {
      // RectangularWing

      // Start a new path
      ctx.beginPath();
      // Draw the rectangle with the new dimensions and position
      ctx.rect(newPosX, newPosY, wingSpanM, chordM);

      //Gemometry Style
      ctx.fillStyle = "#F6623E";
      ctx.fill();
      ctx.stroke();
      ctx.lineWidth = 2;
    }
  }, [props.wingSpan, props.taper, props.wingType]);

  return <canvas ref={canvasRef} height={526.64} width={634.4} />;
};

export default Canvas;
