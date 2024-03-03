import { BadgeIcon, BookOpen, GraduationCap, Laptop } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {
  const menu=[
    {
        id:1,
        name:'All Courses',
        icon:BookOpen,
    },
    {
        id:2,
        name:'MemberShip',
        icon:BadgeIcon,
    },
    {
        id:3,
        name:'Be Instructor',
        icon:GraduationCap,
    },
  ]

  return (
    <div className='p-5 bg-white shadow-sm border h-screen hidden md:block'>
        <div className='flex items-center flex-wrap'>
            <Laptop size={35} />
            <h1 className='ml-3 font-bold'>Tech Market Place</h1>
        </div>
        <hr className='mt-7'></hr>
        <div className='mt-5'>
            {menu.map((item,index) => (
                <div key={index} className='group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200'>
                    <item.icon className='group-hover:animate-bounce'/>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav