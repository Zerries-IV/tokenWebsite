"use client"

import React from 'react'
import { ButtonProps } from '../types'
import { useAnimation } from '.'

const Button = ({text, image, pauseForRef} : ButtonProps) => {
  const {animatedRef, animate} = useAnimation();

  return (
    <button ref={animatedRef} className={`
        bg-white w-fit px-10 py-3 text-black rounded-full font-bold text-xs ${pauseForRef ? animate ? 'animate-scaleIn' : '' : 'animate-scaleIn'}
    `} >
        {text}
        {
            image && <span className='ml-3'>&rarr;</span>
        }
    </button>
  )
}

export default Button