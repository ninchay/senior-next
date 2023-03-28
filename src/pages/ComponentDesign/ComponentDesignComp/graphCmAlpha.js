import React from 'react'
import Plot from 'react-plotly.js'

const graphCmAlpha = () => {

return (
<>
    <div>
        <select name="AirfoilType" id="AirfoilType" onchange={(e) => e.target.value}>
            <option value="" disabled selected>--Select Airfoil--</option>
            <option value="ClarkY">Clark-Y</option>
            <option value="NACA23015">NACA-23015</option>
            <option value="Eppler236">Eppler-236</option>
        </select>
    </div>

</>

)
}

export default graphCmAlpha
