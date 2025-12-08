import { HeroSection } from '@/components/hero-section'
import { getHomePage } from '@/lib/strapi'

export default async function Home() {
  const data = await getHomePage()

  const [heroSection] = data?.sections || []

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={heroSection} />
    </main>
  )
}
