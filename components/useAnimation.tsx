"use client"

import { useEffect, useRef, useState } from 'react'

const useAnimation = () => {
    const [animate,setAnimate] = useState<boolean>(false);
    const animatedRef = useRef(null);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const handleScroll = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setAnimate(true)
                    handleScroll.disconnect()
                } else if(!entry.isIntersecting) {
                    setAnimate(false)
                }
            })
        }, option) 

        const currentRef = animatedRef.current;

        if(currentRef){
            handleScroll.observe(currentRef)
            
        }
        
        return () => {
            if(currentRef){
                handleScroll.unobserve(currentRef)
            }
        }
    },[animate])
  return {animatedRef, animate}
}

export default useAnimation