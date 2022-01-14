import React, {useEffect, useState} from 'react'
import styles from './nepalmountain.module.css'
const NepalMountain = () => {
    const [gaya, setGaya] = useState()
    const [ scrl, setScrl] = useState('')
    const [scrollCheck, setScrollCheck] = useState(false)
    useEffect(() => {
        stylesid();
    },[])
    
    useEffect(() => {
        window.addEventListener('scroll', scrolly)

    }, [])

     const scrolly = () => {
         let nilai = window.scrollY;
         setGaya({transform:`translateY(${nilai*0.9}px)`, opacity:1})
         }

     
     

     const stylesid = () => {

             setGaya({ opacity:1, top:'250px' })
         
     }
     return (
         <>
        <div className={styles.mountain}>
            <div className={styles.pp} style={gaya} >
            <h1 className='text-white'>NEPAL MOUNTAINS</h1>
             <p className="text-white">Visit the most beautiful mountains in the world</p>
            </div>
             
        </div>
        </>
    )
}

export default NepalMountain
