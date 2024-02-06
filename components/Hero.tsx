import { BG, PNG_1 } from '@/app/images'
import Image from 'next/image'
import React from 'react'
import { Button, Socials } from '.'

const Hero = () => {
  return (
    <main className="relative z-[100]">
        <div className='w-full bg-black flex px-5 pt-4'>
            <Socials />
        </div>
        <Image src={BG} priority width={2560} height={undefined} alt='' className='h-[100vh] max-[426px]:h-[1424px]'/>  
        <div className='absolute flex gap-10 mx-20 mt-30 max-[769px]:mx-10 max-[769px]:mt-20 max-[426px]:flex-col max-[426px]:mx-3'>
            <div className='flex flex-col justify-center gap-8 w-[60%] max-[426px]:w-full'>
                <h1 className='text-white text-[3.2rem] font-extrabold leading-tight max-[769px]:text-5xl max-[426px]:text-4xl animate-slideIn'>
                    A modern and trusted swap and gateway to the blockchain ecosystems
                </h1>
                <p className='text-white text-xl animate-slideIn'>Buy, store, collect NFTs, exchange, and earn crypto. Join 25 million+ people using Trust Wallet.</p>
                <Button link={`https://hestswap.gitbook.io/hest-swap/`} text='WhitePaper' image/>
            </div>
            <div className='w-[40%] pt-20 flex justify-center items-center max-[426px]:w-full'>
                <Image src={PNG_1} priority width={350} height={700} alt='' className='animate-popUp' />
            </div>
        </div>
    </main>
  )
}

export default Hero