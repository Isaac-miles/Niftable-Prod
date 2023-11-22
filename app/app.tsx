import Banner from '@/components/Banner'
import Header from '@/components/Header'
import CreonPass from '@/components/CreonPass'
import MissionStatement from '@/components/MissionStatement'
import ProfitThrough from '@/components/ProfitThrough'
import ComingSoon from '@/components/CommingSoon'
import ServicesOffered from '@/components/ServicesOffered'
import Footer from '@/components/Footer'
import BackgroundBanner from '@/components/BackgroundBanner'
import LargeScreen from '@/components/DisplayScreenSiizes/LargeScreen'
import MediumScreen from '@/components/DisplayScreenSiizes/MediumScreen'
function App() {


  return (
    <>
    <section className='relative bg-gradient-to-b h-screen '>
    <Header/>

    <div className='relative pl-4  mix-blend-mode: soft-light'>
      <Banner/>
     
    </div>
    </section>

      {/* <LargeScreen /> */}

      <LargeScreen/>
      
      {/* Medium screen */}
      <MediumScreen/>

     {/* dynamic page end section */}
    <section className='relative lg:h-[95vh]  '>
      <div className='relative pl-4  mix-blend-mode: soft-light'>
       <BackgroundBanner/>
       </div>
    </section>

    <section className='xsm:mt-[36rem] xxsm:mt-[32rem] xlmd:mt-[32rem] lg:mt-[10rem] xl:mt-4'>
      <Footer/>
    </section>
    </>

   
  )
}

export default App