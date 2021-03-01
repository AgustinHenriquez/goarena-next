import Hero from "../components/Hero"
import HeroBanner from "../components/HeroBanner"
import FeaturedTournament from "../components/FeaturedTournament"

import { mainTournament } from "./api/tournamentState";

export default function Home() {
  return (
    <div className="contentwraper">
      <HeroBanner/>
      <Hero/>  

    </div>
  )
}
