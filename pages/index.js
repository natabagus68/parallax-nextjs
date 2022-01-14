import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Nepalmountain from '../components/nepalmountain/NepalMountain'
import Mountain from '../components/Mountain/Mountain'
import { useState, useEffect } from 'react'
import Players from '../components/player/Playerini'
export default function Home() {
  const [gaya, setGaya]  = useState()
  
  
  useEffect(() =>{
     loadCntainer();
  },[])


const loadCntainer = () => {
    setGaya({transform:'scale(1)', borderBottom:'1px solid white'})
  }




 
   
  return (
    <div className={styles.cover}>
    

      <Navbar />
    <div className={styles.container} style={gaya}>
    <div>
      <Nepalmountain />
    </div>
    </div>
      <Mountain />

    {/* footer */}
    <div className={styles.bawah}>

       <Players />
    
    </div>
    
    </div>
  )
}
