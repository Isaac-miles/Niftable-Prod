import localFont from 'next/font/local'
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";

const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})


function Footer() {

  const year = new Date().getFullYear()

  return (
    // <div className='fixed flex justify-around bg-black/50 w-full h-15 z-20 '>
    <div className={`${satoshi.className} flex xsm:flex-col sxm:items-center justify-between  bg-black w-full -mt-4 lg:px-20`}> 

      <div  className='flex items-center '>
        <ul className='flex gap-4  text-white'>
          <li>&copy; Creon {year}. All rights reserved</li>
       </ul>
    </div>

      <div  className='flex items-center lg:-ml-40'>
        <ul className='flex gap-4 m-2 text-white'>
          <li><RiTelegramLine className='text-white text-2xl'/></li>
         <span className='border-2 border-white rounded-full p-1'><li><FaDiscord className='text-white text-sm'/></li></span> 
          <li><TiSocialTwitterCircular className='text-white text-2xl'/></li>
       </ul>
    </div>

    <div id='info' className='leg:flex  md:flex items-center'>
      <ul className='flex gap-8 m-2 text-white'>
        <li className={`${satoshi.className} flex  gap-2  items-center text-[14px]`} >powered by<span className={`${monumentExtendedFont.className} text-[14px] uppercase`}>Niftables</span></li> 
      </ul>
      </div>
    </div>
  )
}

export default Footer

