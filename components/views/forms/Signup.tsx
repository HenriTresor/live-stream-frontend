import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

type Props = {}

function Signup({ }: Props) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full '>
                <Label htmlFor='fulNamr'>Full name:</Label>
                <Input
                    name='fullName'
                    id='fullName'
                    placeholder='john doe'
                />
            </div>
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
            </div>
            <div className='w-full '>
                <Label htmlFor='confirmPassword'>confirm Password:</Label>
                <Input
                    name='confirmPassword'
                    id='confirmPassword'
                    placeholder='•••••••••••'
                />
            </div>

            <div className='flex flex-col items-center gap-4'>
                <Button className='w-full'>Sign up</Button>
                <p>or</p>
                <Button variant={'outline'} className='w-full'>Continue with Google</Button>
                <p className='text-[##000000] text-[.9rem]'>Already have an account? <span className='text-[#D7DF4D]'>Login</span></p>
            </div>
        </div>
    )
}

export default Signup