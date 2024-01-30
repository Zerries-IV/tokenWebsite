"use client"

import React from 'react'
import { useAnimation } from '.'

const FAQ_INFORMATION = [
  {
    question: "What is a Crypto",
    answer: "Cryptocurrencies are digital or virtual currencies that use cryptography for security. They operate on decentralized networks based on blockchain technology, a distributed ledger enforced by a network of computers (nodes). Bitcoin was the first cryptocurrency, introduced in 2009, and since then, many other cryptocurrencies (such as Ethereum, Ripple, Litecoin, etc.) have been created."
  },
  {
    question: "How much in supply",
    answer: "1 500 000 HSE"
  },
  {
    question: "How can I get some",
    answer: "Airdrop Incoming...."
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
              <p className='text-xl font-light text-pink'>
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