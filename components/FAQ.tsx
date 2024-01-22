"use client"

import React from 'react'
import { useAnimation } from '.'

const FAQ_INFORMATION = [
  {
    question: "What is Crypto",
    answer: "A Token"
  },
  {
    question: "How much in supply",
    answer: "100 000 000 TKC"
  },
  {
    question: "How can I get some",
    answer: "Await airdrop"
  }
]

const FAQ = () => {
  const { animatedRef, animate } = useAnimation()
  return (
    <div ref={animatedRef} className={`bg-black px-40 py-10  ${animate ? 'opacity-100' : 'opacity-0'} max-[769px]:px-20 max-[426px]:px-3 `}>
      {
        FAQ_INFORMATION.map((item, index) => (
          <div key={index} className={`collapse collapse-plus bg-gray my-10  ${animate ? 'animate-slideUp' : ''} `}>
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-2xl font-bold text-white">
              {item.question}
            </div>
            <div className="collapse-content">
              <p className='text-xl font-medium text-pink'>
                {item.answer}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FAQ