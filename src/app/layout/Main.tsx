"use client"
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap';
import { useState, useEffect } from 'react'
import React from 'react'
import { useInView } from "react-intersection-observer";
function Main() {
  const { ref, inView } = useInView();
  const [show, setShow] = useState(false)
  const [scrollY, setScrollY] = useState<number>(0)
  const [showText, setShowText] = useState<boolean>(false)


  useEffect(() => {

    const ScrollPosition = () => {
      const currentPosition = window.scrollY;
      setScrollY(currentPosition);
    }
    window.addEventListener('scroll', ScrollPosition)
    return () => {
      window.addEventListener('scroll', ScrollPosition)
    }
  }, [])
  console.log(scrollY)
  setTimeout(() => {
    setShow(true)
  }, 2500)

  useEffect(() => {
    const ShowText = () => {
      gsap.to('.btu', 1.5, {
        x: "60%",
        duration: 3
      });
    };

    const HideText = () => {
      gsap.to('.btu', 1.5, {
        x: "0px",
        duration: 10
      });
    };

    if (scrollY > 0) {
      ShowText();
    } else {
      // Cancel any existing tweens before creating a new one
      gsap.killTweensOf('.btu');
      HideText();
    }
  }, [scrollY])

  return (
    <div className=' sm:sticky top-0 bg-illu_001 bg-cover bg-no-repeat h-screen w-full overflow-x-hidden'>
      <div className=' h-screen w-full flex flex-col md:flex-row items-center sm:justify-center relative overflow-hidden'>

        <img src='/assets/Illus001/BTU_Website_Illus001_LogoBG.png' className='btu top-20 relative sm:absolute w-[60vw]' />
        <div className={`w-[400px] lg:w-[700px] sm:absolute left-[2%] tracking-widest flex flex-col space-y-2 px-5 relative top-20 sm:top-40`}>
          <AnimatePresence>
            {
              scrollY > 0 && (
                <>
                  <motion.p
                    key="paragraph1"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='font-bold text-violet-500 md:text-2xl lg:text-[25px]'>
                    Beat Them Up is renewing the entertainment industry by creating the first VISUAL, MUSICAL & Social 360 IP!
                  </motion.p>
                  <motion.p
                    key="paragraph2"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className='md:text-xl lg:text-[20px]'
                  >
                    BTU is a shonen anime about music but foremost, a story about art and creativity…
                  </motion.p>
                  <motion.p
                    key="paragraph3s"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='md:text-xl lg:text-[20px]'
                  >
                    So, put a vinyl on your turntable, connect your headphones, turn on the volume and push the Play button…
                  </motion.p>

                </>
              )
            }
          </AnimatePresence>

        </div>


      </div>
    </div >
  )
}

export default Main