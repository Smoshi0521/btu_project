"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
type Props = {
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>
}

function Navbar({ setOpenMenu }: Props) {
  const [showMenu, setShowMenu] = useState(false)


  return (
    <div className='w-full bg-transparent fixed top-0 z-50 px-2 h-16 flex justify-between overflow-x-hidden'>
      <div className='w-fit h-full flex items-center z-50'>
        <div className='w-[100px] bg-[#a702f4] rounded-lg p-2 flex items-center justify-center'>
          {/* <Image alt='logo' width={100} height={0} src='/assets/Logo/BTU_LOGO.png' className='' /> */}
          <span className='font-bold text-white text-2xl'>LOGO</span>
        </div>
      </div>

      <div className=' w-fit flex items-center justify-center z-50 md:hidden'>
        <button onClick={() => { setShowMenu(!showMenu) }} className={`flex flex-col items-center justify-center h-10 ${showMenu ? "space-y-0" : "space-y-2"} relative w-10`}>
          <span className={`border-2 w-[25px] duration-500 ${showMenu ? "rotate-[50deg] absolute" : "rotate-[0deg]"} `}></span>
          <span className={`border-2 w-[25px] duration-500 ${showMenu ? "rotate-[-50deg] absolute" : "rotate-[0deg]"}`}></span>
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
              className='w-full h-screen z-40 bg-black bg-opacity-50 absolute left-0 backdrop-blur-xl md:hidden'>
              <div className='h-full flex flex-col w-full px-3 space-y-5'>
                <div className='w-full h-16'></div>
                <div className='w-full border-b-2 border-b-gray-500 py-3 relative '>
                  <a className='text-white text-xl tracking-widest'>
                    TEAM
                  </a>
                </div>
                <div className='w-full border-b-2 border-b-gray-500 py-3 relative '>
                  <a className='text-white text-xl tracking-widest'>
                    ORIGINS
                  </a>
                </div>
                <div className='w-full border-b-2 border-b-gray-500 py-3 relative '>
                  <a className='text-white text-xl tracking-widest'>
                    BTU ART
                  </a>
                </div>
                <div className='w-full border-b-2 border-b-gray-500 py-3 relative '>
                  <a className='text-white text-xl tracking-widest'>
                    NFT GALLERY
                  </a>
                </div>
                <div className='w-full border-b-2 border-b-gray-500 py-3 relative '>
                  <a className='text-white text-xl tracking-widest'>
                    THE IP
                  </a>
                </div>
                <div className='w-full border-b-2 border-b-gray-500 py-3 relative '>
                  <a className='text-white text-xl tracking-widest'>
                    CONNECT
                  </a>
                </div>
              </div>
            </motion.div>

            : null
        }
      </AnimatePresence>



      <div className='hidden md:flex justify-end items-center text-white gap-3 w-full'>
        <div className=' h-full relative flex items-center group'>
          <span className='bg-[#23ffd3] group-hover:h-full h-0 top-0 rounded-b-xl duration-500 w-full left-0 absolute z-10'></span>
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

    </div>
  )
}

export default Navbar