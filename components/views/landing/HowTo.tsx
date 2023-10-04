import Image from 'next/image'
import React from 'react'
import HowToCard from '../HowToCard'
import { howtos } from '@/utils/constants'

type Props = {}

function HowTo({ }: Props) {
    return (
        <div className=' mt-14 w-full h-auto p-5 flex flex-col items-center gap-5'>
            <h1 className='text-[#000720] text-center text-[3rem] font-bold'>
                How to make money <br></br> now with <span className='text-[#D7DF4D] '>Live Stream</span>
            </h1>
            <p className='w-[70%] text-center text-[0.9rem] mt-5 text-[#3A3A3A]'>Live streaming has transformed the way content creators and their audiences interact, bringing a new level of engagement and connection. In this digital age, creators from various platforms engage with their viewers in real time, fostering a sense of community and shared experience. One intriguing aspect of live streams is the ability for viewers to express their appreciation through virtual gifts. These gifts can range</p>

            <div className='w-full grid grid-cols-3 gap-5'>
                {
                    howtos.map(howto => (
                        <HowToCard {...howto} key={howto.title} />
                    ))
                }
          </div>
        </div>
    )
}

export default HowTo