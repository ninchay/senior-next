import React, { useEffect, useRef } from "react";

const CanvasTail = (props) => {
  //Tail Parameters Callback Function
  const { onChange } = props;

  //Global Tail Area Parameters
  const momentArm = props.tailArm * 0.01;
  const wingArea = props.wingArea;
  //Canvas
  const tailSpanM = props.tailSpan * 4;
  const tailSpanMPos = 0.5 * tailSpanM;
  const newPosY = 379 / 2 - tailSpanMPos;

  //Horizaontal Tail Area Parameters
  const hCoeff = 0.7;
  const MAC = (props.MAC * 0.01) / 3;
  // Area
  const HtArea = ((hCoeff * MAC * wingArea) / momentArm)
  //Chord
  const hTailChord = HtArea / (props.tailSpan * 0.01)
  //Canvas
  const hTailChordMPos = 0.5 * hTailChord * 4 * 100;

  //Vertical Tail Area Parameters
  const vCoeff = 0.04;
  const span = props.wingSpan * 0.01;
  // Area
  const VtArea =((vCoeff * span * wingArea) / momentArm)
  //Chord
  const vTailChord = VtArea / (props.tailSpan * 0.01)
  //Canvas
  const vTailChordMPos = 0.5 * vTailChord * 4 * 100;

  // console.log(props.tailSpan, props.tailArm, props.tailType);

  useEffect(() => {
    onChange({ HtArea, hTailChord});
  }, [HtArea, hTailChord]);

  useEffect(() => {
    onChange({ VtArea, vTailChord });
  }, [VtArea, vTailChord]);

  //Tail Parameters for Canvas
  // const newPosX =
  //   props.tailType == "Horizontal"
  //     ? 285 / 2 - Number(hTailChordMPos)
  //     : 285 / 2 - Number(vTailChordMPos);
      
  // // Access getContext
  const canvasTailRef = useRef(null);

  useEffect(() => {
    const canvasTail = canvasTailRef.current;
    const ctx = canvasTail.getContext("2d");

    // Start a new path
    let newPosX
    ctx.clearRect(0, 0, canvasTail.width, canvasTail.height);
    ctx.beginPath();
    // Draw the rectangle with the new dimensions and position
    if (props.tailType == "Horizontal") {
      newPosX = 285 / 2 - Number(hTailChordMPos);
      ctx.rect(newPosX, newPosY, hTailChordMPos * 2, tailSpanM);
    } else {
      newPosX = 285 / 2 - Number(vTailChordMPos);
      ctx.rect(newPosX, newPosY, vTailChordMPos * 2, tailSpanM);
    }

    //Gemometry Style
    ctx.fillStyle = "#F6623E";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 2;
  }, [props.tailSpan, props.tailArm, HtArea]);

  return <canvas ref={canvasTailRef} height={379} width={285} />;
};

export default CanvasTail;
