import React from 'react'
import add from "../assets/add.svg"
import Image from 'next/image';
interface Props {
    image: string;
    name: string;
    category?: string;
    followers: number;
    following: number;
    flw: any
}


const AFriend: React.FC<Props> = ({ image, name, category, followers, following, flw }) => {
    return (
        <div className='flex flex-col items-center justify-center font-medium'>
            <div className='p-2 rounded-full border-2 border-[#E179CB] '>
                <Image width={100} height={100} src={image} alt="" className='rounded-full w-40 h-40' />
            </div>
            <p className='font-semibold text-lg my-2'>{name}</p>
            <p className='text-[#E179CB] my-2'>{category}</p>
            <div className="flex justify-between gap-5">
                <div className='flex flex-col items-center'>
                    <p className='text-xl text-[#7F7F7F] '>Followers</p>
                    <p className='text-xl '>{followers}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-xl text-[#7F7F7F] '>Following</p>
                    <p className='text-xl '>{following}</p>
                </div>
            </div>
            {flw == "back" ? (
                <button className='px-4 py-2 font-lin flex gap-2 items-center'>
                    <Image width={100} height={100} src={add} alt="" />
                    <p>Followback</p>
                </button>
            ) : flw == "yes" ? (
                <div className='px-4 py-2 font-lin'>Following</div>
            ) : (
                <button className='px-4 py-2 font-lin flex gap-2 items-center'>
                    <Image width={100} height={100} src={add} alt="" />
                    <p>Follow</p>
                </button>
            )}
        </div>
    )
}

export default AFriend