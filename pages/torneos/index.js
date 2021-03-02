import Head from 'next/head'
import Link from 'next/link'

import { tournaments } from "../api/tournamentState";

const Torneos = () => {
  return ( 
    <div>
      {tournaments.map(tournament => (
        <Link href={'/torneos/' + tournament.id} key={tournament.id}>
          <a>
            <h3>{tournament.title}</h3>
          </a>
        </Link>
      ))}
    </div>
   );
}
 
export default Torneos;