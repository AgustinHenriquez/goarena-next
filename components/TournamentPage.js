import Image from 'next/image'
import Podium from '../components/Podium'

const TournamentPage = ({ tournament }) => {
  const {title, status, media, league, round, date, format, description, link, chat, results} = tournament;
  return ( 
    <div className="tournamentPage">
      
      <div className="league">
        <h3>{league}</h3>
      </div>
      
      <div className="title" style={{backgroundImage:`url(/backgrounds/${media}.jpg)`}}>
        <div className="overlay"></div>
        <Image className="badge" src={`/badges/${media}.png`} alt="Tournament Badge" width={120} height={120}/>
        <h1>{title}</h1>
      </div>
      
      
      <div className="info">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z"/></svg>
          <h4>RONDAS</h4>
          <h2>{round}</h2>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm6.687 13.482c0-.802-.418-1.429-1.109-1.695.528-.264.836-.807.836-1.503 0-1.346-1.312-2.149-2.581-2.149-1.477 0-2.591.925-2.659 2.763h1.645c-.014-.761.271-1.315 1.025-1.315.449 0 .933.272.933.869 0 .754-.816.862-1.567.797v1.28c1.067 0 1.704.067 1.704.985 0 .724-.548 1.048-1.091 1.048-.822 0-1.159-.614-1.188-1.452h-1.634c-.032 1.892 1.114 2.89 2.842 2.89 1.543 0 2.844-.943 2.844-2.518zm4.313 2.518v-7.718h-1.392c-.173 1.154-.995 1.491-2.171 1.459v1.346h1.852v4.913h1.711z"/></svg>
          <h4>FECHA</h4>
          <h2>{date}</h2>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
          <h4>FORMATO</h4>
          <h2>{format}</h2>
        </div>
      </div>

      <div className="description">
        <h4>{description}</h4>
      </div>
      {status==="INSCRIPCIONES ABIERTAS" &&(
        <div className="links">
          <a href={link} target="_blank"><button id="rsvp">INSCRIPCIÓN</button></a>
          <a href={chat} target="_blank"><button id="chat">CHAT</button></a>
        </div>
      )}

      {status==="FINALIZADO" &&(
        <div className="results">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 0c0 9.803 5.105 12.053 5.604 16h2.805c.497-3.947 5.591-6.197 5.591-16h-14zm7.006 14.62c-.408-.998-.969-1.959-1.548-2.953-1.422-2.438-3.011-5.162-3.379-9.667h9.842c-.368 4.506-1.953 7.23-3.372 9.669-.577.993-1.136 1.954-1.543 2.951zm-.006-3.073c-1.125-2.563-1.849-5.599-1.857-8.547h-1.383c.374 3.118 1.857 7.023 3.24 8.547zm12-9.547c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076zm-24 0c.372 4.105 2.808 8.091 6.873 9.438-.297-.552-.596-1.145-.882-1.783-2.915-1.521-4.037-4.25-4.464-6.251h2.688c-.058-.449-.102-.922-.138-1.404h-4.077zm13.438 15h-2.866c-.202 1.187-1.63 2.619-3.571 2.619v4.381h10v-4.381c-1.999 0-3.371-1.432-3.563-2.619zm2.562 6h-8v-2h8v2z"/></svg>
          <Podium results={results}/>
          <div className="links">
            <a href={`https://silph.gg/tournaments/host/`+ link.slice(-4)} target="_blank"><button id="resultsLink">RESULTADOS</button></a>
            <a href="https://silph.gg/c/74365a42/leaderboard" target="_blank"><button id="resultsLink">RANKING</button></a>
          </div>
        </div>
      )}
    </div>
   );
}
 
export default TournamentPage;