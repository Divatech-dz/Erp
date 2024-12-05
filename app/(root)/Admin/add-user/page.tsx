import { AuthForm } from '@/components/auth-form'
import { AuthType } from '@/constants'
import React from 'react'

function AddingUser () {
  return (
    <div className='page-deign '>
      <section className="size-full pt-2">
      <AuthForm type={AuthType.SignUp}  height='min-h-screen max-w-[420px]'/>
      </section>
    </div>
  )
}
export default AddingUser


