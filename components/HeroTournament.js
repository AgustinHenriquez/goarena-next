import Image from 'next/image'

const HeroTournament = ({}) => {
  return ( 
    <div className="heroTournament">
      <Image src="/azu.png" width={500} height={500}/>
      <h1>GO ARENA</h1>
      <Image src="/Altaria.png" width={500} height={500}/>
    </div>

   );
}
 
export default HeroTournament;