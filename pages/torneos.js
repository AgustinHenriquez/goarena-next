import Head from 'next/head'

import TournamentPage from '../components/TournamentPage'

import { mainTournament } from "./api/tournamentState";

const Torneos = () => {
  return ( 
    <div>
      <TournamentPage tournament={mainTournament}/>
    </div>
   );
}
 
export default Torneos;