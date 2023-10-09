import React from 'react'
import { Helmet } from "react-helmet"
import Video from '@/components/Video'
import AStream from '@/components/AStream'
import edit from "../../../assets/edit.svg"
import Link from 'next/link'
import Image from 'next/image'
const Profile = () => {
    const recentStreams = [
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
        },
        {
            name: "Migos Trio",
            thumbnail: "https://i.pinimg.com/564x/b0/8c/fc/b08cfc232eb8c852541b1e1342e477d6.jpg",
            views: 2000,
            id: 1,
        },
    ]
    return (
        <div className='overflow-y-auto'>

            <div className="p-8">
                <div className="relative flex gap-5 p-10   items-center">
                    <div className='p-2 rounded-full border-2 border-[#E179CB] w-[33%]'>
                        <Image
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width={100} height={100} alt="" className='rounded-full w-72 h-72' />
                    </div>
                    <div className='w-[64%]'>
                        <p className='font-semibold text-[40px] my-2'>iShowSpeed</p>
                        <p className='text-[25px] text-[#E179CB] my-2'>Gaming</p>
                        <p className='text-base my-2'>IShowSpeed · bald · Videos · Subsrube to my 2nd channel on YT · Popular videos · Shorts · i might die bye · I Met Neymar · Eu Prado No Bailo With Neymar .</p>
                        <div className="flex gap-5 my-3">
                            <div>
                                <p className='text-xl text-[#7F7F7F] my-1'>Followers</p>
                                <p className='text-xl my-1'>1223</p>
                            </div>
                            <div>
                                <p className='text-xl text-[#7F7F7F] my-1'>Followers</p>
                                <p className='text-xl my-1'>1223</p>
                            </div>
                        </div>
                        <Link href={"/main/profile/connect-bank"} className='my-2'>
                            <span className='font-lin px-4 py-2 rounded-full border-[#E179CB] border-2 my-3 '>Connect to bank</span>
                        </Link>
                    </div>
                    <Link href={"/main/profile/edit"} className='absolute top-5 right-5'>
                        <div className='px-4 py-2 rounded-full bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] text-white flex gap-2 items-center'>
                            <Image src={edit} alt="" />
                            <p>Edit</p>
                        </div>
                    </Link>
                </div>
                <div className="w-full h-1 bg-[#C1C1C1]"></div>
                <div className="p-5">
                    <p className='text-[25px]  my-2'>Most Viewed Streams</p>
                    <div className='grid grid-cols-2 md:grid-cols-3  gap-5'>
                        {recentStreams.map((stream, i) => {
                            return (
                                <AStream key={i} thumbnail={stream.thumbnail} name={stream.name} views={stream.views} id={stream.id} />
                            )
                        })}
                    </div>
                </div>
                <div className="p-5">
                    <p className='text-[25px]  my-2'>Recent Streams</p>
                    <div className='grid grid-cols-2 md:grid-cols-3  gap-5'>
                        {recentStreams.map((stream, i) => {
                            return (
                                <AStream key={i} thumbnail={stream.thumbnail} name={stream.name} views={stream.views} id={stream.id} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile