import {HorizontalCardInformation} from '@/util/statements'
import BasicHorizontalCard from './ui-utils/basicHorizontalCard'

function ServicesOffered() {
 
  return (

    <div className='  w-full content-center  bg-black'>
      
       <div className="group w-full px-0 pt-10 pb-12 xsm:overflow-x-scroll xsm:p-0 " >

          <div className="flex-row space-x-2 sm:space-y-2 w-full xsm:flex" >
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

export default ServicesOffered