import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

type Props = {}

function Login({ }: Props) {
    return (
        <div className='flex flex-col gap-4'>
         
            <div className='w-full '>
                <Label htmlFor='email'>Email address:</Label>
                <Input
                    name='email'
                    id='email'
                    placeholder='example@example.com'
                />
            </div>
            <div className='w-full '>
                <Label htmlFor='password'>password:</Label>
                <Input
                    name='password'
                    id='password'
                    placeholder='•••••••••••'
                />
                <p className='text-[.8rem] mt-2 mb-5 cursor-pointer'>Forgot password?</p>
            </div>
       

            <div className='flex flex-col items-center gap-4'>
                <Button className='w-full'>Sign in</Button>
                <p>or</p>
                <Button variant={'outline'} className='w-full'>Continue with Google</Button>
                <p className='text-[##000000] text-[.9rem]'>Don&apos;t have an account? <span className='text-[#D7DF4D]'>Create one!</span></p>
            </div>
        </div>
    )
}

export default Login