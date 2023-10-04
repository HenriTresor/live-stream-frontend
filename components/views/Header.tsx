'use client'
import { navListItems } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ModalContext } from '@/providers/ModalProvider'
import Signup from './forms/Signup'

type Props = {}

function Header({ }: Props) {

    const { setDialogContent, setIsOpen } = React.useContext(ModalContext)
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
                    navListItems.quickLinks.map(item => (
                        <Link href={item.link} className='ml-5 float-left capitalize text-gray-500 font-bold' key={item.name}>{item.name}</Link>
                    ))
                }
            </div>

            <Button className='capitalize bg-orange-500 text-white'
                onClick={() => {
                    setIsOpen(true)
                    setDialogContent({
                        title: "Create Account",
                        description: 'Sign up with your email for registration ',
                        children: <Signup />,
                        nextAction: () => { },
                    })
                }}
            >get started</Button>
        </div>
    )
}

export default Header