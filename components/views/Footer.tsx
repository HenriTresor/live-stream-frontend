import { navListItems } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {}

function Footer({ }: Props) {
    return (
        <div
            className='w-full h-auto mt-14 p-16 grid sm:grid-cols-3 grid-cols-1 gap-5'
        >
            <div className='flex flex-col items-start justify-between'>
                <div className='flex items-center gap-4'>
                    <Image
                        src={'/icon.svg'}
                        width={50}
                        height={50}
                        alt=''
                        className=''
                    />
                    <h1 className='font-bold'>LIVE STREAM</h1>
                </div>
                <p className='text-[#4E4E4E]'>
                    Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making mo
                </p>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold'>Quick links</h1>
                    {navListItems.quickLinks.map(item => (
                        <Link className='block text-[.9rem] ' href={item.link} key={item.name}>{item.name}</Link>
                    ))}
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold'>Company</h1>
                    {navListItems.company.map(item => (
                        <Link className='block text-[.9rem]' href={item.link} key={item.name}>{item.name}</Link>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-4 items-start'>
                <h1 className='text-[#4E4E4E]'>
                    You can Subscribe now to livestream and get daily update
                </h1>
                <div className='w-full '>
                    <Label htmlFor='emailAddress'>email address</Label>
                    <Input
                        name='emailAddress'
                        id='emailAddress'
                        placeholder='example@example.com'
                    />
                </div>
                <Button>Subscribe</Button>
            </div>
        </div>
    )
}

export default Footer