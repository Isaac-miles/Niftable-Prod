import Image from 'next/image'
import localFont from 'next/font/local'

const monumentExtendedFont = localFont({src:'../../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../../util/fonts/satoshi/Satoshi-Regular.ttf'})

type CardProps = {
 readonly imageSource:string
 readonly writeUp:string
 readonly title:string
 readonly comingSoon:boolean

}
function BasicHorizontalCard({title,imageSource,writeUp,comingSoon}:CardProps) {
  return (
          <div  className="lg:w-full flex flex-row xsm:flex-col max-w-5xl bg-[#13171d99] mx-1 border-0  rounded-md  xsm:mt-5 xsm:w-full xxsm:w-full xxsm:mt-5 ">

              <div className="hidden xsm:inline relative h-40 w-[300px] min-w-[180px] sm:min-w-[100px] xxsm:!min-w-[180px]  cursor-pointer  md:min-w-[260px]  ">    
                <Image 
                src={`/${imageSource}`}
                alt={title}
                fill={true} 
                sizes="100%"
                className="rounded-sm object-cover md:rounded-t-lg"/>
              </div>

               <div className='mx-3 min-w-[180px] sm:min-w-[100px] xxsm:!min-w-[180px]'>
                <h2 className= {`${monumentExtendedFont.className} pl-2 md:text-[18px] lg:text-[28px] nifxl:!text-[34px] text-white mb-1 mt-2 `}>{title}</h2>
    
                  <div  className= {`${satoshi.className}  text-white text-sm p-2 `}>{writeUp}</div>
              </div>
                
              <div className="relative  min-w-[180px] sm:min-w-[100px] xxsm:!min-w-[180px] cursor-pointer   md:min-w-[260px] ">
                <Image 
                src={`/${imageSource}`}
                alt={title}
                fill={true} 
                sizes="100%"
                className="rounded-r-md object-cover md:rounded-r-md "/>
              </div>
           
          </div>
          
  )
}

export default BasicHorizontalCard