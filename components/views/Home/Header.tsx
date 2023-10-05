import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaBell, FaWrench } from "react-icons/fa"


type Props = {}

function Header({ }: Props) {
  return (
    <div className='flex p-3 items-center w-full justify-between'>


      <div className='p-1 flex items-center justify-normal border-2 rounded-sm'>
        <Search />
        <Input className='border-none focus:outline-none outline-none' placeholder='search...' />
      </div>

      <div className='flex items-center gap-3 justify-self-end'>

        <Button className='bg-none rounded-full' size={'icon'}>
          <FaBell />
        </Button>
        <Button className='bg-none rounded-full' size={'icon'}>
          <FaWrench />
        </Button>
        <Avatar className="border-2 border-green-600 ">
          <AvatarImage />
          <AvatarFallback className="uppercase">fn</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Header