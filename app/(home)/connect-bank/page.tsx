import React from 'react'
import Link from 'next/link'
const ConnectBank: React.FC = () => {
    return (
        <div className='p-8'>
            <p className='text-2xl font-semibold my-3'>Connect your bank account</p>
            <form className='px-10'>
                <div className="flex justify-between gap-5 items-center">
                    <div className='w-[50%]'>
                        <p className='font-medium'>Select you bank</p>
                        <select className='bg-[#D7D7D7]  px-4 py-2 rounded-lg outline-none w-full'>
                            <option value="cong">CodeBankue</option>
                            <option value="cong">EQuity</option>
                            <option value="cong">Paypal</option>
                            <option value="cong">Binance</option>
                        </select>
                    </div>
                    <div className='w-[50%]'>
                        <p className='font-medium'>CVV</p>
                        <input type="text" placeholder='xxx' className='px-4 py-2 rounded-lg bg-[#D7D7D7] outline-none w-full' />
                    </div>
                </div>
                <div className="flex justify-between gap-5 items-center my-3">
                    <div className='w-[50%]'>
                        <p className='font-medium'>Card number</p>
                        <input type="text" placeholder='number' className='px-4 py-2 rounded-lg bg-[#D7D7D7] outline-none w-full' />
                    </div>
                    <div className='w-[50%]'>
                        <p className='font-medium'>Expiry date</p>
                        <input type="date" placeholder='xxx' className='px-4 py-2 rounded-lg bg-[#D7D7D7] outline-none w-full' />
                    </div>
                </div>
                <div className="flex gap-3 items-start my-5">
                    <input type="checkbox" name="" id="" />
                    <div className='font-medium'>
                        <p>Accept terms and regulations</p>
                        <Link href={"/terms-regulations"}>
                            <p className='text-[#E179CB] text-sm'>Read terms and regulations</p>
                        </Link>
                    </div>
                </div>
                <input type="submit" className='w-full px-4 py-2 rounded-full bg-gradient-to-br from-[#E179CB] to-[#D7DF4D] text-white cursor-pointer' value={"Submit"} />
            </form>
        </div>
    )
}

export default ConnectBank