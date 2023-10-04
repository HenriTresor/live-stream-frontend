import { navListItems } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='flex p-2 items-center w-full h-auto justify-between pl-10 pr-10 '>
            <Image
                src={'/icon.svg'}
                width={'50'}
                height={'50'}
                className=''
                alt='vide-bucks icon'
            />

            <div className='w-auto sm:flex hidden gap-4'> 
                {
                    navListItems.map(item => (
                        <Link href={item.link} className='ml-5 float-left capitalize text-gray-500 font-bold' key={item.name}>{item.name}</Link>
                    ))
                }
            </div>

                <Button className='capitalize bg-orange-500 text-white'>get started</Button>
        </div>
    )
}

export default Header