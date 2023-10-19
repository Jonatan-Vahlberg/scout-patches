"use client"
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sweden-light to-sweden-dark">
      <Card className=''>
        <CardHeader>
          <h2 className='text-2xl font-bold text-center w-full text-sweden-light'>Scout spel</h2>
        </CardHeader>
        <CardBody>
          <Image src="/images/scouts.png" width={150} height={150} className='w-full mb-8'/>
          <form className='flex flex-col items-center justify-center'>
            <Input
              type='email'
              placeholder='email@wosm.com'
              label='Email'
              className='w-full mb-4'
            />
            <Input
              type='password'
              placeholder='********'
              label='Password'
              className='w-full'
            />
            <Button
              className='w-full mt-4 bg-sweden hover:bg-sweden-dark'
              color='primary'
              auto
            >
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </main>
  )
}
