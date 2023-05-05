import React from 'react'
import { Equation} from 'react-equation'

const Constraint_theo = ({takeoffBody}) => {
return (
    <>
    <div> {takeoffBody} =

        <p>The originate equation is from (AIAA Book) eq. 5.56</p>
        <Equation>S_TO = (1.44W_TO^2)/ (ρSC_L_max gT)</Equation>
        <Equation>S_TO</Equation> = takeoff length
    </div>

    <div>

        
    </div>
    </>
)
}

export default Constraint_theo