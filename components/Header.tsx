'use client'
import {useState} from 'react'
import { ListStyleFromDataBase } from "@/util/statements";
import MobileMenu from './ui-utils/mobileMenu';
import Image from "next/image"
import { FaBars } from "react-icons/fa6";
import ListStyleHorizontal from './ui-utils/listStyleHorizontal';
import localFont from 'next/font/local'
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})


const Header = () => {

  const [toggle, setToggle] = useState(false)
    const brandImage = new URL(`/public/Logo.svg`, import.meta.url).href

 
  return (
   <header className=" z-40" >

    <div className="flex items-center space-x-2 md:space-x-10 ">
      <Image 
      src={brandImage}
      alt="niftables"
      width={100}
      height={100}
      priority
      className="cursor-pointer object-contain w-auto h-auto"/>
     
    </div>
    <div className="flex items-center space-x-2 text-sm font-light ">
    
    <ul   className={`${satoshi.className} hidden space-x-20 md:flex lg:flex lg:mr-20  `}>
          {ListStyleFromDataBase.map((style)=>(
            <ListStyleHorizontal key={style.id} title={style.name} comingSoon={style.live}/>
          ))}
    </ul>
    { !toggle && <button className={`${satoshi.className} w-20 h-7 border px-3 py-0 rounded  `} >connect</button>}

      {!toggle && ( <div  className='lg:hidden  m-2 w-[44px]' onClick={()=>{setToggle(true)}}>
              <button type="button" className='p-1  rounded-sm '>
              <FaBars className="lg:hidden   w-7 h-7 bg-white text-black p-1 rounded" /></button>
            </div>)}
    </div>

    {toggle && <MobileMenu toggle={toggle} setToggle={setToggle}/>}
    </header>
    
  )
}

export default Header