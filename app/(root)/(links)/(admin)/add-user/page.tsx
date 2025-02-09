import {AuthForm} from '@/components/auth-form'
import {AuthType} from '@/constants'
import {icons} from '@/constants/icons'
import Image from 'next/image'
import Link from 'next/link'


import React from 'react'

function AddingUser() {

    return (
        <div className='page-design'>
            <section className="flex justify-between size-full pt-2">
                {/* <AuthForm type={AuthType.SignUp} style='min-h-screen max-w-[420px]'/> */}
                <Link href="/navbar-Links/Admin/utilisateurs">
                    <Image src={icons.ClosedCircle} height={30} width={30} alt="close-icon"/>
                </Link>
            </section>
        </div>
    )
}

export default AddingUser


