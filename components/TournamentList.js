import {tournaments} from '../pages/api/tournamentState'
import {useState} from 'react'
const TournamentList = () => {
  const [filter, setFilter] = useState('todos');
  const navHandler = (event) => {
    setFilter(event.target.id)
  }
  const active = { borderBottom: '5px solid #ef233c', fontWeight: '700' }
  const filterStyles = [
    filter === 'todos'? active : {},
    filter === 'proximamente'? active : {},
    filter === 'finalizados'? active : {},
  ]
  return ( 
    <div className="tournamentList">
      <ul className="filter">
        <li id="todos" onClick={navHandler} style={filterStyles[0]}>TODOS</li>
        <li id="INSCRIPCIONES ABIERTAS"onClick={navHandler} style={filterStyles[1]}>PROXIMAMENTE</li>
        <li id="FINALIZADO" onClick={navHandler} style={filterStyles[2]}>FINALIZADOS</li>
      </ul>
    <div className="list">
      {tournaments.filter(torneo=> filter==='todos' || torneo.status === filter).map(tournament => (
        <h1>{tournament.title}</h1>
      ))}
    </div>
    </div>
   );
}
 
export default TournamentList;