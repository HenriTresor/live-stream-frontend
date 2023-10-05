import Image from 'next/image'
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
      <div className='flex w-full p-3 col-span-4'>
          <div className='flex item-center gap-5'>
              <Image
                  src={'/icon.svg'}
                  alt=''
                  width={50}
                  height={50}
              />
              <h1>Videbucks</h1>
         </div>
    </div>
  )
}

export default Header