import { getStrapiData } from '@/lib/strapi'

export default async function Home() {
  const data = await getStrapiData('/api/home-page')

  const { title, description } = data?.data

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </main>
  )
}
