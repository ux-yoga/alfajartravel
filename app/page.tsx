import Navbar from "@/Components/Molecules/Navbar/page"
import Hero from "@/Components/Organisms/Hero/page"
import Tentang from "@/Components/Organisms/Tentang/page"
import Price from "@/Components/Organisms/Price/page"
import Testimoni from "@/Components/Organisms/Testimoni/page"
import Footer from "@/Components/Organisms/Footer/page"
import { getHomePageContent } from "@/lib/content/loaders"

export default async function Home() {
  const content = await getHomePageContent()

  return (
    <section>
        <Navbar content={content.navbar} />
        <Hero content={content.hero} />
        <Tentang content={content.about} />
        <Price content={content.pricing} />
        <Testimoni content={content.testimonials} />
        <Footer content={content.footer} />
    </section>
  )
}
