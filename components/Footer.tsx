"use client"

import React from 'react'
import { Socials, useAnimation } from '.'
import Image from 'next/image'
import { LOGO } from '@/app/images'


const Footer = () => {
    const {animatedRef,animate} = useAnimation()
  return (
    <footer ref={animatedRef} className={` ${animate ? 'opacity-100' : 'opacity-0'} `}>
    <main className={`footer p-10 bg-black text-white ${animate ? 'animate-slideUp' : ''}`}>
        <aside>
        <Image src={LOGO} alt='' className='rounded-full object-contain' width={100} height={100} />
        <p>Hest Swap Crypto<br/>Providing reliable token since 2023</p>
        </aside> 
        <nav>
        <header className="footer-title text-white">Socials</header> 
          <Socials />
        </nav>
    </main>
  </footer>
  )
}

export default Footer