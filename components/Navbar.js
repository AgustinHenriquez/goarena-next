import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'



const Navbar = () => {
  const[navbar, setNavbar] = useState([{isSliderOn : false}])


  const sliderToggle = () => {
    setNavbar({isSliderOn : !navbar.isSliderOn})
  }

  return ( 
    <nav>
        <div className="logo">
         <Link href="/"><Image src="/logo.png" width={83} height={70} /></Link>
        </div>
        <ul className={`nav-links ${navbar.isSliderOn ? 'nav-active' : ''}`}>
          <li style={{animationName: "navLinkFade 0.5s ease fowards 2s"}}>
            <Link href="/"><a>HOME</a></Link>
          </li>
          <li>
            <Link href="/torneos"><a>TORNEOS</a></Link>
          </li>
          <li>
            <Link href="/liga"><a>LIGA</a></Link>
          </li>
          <li>
            <Link href="/guias"><a>GUÍAS</a></Link>
          </li>
        </ul>
        <div className={`burger ${navbar.isSliderOn ? 'toggle' : ''}`} onClick={sliderToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
    </nav>
   );
}
 
export default Navbar
