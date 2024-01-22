"use client"
import React from 'react'
import { Button, useAnimation } from '.'
import Image from 'next/image'
import { PNG_2 } from '@/app/images'

const Offer = () => {
    const {animatedRef, animate} = useAnimation()

  return (
    <main className={`bg-black pb-32 ${animate ? 'opacity-100' : 'opacity-0'} `}>
        <div ref={animatedRef} className='flex gap-10 mx-20 max-[769px]:mx-10 max-[426px]:flex-col max-[426px]:mx-3'>
            <div className='w-[40%] pt-20 flex justify-center items-center max-[426px]:w-full'>
                <Image src={PNG_2} priority width={450} height={900} alt='' className={`${animate ? 'animate-popUp' : ''}`} />
            </div>
            <div className='flex flex-col justify-center gap-8 w-[60%] max-[426px]:w-full'>
                <h1 className={`text-white text-[2.2rem] font-extrabold leading-tight max-[769px]:text-3xl max-[426px]:text-2xl ${ animate ? 'animate-slideInAlt' : ''}`}>
                    We offer the most <span className='text-green'>secure, fast and easy</span> Bitcoin transaction system in the world
                </h1>
                <p className={`text-gray text-sm  ${ animate ? 'animate-slideInAlt' : ''}`}>
                    Available as a browser extension and as a mobile app, Crypto equips you with a key vault, secure login, token wallet, and token exchange—everything you need to manage your digital assets
                </p>
                <Button pauseForRef text='Learn More' image/>
            </div>
        </div>
    </main>
  )
}

export default Offer