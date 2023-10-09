import React from 'react'
import silver from "../../../assets/silver.png"
import gold from "../../../assets/gold.png"
import Image from 'next/image'
const Plan: React.FC = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center h-full'>

            <p className='my-5 text-3xl'>Get to <span className='text-[#E179CB]'>premium</span></p>
            <div className="flex gap-5 p-10">
                <div className='p-6 flex flex-col items-center justify-center border-2  border-[#DBDBDB] font-medium'>
                    <div className="flex gap-2 items-center">
                        <Image src={silver} alt="" />
                        <p className='text-lg'>Silver</p>
                    </div>
                    <p className='text-3xl'>$14</p>
                    <p className='text-sm text-[#747474]'>per user,per month</p>
                    <button className='border-[#E179CB] border-2	my-3 font-lin px-4 py-2'>
                        Start My 7-day Trial
                    </button>
                    <div className="w-[50%] h-1 bg-[#D7D7D7] my-5"></div>
                    <ul className='text-[#747474] text-center'>
                        <li>2 live video per day</li>
                        <li>Get 10 % money every month from your total followers</li>
                        <li>200 coins per month</li>
                        <li>send friend request up to 10 users</li>
                        <li>24/7 Support</li>
                    </ul>
                </div>
                <div className='p-6 flex flex-col items-center justify-center  font-medium bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] text-white'>
                    <div className="flex gap-2 items-center">
                        <Image src={gold} alt="" />
                        <p className='text-lg'>Gold</p>
                    </div>
                    <p className='text-3xl'>$49</p>
                    <p className='text-sm text-[#747474]'>per user,per month</p>
                    <button className='border-white border-2 text-white px-4 py-2 my-3'>
                        Start My 15-day Trial
                    </button>
                    <div className="w-[50%] h-1 bg-white my-5"></div>
                    <ul className='text-center'>
                        <li>6 live video per day</li>
                        <li>Get 5 % money every month from your total followers</li>
                        <li>800 coins  per month</li>
                        <li>send friend request up to 30 users</li>
                        <li>24/7 Support</li>
                    </ul>
                </div>
                <div className='p-6 flex flex-col items-center justify-center border-2  border-[#DBDBDB] font-medium'>
                    <div className="flex gap-2 items-center">
                        <Image src={silver} alt="" />
                        <p className='text-lg'>Unlimited</p>
                    </div>
                    <p className='text-3xl'>$139</p>
                    <p className='text-sm text-[#747474]'>per user,per month</p>
                    <button className='border-[#E179CB] border-2 font-lin px-4 py-2 my-3'>
                        Start My 15-day Trial
                    </button>
                    <div className="w-[50%] h-1 bg-[#D7D7D7] my-5"></div>
                    <ul className='text-[#747474] text-center'>
                        <li>Unlimited  live video per day</li>
                        <li>Get 10 % money every month from your total followers</li>
                        <li>2000 coins  per month</li>
                        <li>Send  unlimited friend request users</li>
                        <li>24/7 Support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Plan