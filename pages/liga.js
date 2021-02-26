import Image from 'next/image'
import Competitor from '../components/Competitor'

import { useState } from 'react';
import { competitorState } from './api/ligaState' 


const Liga = () => {
  const[competitors, setCompetitors] = useState(competitorState)
  return ( 
    <div>
      <div>
      <h2>LIGA</h2>
      <Image src="/logo.png" width={83} height={70} />
      </div>
      
      <ul className="standings"></ul>
        {competitors.map((competitor) => (
          <Competitor nick={competitor.nick} wins={competitor.stats.wins} loses={competitor.stats.losses} key={competitor.nick}/>
        ))}
    </div>
   );
}
 
export default Liga;