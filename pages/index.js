import Hero from "../components/Hero"
import HeroBanner from "../components/HeroBanner"

export default function Home() {
  return (
    <div className="contentwraper">
      <HeroBanner/>
      <Hero/>  
    </div>
  )
}
