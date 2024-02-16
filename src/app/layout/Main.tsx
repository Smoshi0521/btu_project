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
      gsap.to('.btu', {
        x: "0px",
        duration: 1.5
      });
    };

    if (scrollY > 0) {
      ShowText();
    } else if (scrollY < 40) {
      // Cancel any existing tweens before creating a new one
      gsap.killTweensOf('.btu');
      HideText();
    }
  }, [scrollY])

  return (
    <div className='md:sticky top-0 bg-illu_001 bg-cover bg-no-repeat h-screen md:h-[100vw] w-full overflow-y-hidden'>

      <div className='h-screen w-full flex flex-col md:flex-row items-center justify-center px-5 overflow-y-hidden'>

        {/* BTU CHARACTERS */}
        <div className='relative w-full flex border-red-500  sm:justify-center md:justify-end h-screen lg:pr-[50px]'>
          <img src='/assets/Illus001/Illu01CH.png' className='z-30 min-w-[300px] xs:left-auto sm:w-[500px] lg:w-[600px] xl:w-[700px] bottom-0 absolute' />
          {/* <img src='/assets/Illus001/BTU_Website_Illus001_Yosuke.png' className='z-30 w-[100vw] min-w-[600px] max-w-[900px] absolute' />
          <img src='/assets/Illus001/BTU_Website_Illus001_Chop.png' className='z-30 w-[100vw] min-w-[600px] max-w-[900px] absolute' /> */}
        </div>

        <div className='h-screen w-full absolute overflow-y-hidden'>
          <img src='/assets/Illus001/Illu01floor.png' className='absolute bottom-0 w-full h-[12vh] opacity-65' />
        </div>

        {/* BTU BACKGROUND */}
        <img src='/assets/Illus001/LOGOBG.png' className={` hidden md:block btu top-20 sm:top-none absolute lg:w-[80%]`} />
        <img src='/assets/Illus001/LOGOBG.png' className={` absolute top-32 xs:top-20 sm:top-none md:hidden w-[100vw]`} />
        <div className='w-full absolute h-screen flex items-center'>
          <div className={`hidden md:w-[500px] lg:w-[600px] xl:w-[800px] md:absolute left-[2%] tracking-widest md:flex flex-col space-y-5 px-5 relative`}>
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
                      className='font-bold text-white md:text-2xl xl:text-[30px]'>
                      Beat Them Up is renewing the entertainment industry by creating the first VISUAL, MUSICAL & Social 360 IP!
                    </motion.p>
                    <motion.p
                      key="paragraph2"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 15, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className='md:text-xl xl:text-[25px] text-white'
                    >
                      BTU is a shonen anime about music but foremost, a story about art and creativity…
                    </motion.p>
                    <motion.p
                      key="paragraph3s"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 15, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className='md:text-xl xl:text-[25px] text-white'
                    >
                      So, put a vinyl on your turntable, connect your headphones, turn on the volume and push the Play button…
                    </motion.p>

                  </>
                )
              }
            </AnimatePresence>
          </div>
        </div>


      </div>
    </div >
  )
}

export default Main