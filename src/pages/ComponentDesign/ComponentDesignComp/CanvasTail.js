import React, { useEffect, useRef } from "react";

const CanvasTail = (props) => {
    const tailSpanM = props.tailSpan*4;
    const newPosX = 285-tailSpanM;
    // const newPosY = 379-tailChordM;
    // console.log(tailspanM)
    // Access getContext
    const canvasTailRef = useRef(null)
    
    useEffect(() => {
        const canvasTail = canvasTailRef.current;
        const ctx = canvasTail.getContext("2d")

      // Tail

      // Start a new path
      ctx.beginPath();
      // Draw the rectangle with the new dimensions and position
    //   ctx.rect(newPosX, newPosY, wingSpanM, chordM);

      //Gemometry Style
      ctx.fillStyle = "#F6623E";
      ctx.fill();
      ctx.stroke();
      ctx.lineWidth = 2;
    }, []);



  return (
    <canvas ref={canvasTailRef} height={379} width={285}/>
  )
}

export default CanvasTail