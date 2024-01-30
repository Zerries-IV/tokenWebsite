"use client"

import { BG_2 } from '@/app/images'
import Image from 'next/image'
import React from 'react'
import { Socials, useAnimation } from '.'

const Download = () => {
  const {animatedRef, animate} = useAnimation()
  return (
    <main ref={animatedRef} className={`relative ${animate ? 'opacity-100' : 'opacity-0'}`}>
        <Image src={BG_2} priority width={2560} height={undefined} alt='' className='h-[50vh] '/>  
        <div  className={`absolute z-0 flex gap-10 mx-20 mt-30 max-[769px]:mx-10 max-[769px]:mt-20 max-[426px]:flex-col max-[426px]:mx-3 ${animate ? 'animate-slideUp' : ''} `}>
            <div className='flex flex-col justify-center items-center text-center gap-8 w-full'>
                <h1 className='text-white text-[3.2rem] font-extrabold leading-tight max-[769px]:text-5xl max-[426px]:text-4xl animate-slideIn'>
                  Join Crypto for free now!
                </h1>
                <p className='text-white text-xl animate-slideIn'>
                  Exchange your tokens with Crypto. Seamlessly, Instantly!
                </p>
                <Socials />
            </div>
        </div>
    </main>
  )
}

export default Download