import { HeroSection } from '~/components/hero-section'
import { Testimonials } from '~/components/testimonials'
import { SponsorSection } from '~/components/sponsor-section'
import { BottomHeroSection } from '~/components/bottom-hero-section'
import { ExampleSection } from '~/components/examples'
import { CommunitySection } from '~/components/community-section'
// import { ProSection } from '~/components/pro-section'

export default function Page() {
  return (
    <>
      <HeroSection />
      <BottomHeroSection />
      <ExampleSection />
      <Testimonials />
      <SponsorSection />
      <CommunitySection />
      {/* <ProSection /> */}
    </>
  )
}
