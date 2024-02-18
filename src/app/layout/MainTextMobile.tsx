"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
function MainTextMobile() {
  const { ref, inView } = useInView();
  const [scrollY, setScrollY] = useState<number>(0)

  return (
    <div className={`md:hidden tracking-widest flex flex-col gap-2 bg-[#0d0f26] overflow-hidden h-[400px] px-5 pb-10 pt-0 overflow-x-hidden`}>
      <AnimatePresence>
        {
          inView && (
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
                className='md:text-xl lg:text-[20px] text-white'
              >
                BTU is a shonen anime about music but foremost, a story about art and creativity…
              </motion.p>
              <motion.p
                key="paragraph3s"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 15, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='md:text-xl lg:text-[20px] text-white'
              >
                So, put a vinyl on your turntable, connect your headphones, turn on the volume and push the Play button…
              </motion.p>

            </>
          )
        }
      </AnimatePresence>
        <div ref={ref} className=''></div>
    </div>
  )
}

export default MainTextMobile