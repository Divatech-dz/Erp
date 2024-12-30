import {DataTable} from '@/components/data-table'
import {invoices, userRowsTable} from '@/constants'
import React from 'react'

function User() {
    return (
        <div className='page-deign '>
            <section className="size-full pt-5">
                <DataTable columnNames={userRowsTable} columnData={invoices}/>
            </section>
        </div>
    )
}

export default User
