import Aside from '@/components/views/Home/Aside'
import Header from '@/components/views/Home/Header'
import React from 'react'
import '../../app/globals.css'
import Body from '@/components/views/Home/Body'
import { Montserrat } from 'next/font/google'
import { Metadata } from 'next'
import Head from 'next/head'


const inter = Montserrat({ subsets: ['latin'] })


type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (

        <div className={`${inter.className} m-0 p-0 flex`}>
            <Aside />
            <div className='w-[80%]'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default layout