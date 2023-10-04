import { about } from '@/utils/constants'
import React from 'react'
import AboutCard from '../AboutCard'
import Image from 'next/image'

type Props = {}

function About({ }: Props) {
    return (
        <div className=' mt-52 p-5 w-full h-auto grid sm:grid-cols-2 grid-cols-1'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-[#171717] text-[2.5rem]'>Meet Live Stream</h1>
                <p className='text-[#4E4E4E] text-[1rem]'>
                    Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start
                </p>
                <div className='p-4 flex flex-col gap-5'>
                    {
                        about.map(item => (
                            <AboutCard {...item} key={item.title} />
                        ))
                    }
                </div>
            </div>
            <div className='sm:flex  relative text-black  hidden items-center justify-center'>
                <Image
                    src={'/get-our-app.svg'}
                    width={100}
                    height={100}
                    alt=''
                    className='w-[90%] backdrop-blur-md bg-[rgba(0,0,0,0.23)] rounded-sm absolute top-[10%]'
                />

                <Image
                    src={'/landing-blob.svg'}
                    width={100}
                    height={100}
                    alt=''
                    className='w-full h-[80%] absolute top-0 -z-20'
                />

            </div>

            <div className=' mt-20 mb-20 w-[70%] place-self-center col-span-2'>
                <p className='text-[2.5rem] font-bold text-center text-[#484848]'>
                    over <span className='text-[#E179CB]'>500,000</span> <br />
                    live streamers using our app and make money
                </p>
            </div>
        </div>
    )
}

export default About