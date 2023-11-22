import {VerticalCardInformation} from '@/util/statements'
import BasicVerticalCard from './ui-utils/basicVerticalCard'
function ComingSoon() {

  return (
    <div className='relative top-0 grid w-full content-center lg:mb-12  nifxl:px-[80px] bg-transparent'>
  
       <div className="group w-full px-0 pt-3 pb-1 overflow-x-scroll xsm:p-0 " >

          <div className="flex nifxl:flex-row  lg:flex-row w-full " >
              {VerticalCardInformation.map((card) => (
            <BasicVerticalCard
              key={card.id}
              title={card.title}
              summary={card.summary}
              writeUp={card.writeup}
              imageSource={card.imageSource}
              comingSoon={card.comingSoon}
            />
          ))}           
                  
          </div> 
        </div> 
    </div>
    // <div className='grid w-full content-center   nifxl:px-[80px]  pt-8 bg-black'>
  
    //    <div className="group w-full  bg-pink-500 px-10 pt-10 pb-12 overflow-x-scroll xsm:p-0 " >

    //       <div className="flex nifxl:flex-row  lg:flex-row w-full " >
    //           {VerticalCardInformation.map((card) => (
    //         <BasicVerticalCard
    //           key={card.id}
    //           title={card.title}
    //           summary={card.summary}
    //           writeUp={card.writeup}
    //           imageSource={card.imageSource}
    //           comingSoon={card.comingSoon}
    //         />
    //       ))}           
                  
    //       </div> 
    //     </div> 
    // </div>
    )
}

export default ComingSoon