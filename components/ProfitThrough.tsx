import localFont from 'next/font/local'
import Image from 'next/image'
import { ProfitThroughStatement} from '@/util/statements'
const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})

function ProfitThrough() {

  const bgImage = new URL(`/public/img/creonLogo.png`, import.meta.url).href
  const bgImageSM = new URL(`/public/img/creonlogoSM.png`, import.meta.url).href
 
  return (
  <div className='grid w-full content-center  px-24 lg:px-16 nifxl:px-[80px] xlmd:px-2 py-8 '>

     <div className="group w-full md:-ml-2 bg-black px-0 pb-12 xsm:overflow-x-hidden xsm:p-0 " >
    
        <div  className="flex flex-col items-end space-y-4 md:space-y-2.5 p-2 mb-6">
        <h1 className={`${monumentExtendedFont.className} bannerHeading self-start`}>Profiting Through</h1>
        <span className={`${monumentExtendedFont.className} bannerParagraph bannerParagraphExtra !text-[22px] xsm:pl-10 xsm:pr-0 pt-2 lg:pl-0 uppercase`}>AI Innovation & Decentralization</span> 
        </div>

        <div className="flex nifxl:flex-row  lg:flex-row w-full  xxsm:flex-col xsm:flex-col" >
            <div  className=" w-[80%] mr-3 xsm:px-1  xsm:w-full xxsm:w-full ">

            <div className='hidden nifxl:inline w-full xsm:w-[100%] xsm:mb-10'>
              <Image
              width={947}
              height={549}
              src={bgImage}
              alt="banner logo" 
              className='rounded-sm'
              sizes="100%"
              priority/> 
            </div>

            <div className='nifxl:hidden w-full px-10'>
              <Image
              width={650}
              height={500}
              src={bgImageSM}
              alt="banner logo" 
              className='rounded-sm'
              sizes="100%"
              priority/> 
              </div>
            </div>
              
            <div 
             className="flex flex-col w-[65%]  md:p-2  border-x-2  border-[#13171d]  xsm:mt-5 xsm:w-full xxsm:w-full xxsm:mt-5 xsm:border-y-2  xsm:border-x-0 xxsm:border-y-2 xxsm:border-x-0">
              <div className='mx-3'>
              <h2 className= {`${satoshi.className} bannerParagraph text-white mb-4 `}>{ProfitThroughStatement.title}</h2>
                <div  className= {`${satoshi.className}  text-white text-sm `}>{ProfitThroughStatement.summary}
            </div>
              </div>
            </div>
        </div> 
      </div> 
  </div>
  )
}

export default ProfitThrough