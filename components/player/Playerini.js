import React, {useState, useEffect} from 'react'
import styles from './player.module.css'
import Gambar from '../../bahan/gambar/Player.png'
import Image from 'next/image'
const Playerini = () => {
     const [gaya, setGaya]  = useState()
     const [gaya2, setGaya2]  = useState()
     
     
     useEffect(() => {
        window.addEventListener('scroll', (function() {
          let nilai = window.pageYOffset;
           
          if(nilai == 350 ){
              setGaya({opacity:1, transform: 'translateY(13px)'})
              setGaya2({opacity:1, transform: 'translateY(-13px)', transform:'scale(1)'})

          }else{
              setGaya({opacity:0})
              setGaya2({opacity:0})
          }


        }))
      },[])

    
    return (
        <div className={styles.container}>
            <div className={styles.everes}>
                <h1  style={gaya}>EVEREST</h1>
            </div>
            <div className={styles.bungkusplayer} style={gaya2}>
                <Image src={Gambar} />
            </div>
        </div>
    )
}

export default Playerini
