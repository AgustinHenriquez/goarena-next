import Head from 'next/head'
import Link from 'next/link'

import Spotlight from '../../components/Spotlight';
import TournamentList from '../../components/TournamentList';
import { tournaments } from "../api/tournamentState";

const Torneos = () => {
  const spotlightTournaments = tournaments.slice(0,4);

  return ( 
    <div className="torneos">
      <h1>TORNEOS DESTACADOS</h1>
      <div className="spotlightTournaments">
        {spotlightTournaments.map((tournament) => (
          <Link href={'/torneos/' + tournament.id} key={tournament.id}>
            <a>
            <Spotlight tournament={tournament}/>
            </a>
          </Link>
        ))}
      </div>
      <TournamentList />
    </div>
   );
}
 
export default Torneos;