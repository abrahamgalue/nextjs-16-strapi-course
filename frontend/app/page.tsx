import { HeroSection } from '@/components/hero-section'
import { getHomePage } from '@/lib/strapi'

export async function generateMetadata() {
  const strapiData = await getHomePage()
  return {
    title: strapiData.title,
    description: strapiData.description,
  }
}

export default async function Home() {
  const data = await getHomePage()

  const [heroSection] = data?.sections || []

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={heroSection} />
    </main>
  )
}
