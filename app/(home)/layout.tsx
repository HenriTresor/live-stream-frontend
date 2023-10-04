import Aside from '@/components/views/Home/Aside'
import Header from '@/components/views/Home/Header'
import React from 'react'
import '../../app/globals.css'

type Props = {}

function layout({ }: Props) {
    return (
        <div className='m-0 p-0'>
            <Header />
            <Aside />
        </div>
    )
}

export default layout