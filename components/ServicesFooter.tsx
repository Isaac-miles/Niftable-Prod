import {HorizontalCardInformation} from '@/util/statements'
import BasicHorizontalCard from './ui-utils/basicHorizontalCard'

function ServicesOfferedFooter() {
 
  return (

    <div className='absolute flex  top-0  w-full content-center  lg:px-0 lg:pl-8  '>
    
       <div className="group w-full  pb-1 xsm:overflow-x-scroll xsm:p-0 lg:mx-12" >

          <div className="flex-row space-x-1 sm:space-y-2 w-full xsm:flex" >
              {HorizontalCardInformation.map((card) => (
            <BasicHorizontalCard
              key={card.id}
              title={card.title}
              writeUp={card.writeup}
              imageSource={card.imageSource}
              comingSoon={card.comingSoon}
            />
          ))}           
                  
          </div> 
        </div> 
    </div>

    )
}

export default ServicesOfferedFooter