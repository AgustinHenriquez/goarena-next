import Image from 'next/image'

const FeaturedTournament = ({tournament}) => {
  const {title, media} = tournament;
  return ( 
    
      
      <div className="featuredTournament" style={{backgroundImage:`url(/backgrounds/${media}.jpg)`}}>
        <div className="back1"></div>
        <div className="back2"></div>
        <div className="back3"></div>
        <Image className="badge" src={`/badges/${media}.png`} alt="Tournament Badge" width={120} height={120}/> 
        <h1 className="title">{title}</h1>
      
      </div>
    
   );
}
 
export default FeaturedTournament;