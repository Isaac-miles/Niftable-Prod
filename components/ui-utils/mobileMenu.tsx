import {Dispatch,SetStateAction} from 'react'
import { ListStyleFromDataBase } from "@/util/statements";
import localFont from "next/font/local";
import ListStyleVertical from "./listStyleVertical";
import {HiOutlineXMark } from "react-icons/hi2";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";

const satoshi = localFont({
  src: "../../util/fonts/satoshi/Satoshi-Regular.ttf",
});

type Props ={
  toggle:boolean,
  setToggle:Dispatch<SetStateAction<boolean>>
}

function MobileMenu({toggle,setToggle}:Props) {
  return (
    <div className="fixed bg-black/50 w-full h-screen z-20 left-0 top-0 ">
      <div className="flex-col space-y-4 bg-black w-[60%] h-screen float-right">

        <div className=' flex justify-between items-center pl-4 pr-1 w-full h-16'>
              <button
                className={`${satoshi.className}   w-20 h-[1.8rem] border rounded `}
              >
                connect
              </button>
              
              {toggle && (<div  className='mt-2'  onClick={()=>{setToggle(false)}}>
                    <button type="button" className='w-7  rounded-sm bg-[#3D8BFF]'>
                      <HiOutlineXMark className='text-4xl font-bold w-7 h-6 p-1 rounded text-white'/></button>
                  </div>)}
        </div>

        <div className='flex-col justify-between items-center pl-2 p-2  w-full'>

              <ul   className={`${satoshi.className} flex-col   `}>
                {ListStyleFromDataBase.map((style)=>(
                  <ListStyleVertical key={style.id} title={style.name} comingSoon={style.live}/>
                ))}
            </ul>
        </div>



         
      <div  className='relative flex top-[40%] p-4  items-center'>

        <ul className='flex gap-4 m-2 text-white'>
          <li><RiTelegramLine className='text-white text-2xl'/></li>
         <span className='border-2 border-white rounded-full p-1'><li><FaDiscord className='text-white text-sm'/></li></span> 
          <li><TiSocialTwitterCircular className='text-white text-2xl'/></li>
       </ul>
    </div>
     
     
      </div>
    </div>
  );
}

export default MobileMenu;
