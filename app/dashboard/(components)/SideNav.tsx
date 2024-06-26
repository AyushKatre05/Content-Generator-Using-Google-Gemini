"use client"
import { FileClock, HomeIcon, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
    const MenuList = [
        {
            name:'Home',
            icon:HomeIcon,
            path:'/dashboard'
        },
        {
            name:'History',
            icon: FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon: WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon: Settings,
            path:'/dashboard/setting'
        },
    ]

    const path = usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center m-1.25'>
        <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
        </div>
        <hr className='my-5 border'/>
        <div className='mt-10'>
            {
                MenuList.map((menu,index)=>(
                    <div className={`flex cursor-pointer gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg items-center ${path==menu.path && 'bg-primary text-white'}`}>
                        <menu.icon/>
                        <h1>{menu.name}</h1>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SideNav