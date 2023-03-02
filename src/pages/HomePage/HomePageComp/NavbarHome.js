import styles from  '../../../styles/HomePage/HomePageComp/navbarHome.module.css' ;

const Menu = () => (
  <>
  <p><a href='#Home'>Home</a></p>
  <p><a href='#FAQs'>FAQ's</a></p>
  <p><a href='#Contact'>Contact</a></p>
  </>  
)

const NavbarHome = () => {
  return (
    <div className={styles.home__navbar}>
      <div className={styles.Top_header}>
        <div className={styles.Top_comp}>
          <img src="/united.png" alt='Language-flag'/>
          <p>select language</p>
        </div>
      </div>
      <div className={styles.home__navbar_links_container}>
        <Menu />
      </div>
    </div>
  )
}

export default NavbarHome