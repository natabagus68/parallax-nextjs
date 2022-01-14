import styles from './navbar.module.css';
import BrandLogo from '../../bahan/icons/Vector.png'
import Simbol from '../../bahan/icons/logo2.png'
import Image from 'next/image'
import Instagram from '../../bahan/icons/instagram.png'
import Memek from '../../bahan/icons/M.png'
import Be from '../../bahan/icons/be.png'

const Navbar = () => {
    
    const loadNavbar = () => {
      document.querySelector('nav').style.opacity = 1
      
    }

    return (
   <>
  <nav onLoad={loadNavbar} className={styles.navbar}>
     <div className={styles.navbarkiri}>
      <div className={styles.navbarlogo}>
        <a><Image src={BrandLogo} width="16" height="11.43"/></a>
      </div>
      <div className={styles.navbarlink}>
        <a className={styles.linksatu} href="#">Eport</a>
        <a className={styles.linkdua} href="#">Store</a>
      </div>
     </div>

      <div className={styles.navbartengah}>
        <div className={styles.simbol}>
         <Image  src={Simbol} width="52px" height="30px"/>
        </div>
      </div>

      <div className={styles.navbarkanan}>
             <div className={styles.linktiga}>
                 <a style={{marginLeft:'60px'}}><Image width="16px" height="16px" src={Instagram} /></a>
                 <a><Image width="16px" height="16px" src={Memek} /></a>
                 <a><Image width="16px" height="16px" src={Be} /></a>
             </div>
      </div>
  </nav>
   
   </>
    )
}

export default Navbar
