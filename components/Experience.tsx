"use client"

import Image from 'next/image'
import React from 'react'
import { useAnimation } from '.'
import { EXPERIENCE_INFORMATION } from '../constants'


const Experience = () => {
    const {animatedRef,animate} = useAnimation()

  return (
    <main  className={`bg-black text-center py-32 ${animate ? 'opacity-100' : 'opacity-0'} `}>
        <h1 ref={animatedRef} className={`text-white font-bold text-4xl px-5 ${animate ? 'animate-slideUp' : ''} max-[376px]:text-3xl`}><span className='text-green'>Seamless</span> process, <span className='text-pink'>Flawless</span> experience</h1>
        <p className={`text-gray px-5 mt-10 ${animate ? 'animate-slideUp' : ''}`}>Providing you with the most seamless process you can imagine for exchanging <br /> your crypto or tokens on Crypto</p>
        <div className={`flex mt-20 justify-center items-center ${animate ? 'animate-slideUp' : ''} gap-y-10 max-[769px]:grid max-[769px]:grid-cols-2 max-[426px]:grid-cols-1`}>
            {
                EXPERIENCE_INFORMATION.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <Image src={item.image} alt='' width={100} height={100} />
                        <h2 className='text-white font-semibold text-3xl'>
                            {item.title}
                        </h2>
                        <p className='text-gray text-sm w-[300px] px-10 mt-4'>
                            {item.text}
                        </p>
                    </div> 
                ))
            } 
        </div>
    </main>
  )
}

export default Experience