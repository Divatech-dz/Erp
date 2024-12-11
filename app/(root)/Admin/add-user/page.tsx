import { AuthForm } from '@/components/auth-form'
import { AuthType } from '@/constants'
import { icons } from '@/constants/icons'
import Image from 'next/image'
import Link from 'next/link'


import React from 'react'

function AddingUser() {
 
  return (
    <div className='page-deign '>
      <section className="size-full pt-2">
        <div className='w-full flex justify-end items-center p-2' >
        <Link href="/Admin/utilisateurs">
            <Image src={icons.ClosedCircle} height={30} width={30} alt="close-icon" />
          </Link>
        </div>

        <AuthForm type={AuthType.SignUp} style='min-h-screen max-w-[420px]' />
      </section>
    </div>
  )
}
export default AddingUser


