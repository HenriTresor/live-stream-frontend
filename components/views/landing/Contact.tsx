import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

type Props = {}

function Contact({ }: Props) {
    return (
        <div
            className='w-full mt-20 flex justify-center'
        >

            <div className='w-[90%] border-2 rounded-sm p-5 flex '>
                <div className='w-[40%] flex gap-5 flex-col justify-start items-start'>
                    <h1 className='text-[4rem] font-bold'>
                        Let’s Get in <br />
                        Touch
                    </h1>
                    <div className='w-1/2 p-2 bg-orange-500 h-4 rounded-full'></div>
                    <p className='w-full text-[#4E4E4E]'>
                        Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making mo
                    </p>
                    <p className='font-bold border-b-2 text-center'><span className='text-[#D7DF4D]'>livestreaming</span>@gmail.com</p>
                </div>
                <div className='w-[60%] grid grid-cols-2 gap-5'>
                    <div className='w-full '>
                        <Label htmlFor='fullName'>Full Name</Label>
                        <Input
                            name='fullName'
                            id='fullName'
                            placeholder='John Doe'
                        />
                    </div>
                    <div className='w-full '>
                        <Label htmlFor='email'>Email address</Label>
                        <Input
                            name='email'
                            id='email'
                            placeholder='example@example.com'
                        />
                    </div>
                    <div className='w-full '>
                        <Label htmlFor='phoneNumber'>Contact phone</Label>
                        <Input
                            id='phoneNumber'
                            name='phoneNumber'
                            placeholder='+123-233-233-2344-221'
                        />
                    </div>
                    <div className='w-full '>
                        <Label htmlFor='address'>Home Adress</Label>
                        <Input 
                            id='address'
                            name='address'
                            placeholder='Gergia, Inc'
                        />
                    </div>
                    <div className='w-full col-span-2'>
                        <textarea name="" className='w-[100%] border rounded-sm p-3' rows={10} placeholder='message...' cols={100}  id=""></textarea>
                    </div>
                    <Button className='flex justify-evenly'>Submit message <span className='border-l border-white'>→</span></Button>
                </div>
            </div>
        </div>
    )
}

export default Contact