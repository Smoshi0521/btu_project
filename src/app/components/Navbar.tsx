import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-transparent fixed top-0 z-50 p-2 flex justify-between'>
      <div className='w-[100px] bg- rounded-xl p-2'>
        <img src='/assets/Logo/BTU_LOGO.png' className='w-full h-full' />
      </div>
      <div className='flex items-center text-white gap-10'>
        <div className='border'>
          <a href=''>
            TEAM
          </a>
        </div>
        <div className='border'>
          <a>
            ORIGINS
          </a>
        </div>
        <div className='border'>
          <a>
            BTU ART
          </a>
        </div>
        <div className='border'>
          <a>
            NFT GALLERY
          </a>
        </div>
        <div className='border'>
          <a>
            THE IP
          </a>
        </div>
        <div className='border'>
          <a>
            CONNECT
          </a>
        </div>
      </div>

    </div>
  )
}

export default Navbar