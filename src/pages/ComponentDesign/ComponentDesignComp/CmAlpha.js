import {useState }from 'react'
import styles from '../../../styles/ComponentDesign/ComponentDesignComp/CmAlpha.module.css'  
import { Equation } from 'react-equation'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CmAlpha = (props) => {

    const [airfoil, setAirfoil] = useState("")
    const [airfoilTail, setAirfoilTail] = useState("")
    const [isStable, setIsStable] = useState("")
    const [isShown, setIsShown] = useState(true)

//calculation 
const e =0.85;
const aWing = Number(airfoil)/Number(1+(airfoil/(Math.PI*e*Number( Number(props.wingSpan**2)/props.wingArea )) ));
const aTail = Number(airfoilTail)/Number(1+(airfoilTail/(Math.PI*e*Number( Number(props.wingSpan**2)/props.wingArea )) ));
const cmAlpha = -(-0.7*aTail* (1-Number((2*aWing)/(Math.PI*Number( Number(props.wingSpan**2)/props.wingArea )))))
console.log("cmalpha",cmAlpha, "airfoil", airfoil, "awing", aWing,"atail", aTail)
return (
<>
<div className={styles.Wing}>
<div className={styles.Component__Wing_Airfoil}>
    <h2>Airfoil Selection for Wing</h2>
        <div className={styles.Airfoil__Selection}>
            <div className={styles.Airfoil__Header}>
                <h3>Airfoil Type</h3>
            </div>
        <select
            name="AirfoilType"
            onChange={(e) => {
            setAirfoil(parseFloat(e.target.value));
            }}
        >
            <option value="" disabled>
            --Select Airfoil--
            </option>
            <option value="0.1023">Clark-Y</option>
            <option value="0.1091">E193</option>
            <option value="0.1017">E374</option>
            <option value="0.1108">MH60</option>
            <option value="0.1038">NACA 23012</option>
            <option value="0.115">NACA 2412</option>
            <option value="0.1171">RG15</option>
            <option value="0.1215">S0737</option>
            <option value="0.1027">S3013 103-84</option>
            <option value="0.1149">Wortmann</option>
        </select>
        </div>
</div>
</div>

<div className={styles.Tail}>
<div className={styles.Component__Tail_Airfoil}>
    <h2>Airfoil Selection for Tail</h2>
        <div className={styles.Airfoil__Selection}>
            <div className={styles.Airfoil__Header}>
                <h3>Airfoil Type</h3>
            </div>
        <select
            name="AirfoilType"
            onChange={(e) => {
            setAirfoilTail(parseFloat(e.target.value));
            }}
        >
            <option value="" disabled>
            --Select Airfoil--
            </option>
            <option value="0.105">NACA 0005</option>
            <option value="0.1093">NACA 0007</option>
            <option value="0.1056">NACA 0010</option>
        </select>
        </div>
</div>
</div>

<div className={styles.cmAlphaBox}>
    <div className={styles.result}>
    {
        isShown ? cmAlpha < 0 ? 
            <div>
                <div className={styles.CheckCmAlpha}><CheckCircleIcon/></div> 
                <div className={styles.CheckinfoBox}>
                    <p>The value of Lift Curve Slope is {cmAlpha}</p>
                    <br />If the lift curve slop is negative (-), it is indicating that the aircraft is STABLE. The chosen values for wingspan, wing area, and airfoils for both wing and tail are suitable for achieving optimal aerodynamic performance.
                </div>
            </div> 

        :
        <div>
            <div className={styles.CancelCmAlpha}><CancelIcon/></div>
            <div className={styles.CancelinfoBox}>
            <p>The value of Lift Curve Slope is {cmAlpha}</p>
            <br />If the lift curve slop is positive (+), it is indicating that the aircraft is NOT STABLE. The chosen values for wingspan, wing area, and airfoils for both wing and tail may not be appropriate for achieving optimal aerodynamic performance. 
            <p/> Please try another value
            </div>
        </div>
        : null
    }
    </div>

<div className={styles.showAnswer}>
{
    isShown && cmAlpha < 0 && (
    <div className={styles.textShowAnswer}>hello bitches a0 = {cmAlpha}</div>
    )
}
</div>
</div>
</>
)
}

export default CmAlpha