import Aside from '@/components/views/Home/Aside'
import Header from '@/components/views/Home/Header'
import React from 'react'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'

const inter = Montserrat({ subsets: ['latin'] })


type Props = {
    children: React.ReactNode
}

function Layout({ children }: Props) {
    return (
        <div className={inter.className}>

            <section className={`m-0 p-0 flex`}>
                <Aside />
                <div className='w-[80%]'>
                    <Header />
                    <div className='overflow-auto h-[100dvh]'>
                        {children}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Layout