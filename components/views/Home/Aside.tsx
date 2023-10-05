import Image from 'next/image'
import React from 'react'

type Props = {}

function Aside({ }: Props) {
  return (
    <div className='p-2 w-[20%]'>
      <div className='flex items-center gap-5 '>
        <Image
          src={'/icon.svg'}
          alt=''
          width={50}
          height={50}
        />
        <h1 className='font-bold capitalize text-[1.3rem]'>Videbucks</h1>
      </div>
    </div>
  )
}

export default Aside