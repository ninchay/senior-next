import styles from '../../../styles/ComponentDesign/ComponentDesignCon/headerCon.module.css'

const HeaderCom = () => {
  return (
    <div className={styles.Component__Header}>
        <div className={styles.Component__Header_title}>        
          <p>Component Design</p>
      </div>
      <div className={styles.Component__Header_Unit}>
        <select name="UnitSelection" id="UnitSelection" >
          <option value="" disabled selected>--Select Unit--</option>
          <option value="SI">SI</option>
          <option value="Imperial">Imperial</option>
        </select>
      </div>
    </div>
  )
}

export default HeaderCom