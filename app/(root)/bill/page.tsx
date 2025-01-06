import { BillFooter, BillForm, BillTabs } from '@/components/bill-component'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { bill } from '@/constants'
import React from 'react'

function Bill() {

  const tabs = [
    {
      value: 'Information Client',
      label: 'Information Client',
      content: (
        <Card>
          
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      ),
    },
    {
      value: 'Bone de Livraison',
      label: 'Bone de Livraison',
      content: (
        <Card>
        
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      ),
    },
    {
      value: 'Modalitè de livraison',
      label: 'Modalitè de livraison',
      content: (
        <Card>
          <CardContent className="space-y-2">
            
            <Label htmlFor="mode">Mode</Label>
            <Input id="mode" defaultValue="Standard" />
          </CardContent>
          <CardFooter>
            <Button>Save Delivery Mode</Button>
          </CardFooter>
        </Card>
      ),
    },
    {
      value: 'Produits de Bon',
      label: 'Produits de Bon',
      content: (
        <Card>
          <CardContent className="space-y-2">
            <Label htmlFor="product">Product</Label>
            <Input id="product" defaultValue="Product A" />
          </CardContent>
          <CardFooter>
            <Button>Save Products</Button>
          </CardFooter>
        </Card>
      ),
    },
  ];
  return (
    <div className='page-design'>
      <section className="size-full pt-5">
        <BillForm defaultValues={bill} />
        <BillTabs defaultValue='Information Client' tabs={tabs} />
        <BillFooter />

      </section>


    </div>
  )
}

export default Bill