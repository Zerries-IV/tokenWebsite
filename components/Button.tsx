"use client"

import React from 'react'
import { ButtonProps } from '../types'
import { useAnimation } from '.'
import Link from 'next/link'

const Button = ({text, image, pauseForRef, link} : ButtonProps) => {
  const {animatedRef, animate} = useAnimation();

  return (
   <Link href={link}>
     <button ref={animatedRef} className={`
        bg-white cursor-pointer w-fit px-10 py-3 text-black rounded-full font-bold text-xs ${pauseForRef ? animate ? 'animate-scaleIn' : '' : 'animate-scaleIn'}
    `} >
        {text}
        {
            image && <span className='ml-3'>&rarr;</span>
        }
    </button>
   </Link>
  )
}

export default Button