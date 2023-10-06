import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
      <div className='w-full h-auto p-1 text-white flex justify-between relative mt-10'>
          <svg className='w-[98%] h-auto absolute -z-10 right-5 hidden sm:block' viewBox="0 0 1520 542" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H1520V542L0 455.198V0Z" fill="#ADBC8C" />
          </svg>
          <div className='sm:w-1/2 w-full bg-[#ADBC8C] sm:bg-none flex  flex-col justify-center  gap-5 items-start p-5'>
              <h1 className='text-[2.5rem] font-bold'>
                  Start live streaming and making money with Live Stream
              </h1>
              <p className='text-[1.3rem]'>Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream</p>
              <Button className='capitalize font-bold '>get started</Button>
          </div>
          <div className='w-1/2 sm:grid hidden place-content-center relative'>

              <div className='grid grid-cols-2 gap-32  absolute top-10  right-[30%]  -z-10'>
                  <Image
                      src={'/heart.svg'}
                      width={'100'}
                      height={'100'}
                      alt=''
                  />
                  <Image
                      src={'/money.svg'}
                      width={'100'}
                      height={'100'}
                      alt=''
                  />
                  <Image
                      src={'/video.svg'}
                      width={'100'}
                      height={'100'}
                      alt=''
                  />
              </div>
              <Image
                  src={'/images/first-screen-girl.jpg'}
                  width={'100'}
                  height={'200'}
                  className='w-full h-full rounded-full object-cover'
                  alt='girl'
              />
          </div>
      </div>
  )
}

export default Hero