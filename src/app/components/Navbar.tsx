"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lexend } from 'next/font/google';
import gsap from 'gsap';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
})

type Props = {
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>
}

function Navbar({ setOpenMenu }: Props) {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollY, setScrollY] = useState<number>(0)

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

  useEffect(() => {
    if (showMenu) {

    }
  }, [showMenu])

  // useEffect(() => {
  //   gsap.to('.menulist', 0.5, {
  //     x: "0%",
  //     delay: 0.2,
  //     stagger: {
  //       amount: 1
  //     },
  //   });

  // })

  return (
    <nav className={`${lexend.className} ${scrollY > 200 ? "shadow-2xl" : ""} font-bold w-full bg-transparent fixed top-0 z-50 px-2 h-16 flex justify-between duration-300`}>
      <div className='w-fit h-full flex items-center z-50'>
        <div className='w-[100px] bg-[#a702f4] rounded-lg p-2 flex items-center justify-center'>
          {/* <Image alt='logo' width={100} height={0} src='/assets/Logo/BTU_LOGO.png' className='' /> */}
          <span className='font-bold text-white text-2xl'>LOGO</span>
        </div>
      </div>

      <div className='w-fit flex items-center justify-center z-50 lg:hidden'>
        <button onClick={() => { setShowMenu(!showMenu) }} className={`duration-300 flex flex-col items-center justify-center h-10 ${showMenu ? "space-y-0" : "space-y-2"} relative w-10`}>
          <span className={`border-b-2 w-[25px] duration-500 ${showMenu ? "rotate-[50deg] absolute" : "rotate-[0deg]"} `}></span>
          <span className={`border-b-2 w-[25px] duration-500 ${showMenu ? "rotate-[-50deg] absolute" : "rotate-[0deg]"}`}></span>
        </button>
      </div>

      <AnimatePresence>
        {
          showMenu ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              // exit={{  bottom: -document.body.scrollHeight}}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
              className='w-full h-screen z-40 bg-black bg-opacity-30 absolute left-0 backdrop-blur-xl lg:hidden overflow-y-auto'>
              <div className='h-full flex flex-col w-full px-5 justify-center relative '>

                <AnimatePresence>
                  <motion.div
                    key="Menu1"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    className='w-full py-5 relative text-skyBlue'>
                    <a className='text-white text-2xl tracking-widest flex justify-center text-skyBlue'>
                      TEAM
                    </a>
                  </motion.div>
                  <motion.div
                    key="Menu2"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className='w-full py-5 relative '>
                    <a className='text-white text-2xl tracking-widest flex justify-center text-skyBlue'>
                      ORIGINS
                    </a>
                  </motion.div>
                  <motion.div
                    key="Menu3"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='w-full py-5 relative '>
                    <a className='text-white text-2xl tracking-widest flex justify-center text-skyBlue'>
                      BTU ART
                    </a>
                  </motion.div>
                  <motion.div
                    key="Menu4"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='w-full py-5 relative '>
                    <a className='text-white text-2xl tracking-widest flex justify-center text-skyBlue'>
                      NFT GALLERY
                    </a>
                  </motion.div>
                  <motion.div
                    key="Menu5"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className='w-full py-5 relative '>
                    <a className='text-white text-2xl tracking-widest flex justify-center text-skyBlue'>
                      MORE
                    </a>
                  </motion.div>
                  <motion.div
                      key="Menu6"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 15 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='w-full py-5 relative '>
                    <a className='text-white text-2xl tracking-widest flex justify-center text-pink-500'>
                      CONNECT WALLET
                    </a>
                  </motion.div>
                </AnimatePresence>

                <div className=' flex justify-center gap-10 relative bottom-0 mt-5 w-full left-0'>
                  <div className='w-16 rounded-full border h-16 flex items-center justify-center text-white'>LINK</div>
                  <div className='w-16 rounded-full border h-16 flex items-center justify-center text-white'>LINK</div>
                  <div className='w-16 rounded-full border h-16 flex items-center justify-center text-white'>LINK</div>
                </div>
              </div>
            </motion.div>

            : null
        }
      </AnimatePresence>



      <div className='hidden lg:flex justify-end items-center text-white gap-3 w-full overflow-x-hidden'>
        <div className=' h-full relative flex items-center group'>
          <span className='bg-[#23ffd3] group-hover:animate-bounce group-hover:h-full h-0 top-0 rounded-b-xl duration-500 w-full left-0 absolute z-10'></span>
          <a href='' className='z-20 w-full h-full px-3 flex items-center group-hover:text-[#a702f4] duration-500  tracking-widest'>
            TEAM
          </a>
        </div>
        <div className=' h-full relative flex items-center group'>
          <span className='bg-[#23ffd3] group-hover:h-full h-0 top-0 rounded-b-xl duration-500 w-full left-0 absolute z-10'></span>
          <a href='' className='z-20 w-full h-full px-3 flex items-center group-hover:text-[#a702f4] duration-500  tracking-widest'>
            ORIGINS
          </a>
        </div>
        <div className=' h-full relative flex items-center group'>
          <span className='bg-[#23ffd3] group-hover:h-full h-0 top-0 rounded-b-xl duration-500 w-full left-0 absolute z-10'></span>
          <a href='' className='z-20 w-full h-full px-3 flex items-center group-hover:text-[#a702f4] duration-500  tracking-widest'>
            BTU ART
          </a>
        </div>
        <div className=' h-full relative flex items-center group'>
          <span className='bg-[#23ffd3] group-hover:h-full h-0 top-0 rounded-b-xl duration-500 w-full left-0 absolute z-10'></span>
          <a href='' className='z-20 w-full h-full px-3 flex items-center group-hover:text-[#a702f4] duration-500  tracking-widest'>
            NFT GALLERY
          </a>
        </div>
        <div className=' h-full relative flex items-center group'>
          <span className='bg-[#23ffd3] group-hover:h-full h-0 top-0 rounded-b-xl duration-500 w-full left-0 absolute z-10'></span>
          <a href='' className='z-20 w-full h-full px-3 flex items-center group-hover:text-[#a702f4] duration-500  tracking-widest'>
            THE IP
          </a>
        </div>
        <div className=' h-full relative flex items-center group'>
          <span className='bg-[#23ffd3] group-hover:h-full h-0 top-0 rounded-b-xl duration-500 w-full left-0 absolute z-10'></span>
          <a href='' className='z-20 w-full h-full px-3 flex items-center group-hover:text-[#a702f4] duration-500  tracking-widest'>
            CONNECT
          </a>
        </div>
      </div>

    </nav >
  )
}

export default Navbar