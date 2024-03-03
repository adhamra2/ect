import { Button } from '@/components/ui/button'
import { BellDot, Search, Menu, User, Laptop } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-4 bg-white flex justify-between'>
        <div className='flex gap-2 border rounded-md p-2'>
            <Search className='h-5 w-5 hidden md:block'/>
            <input type="text" placeholder='Search...'  className='outline-none hidden md:block'/>
            <Laptop size={30} className='md:hidden' />
            <h1 className='font-bold md:hidden'>Tech Market Place</h1>
        </div>

        <div className='flex items-center gap-4'>
           <User className='text-gray-500'/>
           <Menu className=' md:hidden' />
           <Button className='hidden md:block'>Get Started</Button>
        </div>
    </div>
  )
}

export default Header