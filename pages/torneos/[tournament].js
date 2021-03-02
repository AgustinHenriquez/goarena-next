import TournamentPage from '../../components/TournamentPage'
import {tournaments} from '../api/tournamentState'
import { useRouter } from 'next/router'

const Tournament = () => {
  const router = useRouter()
  const data = tournaments.find(tournament => tournament.id === router.query.tournament);
  return ( 
    <TournamentPage tournament={data} />
   );
}
 
export default Tournament;