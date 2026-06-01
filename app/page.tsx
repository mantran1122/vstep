import HomeHeroIntro from '@/components/home/HomeHeroIntro'
import HomeInterviewSection from '@/components/home/HomeInterviewSection'
import HomeVisionSection from '@/components/home/HomeVisionSection'
import HomeBusinessSection from '@/components/home/HomeBusinessSection'
import LichThiSection from '@/components/home/LichThiSection'
import KeHoachNamSection from '@/components/home/KeHoachNamSection'


export default function Home() {
  return(
    <>
      <HomeHeroIntro />
      <HomeBusinessSection />
      {/* <HomeVisionSection /> */}
      {/* <HomeInterviewSection /> */}
      <LichThiSection />
      <KeHoachNamSection />
    </>
  )
}
