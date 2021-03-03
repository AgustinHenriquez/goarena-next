import Link from 'next/link'
import Image from 'next/image'

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
    filter === 'INSCRIPCIONES ABIERTAS'? active : {},
    filter === 'FINALIZADO'? active : {},
  ]
  return ( 
    <div className="tournamentList">
      <ul className="filter">
        <li id="todos" onClick={navHandler} style={filterStyles[0]}>TODOS</li>
        <li id="INSCRIPCIONES ABIERTAS"onClick={navHandler} style={filterStyles[1]}>PROXIMAMENTE</li>
        <li id="FINALIZADO" onClick={navHandler} style={filterStyles[2]}>FINALIZADOS</li>
      </ul>
    <div className="list">
      {tournaments.filter(tournament=> filter==='todos' || tournament.status === filter).map(tournament => (
        <Link href={'/torneos/' + tournament.id} key={tournament.id}>
          <a>
            <div className="item">
              <span className="badge">
              <Image src={`/badges/${tournament.media}.png`} alt="Tournament Badge" width={40} height={40}/>
              </span>
              <span className="info">
                <h3>{tournament.title}</h3>
                <span id="subTitle">
                  <h4>{tournament.league === 'SILPH LEAGUE TOURNAMENT'? "Silph League" : tournament.league}</h4>
                  <h4>{tournament.date}</h4>
                </span>
              </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
    </div>
   );
}
 
export default TournamentList;