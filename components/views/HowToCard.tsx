import Image from 'next/image'
import React from 'react'

type Props = {

    title: string;
    description: string;
}


function HowToCard({ title, description }: Props) {
    return (
        <div className='p-5 border-2 rounded-sm flex flex-col gap-4'>
            <Image
                src={'/gift.svg'}
                width={'70'}
                height={'70'}
                alt=''
            />
            <h1 className='text-[1.3rem] font-bold capitalize '>{title}</h1>
            <p className='text-[#3A3A3A]'>
                {description}
            </p>
        </div>
    )
}

export default HowToCard