'use client'
import Image from "next/image"
import localFont from 'next/font/local'
import ComingSoon from "./CommingSoon"
import ServicesOfferedFooter from "./ServicesFooter"
const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})


const BackgroundBanner = () => {

    const bannerImage = new URL(`/public/img/footerBGImage.png`, import.meta.url).href
 

return (
 
  <div className="flex  flex-col -w-[300px]  md:space-x-4 lg:justify-center items-start md:items-start  ">
      <div className="absolute top-0 left-0 w-screen lg:h-[95vh] -z-10">
        <Image 
        fill={true} 
        src={bannerImage}
        alt="banner logo" 
        sizes="100%"
         priority/> 
           
      </div> 
      
    <div className="hidden md:hidden lg:inline  absolute top-0  w-[90%]  ">
    {/* <div className="hidden md:hidden lg:inline  absolute  w-[90%] top-0 bg-transparent"> */}
          <ServicesOfferedFooter/>

    </div>

    <div className="lg:hidden  absolute top-0  w-[97%] ">
          <ComingSoon/>
    </div>

      
  </div>
   

 
  )

}

export default BackgroundBanner