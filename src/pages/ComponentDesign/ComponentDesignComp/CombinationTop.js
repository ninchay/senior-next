import {React,useRef,useEffect} from 'react'

const CombinationTop = (props) => {

  // Fuselage Initial Position Parameters
  const intX = 328.5 - Number(props.fuseL*0.09);
  const intY = 317 - Number(props.fuseL*1.5);

  //Rectangular Wing Initial Position Parameters
  const intWingX = 328.5 - Number(props.wingSpan*1.5);
  const intWingY = intY + Number(props.chordM*1.5);

  //Tapered Wing Initail Position PAramters
  const intTaperY = intY + Number(props.chordM*2);

  //Horizontal Tail Initial Position Paramters
  const intHtailX = 328.5 - Number(props.hTailSpan*1.5);
  const intHtailY = 317 + Number(props.fuseL*3/2) - Number(props.hTailChord*100*3/2);
  
  // console.log(props.hTailSpan*3, props.hTailChord*300,intHtailY)

  const combinationTopRef = useRef(null);

  useEffect(() => {
      const canvas = combinationTopRef.current;
      const ctx = canvas.getContext("2d");

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      // construct Fuselage
      ctx.rect(intX, intY, props.fuseL*0.18, props.fuseL*3)
      ctx.fillStyle = "#F6623E";
      ctx.fill();
      ctx.stroke();
      ctx.lineWidth = 2;

      //Construct Wing
      if (props.wingType === "Taper") {
        // TaperedWing
  
        // Draw the Taper with the new dimensions and position
        ctx.beginPath();
  
        //1/4 wing area top right
        ctx.moveTo(328.5, intTaperY - props.rootM / 2);
        ctx.lineTo(328.5 + (props.wingSpan* 3) / 2, intTaperY - props.tipM / 2);
        ctx.lineTo(328.5 + (props.wingSpan* 3) / 2, intTaperY);
  
        //1/4 wing area buttom right
        ctx.lineTo(328.5 + (props.wingSpan* 3) / 2, intTaperY);
        ctx.lineTo(328.5 + (props.wingSpan* 3) / 2, intTaperY + props.tipM / 2);
        ctx.lineTo(328.5, intTaperY + props.rootM / 2);
  
        //1/4 wing area top Left
        ctx.moveTo(328.5, intTaperY - props.rootM / 2);
        ctx.lineTo(328.5 - (props.wingSpan* 3) / 2, intTaperY - props.tipM / 2);
  
        //1/4 wing area buttom left
        ctx.lineTo(328.5 - (props.wingSpan* 3) / 2, intTaperY);
        ctx.lineTo(328.5 - (props.wingSpan* 3) / 2, intTaperY + props.tipM / 2);
        ctx.lineTo(328.5, intTaperY + props.rootM / 2);
  
        //Gemometry Style
        ctx.fillStyle = "#FF8980";
        ctx.fill();
        ctx.stroke();
        ctx.lineWidth = 1.5;
        
      } else if (props.wingType === "Rectangular") {
      // RectangularWing

      // Start a new path
      ctx.beginPath();
      // Draw the rectangle with the new dimensions and position
      ctx.rect(intWingX, intWingY, props.wingSpan*3, props.chordM);

      //Gemometry Style
      ctx.fillStyle = "#FF8980";
      ctx.fill();
      ctx.stroke();
      ctx.lineWidth = 2;
      }

      //Construct Horizontal Tail 

      // Start a new path
      ctx.beginPath();
      ctx.rect(intHtailX, intHtailY, props.hTailSpan*3, props.hTailChord*300);

      //Gemometry Style
      ctx.fillStyle = "#FF8980";
      ctx.fill();
      ctx.stroke();
      ctx.lineWidth = 2;

      console.log(props.chordM, props.rootM)

  },[props.fuseL,props.wingSpan, props.hTailSpan,,props.taper,props.wingType]);





  return (
    <canvas ref={combinationTopRef} height={634} width={657} />
  )
}

export default CombinationTop