import Image from 'next/image'
import localFont from 'next/font/local'

const monumentExtendedFont = localFont({src:'../../util/fonts/monumentExtended/MonumentExtended-Regular.otf'})
const satoshi = localFont({src:'../../util/fonts/satoshi/Satoshi-Regular.ttf'})

type CardProps = {
 readonly imageSource:string
 readonly writeUp:string
 readonly title:string
 readonly summary:string
 readonly comingSoon:boolean

}
function BasicVerticalCard({title, summary, imageSource,writeUp,comingSoon}:CardProps) {
  return (
          <div 
               className="relative flex-col nifxl:w-[65%] max-w-5xl bg-[#13171d99] mx-1 border-0  rounded-md  xsm:mt-5 xsm:w-full xxsm:w-full xxsm:mt-5 ">
                {comingSoon && <span className='absolute -top-2 nifxl:!left-60 lg:!left-[12rem] xl:!left-32 xsm:!left-20 xxsm:!left-24  xlmd:!left-[10rem]   mx-2 uppercase text-center py-0 px-2 bg-white text-[#000000] text-[10px] rounded-2xl border-transparent'>coming soon</span>}
                <div className='mx-3'>
                <h2 className= {`${monumentExtendedFont.className} bannerParagraph text-white mb-1 mt-2 `}>{title}</h2>
                <div className={`${satoshi.className} bannerParagraph bannerParagraphExtra mb-4 !text-[18px] xsm:pl-10 xsm:pr-0 pt-2 lg:pl-0`}>
                {summary}
                </div> 
       
              <div className="relative h-28 min-w-[180px] sm:min-w-[100px] xxsm:!min-w-[180px]  cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 ">
                <Image 
                src={`/${imageSource}`}
                alt={title}
                fill={true} 
                sizes="100%"
                className="rounded-sm object-cover md:rounded"/>
              </div>

                  <div  className= {`${satoshi.className}  text-white text-sm p-2 `}>{writeUp}</div>
                </div>
          </div>
          
  )
}

export default BasicVerticalCard