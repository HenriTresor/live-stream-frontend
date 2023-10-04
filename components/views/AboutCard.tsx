import React from 'react'

type Props = {
    title: string;
    description: string;
}

function AboutCard({ title, description }: Props) {
    return (
        <div className='w-full border rounded-sm border-r-8 p-2'>
            <h1 className='text-[1.3rem] font-bold capitalize text-[#D7DF4D]'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default AboutCard