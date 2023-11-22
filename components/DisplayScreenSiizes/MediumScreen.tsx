import CreonPass from '@/components/CreonPass'
import MissionStatement from '@/components/MissionStatement'
import ProfitThrough from '@/components/ProfitThrough'
import ServicesOffered from '@/components/ServicesOffered'


function MediumScreen() {
  return (
    <div>
       <section className='lg:hidden'>
      <MissionStatement/>
      </section>

      <section className='lg:hidden'>
        <ProfitThrough/>
      </section>

     <section className='lg:hidden'>
      <ServicesOffered/>
      </section> 

    <section className='lg:hidden'>
      <CreonPass/>
    </section>
    </div>
  )
}

export default MediumScreen