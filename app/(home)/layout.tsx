import Aside from '@/components/views/Home/Aside'
import Header from '@/components/views/Home/Header'
import React from 'react'
import '../../app/globals.css'
import Body from '@/components/views/Home/Body'

type Props = {}

function layout({ }: Props) {
    return (
        <div className='m-0 p-0 grid grid-cols-4'>
            <Header />
            <Aside />
            <Body />
        </div>
    )
}

export default layout