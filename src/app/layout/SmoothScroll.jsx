"use client"
import React from 'react'
import { useEffect } from 'react'

function SmoothScroll({ children }) {
  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}

export default SmoothScroll