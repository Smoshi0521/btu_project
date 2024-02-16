import React from 'react'

function Navbar() {
  return (
    <div className='  w-full bg-transparent fixed top-0 z-50 px-2 h-16 flex justify-between'>
      <div className='w-fit h-full flex items-center border'>
        <div className='w-[100px] bg-[#a702f4] rounded-lg p-2 flex items-center'>
          <img src='/assets/Logo/BTU_LOGO.png' className='w-full' />
        </div>
      </div>
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