import Link from 'next/link'
import React from 'react'
import { BiLogoTelegram, BiLogoTwitter } from 'react-icons/bi'

const Socials = () => {
    return (
        <div className="grid grid-flow-col gap-4 relative z-[101]">
            <Link href="https://x.com/hestswap">
                <BiLogoTwitter className='text-3xl cursor-pointer' />
            </Link>

            <Link href="https://t.me/hestswap">
                <BiLogoTelegram className='text-3xl cursor-pointer' />
            </Link>
        </div>
    )
}

export default Socials