import Aside from '@/components/views/Home/Aside'
import Header from '@/components/views/Home/Header'
import React from 'react'
import '../../app/globals.css'
import { Montserrat } from 'next/font/google'


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
                    {children}
                </div>
            </section>
        </div>
    )
}

export default Layout