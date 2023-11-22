import CreonPass from '@/components/CreonPass'
import MissionStatement from '@/components/MissionStatement'
import ProfitThrough from '@/components/ProfitThrough'
import ComingSoon from '@/components/CommingSoon'

function LargeScreen() {
  return (
    <div>
       {/* Arrangements for Large screen size */}
    <section className='hidden lg:inline'>
      <CreonPass/>
    </section>

    <section className=''>
      <ProfitThrough/>
    </section>

    <section className='hidden lg:inline'>
      <MissionStatement/>
    </section>

   <section className='hidden lg:inline'>
      <ComingSoon/>
    </section> 
    </div>
  )
}

export default LargeScreen