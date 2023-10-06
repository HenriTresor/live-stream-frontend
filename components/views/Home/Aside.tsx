'use client'
import { Button } from '@/components/ui/button'
import { homeSideMenu } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStream, FaPlus } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

type Props = {}

function Aside({ }: Props) {
  const pathname = usePathname()
  return (
    <div className='p-2 w-[20%] h-[100dvh] border flex flex-col justify-between'>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex items-center gap-5 '>
          <Image
            src={'/icon.svg'}
            alt=''
            width={50}
            height={50}
          />
          <h1 className='font-bold capitalize text-[1.3rem]'>Videbucks</h1>
        </div>

        <Button className='bg-gradient flex items-center gap-5'>
          <FaStream />
          Stream</Button>

        <div className='flex flex-col p-2 mt-3'>
          {
            homeSideMenu.map(item => (
              <Link key={item.name} href={item.link} className={`w-full p-2 flex items-center justify-normal gap-5 font-bold ${pathname === item.link && `bg-gray-100 border-r-2 border-r-orange-600`} mb-3 text-[#00000082] cursor-pointer`}>
                {item.icon()}
                {item.name}
              </Link>
            ))
          }
        </div>
      </div>

      <div className='w-full flex flex-col'>

        <Button className='flex items-center gap-5 bg-gradient '>
          <FaPlus />
          Add a Friend</Button>
      </div>
    </div>
  )
}

export default Aside