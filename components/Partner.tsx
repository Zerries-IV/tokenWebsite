"use client"

import Image from 'next/image'
import { useAnimation } from '.'
import { IMAGES } from '../constants'



const Partner = () => {
    const {animatedRef, animate} = useAnimation()

  return (
    <div  className={`bg-gray px-20 py-12 flex justify-between max-[769px]:px-10 max-[769px]:grid max-[769px]:grid-cols-3 max-[769px]:gap-3 max-[426px]:px-3 ${animate ? 'opacity-100' : 'opacity-0' }`}>
        {
            IMAGES.map((image, index) => (
                <Image ref={animatedRef} key={index} src={image} alt='' width={150} height={150} className={`${animate ? 'animate-popUp' : 'opacity-1'}` }/>                
            ))
        }
    </div>
  )
}

export default Partner
