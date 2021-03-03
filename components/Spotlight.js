import Image from 'next/image'

const Spotlight = ({tournament}) => {
  const {title, media, date, round, status} = tournament;
  let statusColor = '#999'
  if (status === "INSCRIPCIONES ABIERTAS") {
    statusColor = '#1AB859'
  } else if (status === "FINALIZADO") {
    statusColor = '#EF233C'
  }
  return ( 
    <div className="spotlight">
      <div className="image" style={{backgroundImage:`url(/backgrounds/${media}.jpg)`}}>
        <div className="overlay"></div>
        <span className="status" style={{backgroundColor: statusColor}}>{status}</span>
        <Image className="badge" src={`/badges/${media}.png`} alt="Tournament Badge" width={90} height={90}/> 
      </div>
      <div className="title">
        <h2>{title}</h2>
        <h4>{date + ' • ' + round}</h4>
      </div>
    </div>
   );
}
 
export default Spotlight;