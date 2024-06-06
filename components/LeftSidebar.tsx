"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const constans = [
    {
        route:'/profile',
        label:'profile',
        imgUrl:'/icons/profile.svg'
    }
]
const LeftSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href="/" className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'><Image src="/icons/logo.svg" width={23} height={27} alt='logo'/>
            <h1 className='text-24 font-extrabold text-white-1 max-lg:hidden'>Podcaster</h1>
            </Link>
            {sidebarLinks.map((item,index)=>{
                const isActive = item.route === pathname || pathname.startsWith(`${item.route}/`);
                return(
                    <Link href={item.route} key={index} className={cn(' flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',{"bg-nav-focus border-r-4 border-orange-1":isActive})}> <Image src={item.imgURL} width={24} height={24} alt='logo'/>{item.label}</Link>
                )
            })}
        </nav>
    </section>
  )
}

export default LeftSidebar