import Chats from './Chats'
import Image from 'next/image'

const Hero = () => {
  return ( 
    
    <div className="hero">
      <div className="title">
        <h1>CLUB DE POKÉMON GO PVP</h1>
        <h3>Torneos, información, práctica</h3>
        <h3>todo lo necesario para ser el mejor.</h3>
      </div>
      <Chats/>
    </div>
   );
}


 
export default Hero;