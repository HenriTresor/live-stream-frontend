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
        <section className={`${inter.className} m-0 p-0 flex`}>
            <Aside />
            <div className='w-[80%]'>
                <Header />
                {children}
            </div>
        </section>
    )
}

export default Layout