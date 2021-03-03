import Head from 'next/head'
import Link from 'next/link'

import Spotlight from '../../components/Spotlight'

import { tournaments } from "../api/tournamentState";

const Torneos = () => {
  const spotlightTournaments = tournaments.slice(0,4);

  return ( 
    <div className="torneos">
      <div className="spotlightTournaments">
        {spotlightTournaments.map((tournament) => (
          <Link href={'/torneos/' + tournament.id} key={tournament.id}>
            <a>
            <Spotlight tournament={tournament}/>
            </a>
          </Link>
        ))}
        
      </div>
    </div>
   );
}
 
export default Torneos;