import localFont from 'next/font/local'
import Image from 'next/image'
import { listItems, writeUpsFromDb } from '@/util/statements'
const monumentExtendedFont = localFont({src:'../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../util/fonts/satoshi/Satoshi-Regular.ttf'})

function CreonPass() {

  const bgImage = new URL(`/public/img/Video.png`, import.meta.url).href
 
  return (
  <div className='creonPass'>

     <div className="group bg-black " >
    
        <div  className="flex flex-col items-start space-y-4  md:space-y-2.5 p-2 mb-6">
        <h1 className={`${monumentExtendedFont.className} bannerHeading  pb-10 border-x-0 border-b-2 border-[#13171d]`}>{writeUpsFromDb.creonTitle}</h1>
        <div className={`${satoshi.className} !hidden lg:!inline  bannerParagraph bannerParagraphExtra w-[85%] pt-2 pl-0 `}>{writeUpsFromDb.creonStatement}</div> 
        <div className={`${satoshi.className} lg:hidden bannerParagraph bannerParagraphExtra w-[85%] pt-2 pl-0 `}>{writeUpsFromDb.missionSubStatementI}</div> 
        </div>

          {/* Image for small screen can also be dynamic */}
        <div className="xxsm:hidden  md:hidden lg:hidden flex-col justify-center items-start bg-black " >
            <div  className="">
              <Image
              width={500}
              height={500}
              src={bgImage}
              alt="banner logo" 
              // objectFit="cover" 
              sizes="100%"
              priority/> 
            </div>
        </div> 

        {/* For Large screens below */}

        <div className={`${satoshi.className} flex-col w-full p-1 lg:hidden space-y-2`}>

          <div className="border border-[#13171d] px-1 text-white rounded">
            {writeUpsFromDb.missionSubStatementII}
          </div>

          <div className='flex   space-x-1 xsm:space-y-1  sxm:flex-col '>
          <div className="flex-initial  px-1  border border-[#13171d] text-white rounded">{writeUpsFromDb.missionSubStatementIII}</div>
          <div className="flex-initial  px-1 border border-[#13171d] text-white rounded">{writeUpsFromDb.missionSubStatementIv}</div>
          </div>  
        </div>
         
         <ul className={`${satoshi.className} hidden  lg:flex flex-col  w-[85%]   `}>
          {listItems.map((item, i)=>(
            <li key={i} className='bannerParagraph font-normal inline-block mb-2 rounded text-white p-2 border  border-[#13171d]'>
            {item}</li>
          ))} 
         </ul>

         <button  className={`${satoshi.className} creonBtn capitalize text-white text-center my-16 `}>Buy Creon Pass</button>

      </div> 

        <div className="xsm:hidden flex-col justify-center items-start bg-black" >
            <div  className="">
              <Image
              width={700}
              height={800}
              src={bgImage}
              alt="banner logo" 
              // objectFit="cover" 
              sizes="100%"
              priority/> 
            </div>
        </div> 
  
  </div>
  )
}

export default CreonPass