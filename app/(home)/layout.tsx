import Aside from '@/components/views/Home/Aside'
import Header from '@/components/views/Home/Header'
import React from 'react'
import '../../app/globals.css'
import Body from '@/components/views/Home/Body'

type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        <div className='m-0 p-0 flex'>
            <Aside />
            <div className='w-[80%]'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default layout