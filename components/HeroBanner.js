import Image from 'next/image'
import { motion } from "framer-motion";

const HeroBanner = ({}) => {
  return ( 
    <div className="heroBanner">
      <motion.div initial={{x:-500}} animate={{x:0}} transition={{duration:2, delay:1, type:'spring'}}>
        <Image src="/azu.png" width={500} height={500}/>
      </motion.div>
      <motion.div className="title" initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}} transition={{duration:0.75}}>
        <svg width="370" height="54" viewBox="0 0 370 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9492 24.1367H42.3398V50.7852C39.0352 51.8633 35.918 52.6133 32.9883 53.0352C30.082 53.4805 27.1055 53.7031 24.0586 53.7031C16.3008 53.7031 10.3711 51.4297 6.26953 46.8828C2.19141 42.3125 0.152344 35.7617 0.152344 27.2305C0.152344 18.9336 2.51953 12.4648 7.25391 7.82422C12.0117 3.18359 18.5977 0.863281 27.0117 0.863281C32.2852 0.863281 37.3711 1.91797 42.2695 4.02734L38.6484 12.7461C34.8984 10.8711 30.9961 9.93359 26.9414 9.93359C22.2305 9.93359 18.457 11.5156 15.6211 14.6797C12.7852 17.8438 11.3672 22.0977 11.3672 27.4414C11.3672 33.0195 12.5039 37.2852 14.7773 40.2383C17.0742 43.168 20.4023 44.6328 24.7617 44.6328C27.0352 44.6328 29.3438 44.3984 31.6875 43.9297V33.207H21.9492V24.1367ZM101.262 27.2305C101.262 35.7383 99.1523 42.2773 94.9336 46.8477C90.7148 51.418 84.668 53.7031 76.793 53.7031C68.918 53.7031 62.8711 51.418 58.6523 46.8477C54.4336 42.2773 52.3242 35.7148 52.3242 27.1602C52.3242 18.6055 54.4336 12.0781 58.6523 7.57812C62.8945 3.05469 68.9648 0.792969 76.8633 0.792969C84.7617 0.792969 90.7969 3.06641 94.9688 7.61328C99.1641 12.1602 101.262 18.6992 101.262 27.2305ZM63.75 27.2305C63.75 32.9727 64.8398 37.2969 67.0195 40.2031C69.1992 43.1094 72.457 44.5625 76.793 44.5625C85.4883 44.5625 89.8359 38.7852 89.8359 27.2305C89.8359 15.6523 85.5117 9.86328 76.8633 9.86328C72.5273 9.86328 69.2578 11.3281 67.0547 14.2578C64.8516 17.1641 63.75 21.4883 63.75 27.2305ZM162.082 53L158.355 40.7656H139.617L135.891 53H124.148L142.289 1.39062H155.613L173.824 53H162.082ZM155.754 31.625C152.309 20.5391 150.363 14.2695 149.918 12.8164C149.496 11.3633 149.191 10.2148 149.004 9.37109C148.23 12.3711 146.016 19.7891 142.359 31.625H155.754ZM191.227 24.418H194.742C198.188 24.418 200.73 23.8438 202.371 22.6953C204.012 21.5469 204.832 19.7422 204.832 17.2812C204.832 14.8438 203.988 13.1094 202.301 12.0781C200.637 11.0469 198.047 10.5312 194.531 10.5312H191.227V24.418ZM191.227 33.2773V53H180.328V1.60156H195.305C202.289 1.60156 207.457 2.87891 210.809 5.43359C214.16 7.96484 215.836 11.8203 215.836 17C215.836 20.0234 215.004 22.7188 213.34 25.0859C211.676 27.4297 209.32 29.2695 206.273 30.6055C214.008 42.1602 219.047 49.625 221.391 53H209.297L197.027 33.2773H191.227ZM257.461 53H227.859V1.60156H257.461V10.5312H238.758V21.8164H256.16V30.7461H238.758V44H257.461V53ZM313.816 53H299.965L277.605 14.1172H277.289C277.734 20.9844 277.957 25.8828 277.957 28.8125V53H268.219V1.60156H281.965L304.289 40.0977H304.535C304.184 33.418 304.008 28.6953 304.008 25.9297V1.60156H313.816V53ZM358.254 53L354.527 40.7656H335.789L332.062 53H320.32L338.461 1.39062H351.785L369.996 53H358.254ZM351.926 31.625C348.48 20.5391 346.535 14.2695 346.09 12.8164C345.668 11.3633 345.363 10.2148 345.176 9.37109C344.402 12.3711 342.188 19.7891 338.531 31.625H351.926Z" fill="#EDF2F4"/>
        </svg>
        <motion.div className="lines" initial={{x:-100}} animate={{x:0}} transition={{duration:0.75}}>
          <div className="line1"/>
          <div className="line2"/>
          <div className="line3"/>
        </motion.div>
      </motion.div>
      <motion.div initial={{x:500}} animate={{x:0}} transition={{duration:2, delay:1, type:'spring'}}>
        <Image src="/Altaria.png" width={500} height={500}/>
      </motion.div>
    </div>

   );
}
 
export default HeroBanner;