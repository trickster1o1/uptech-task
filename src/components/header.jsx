import { useState } from "react";
import ig from "../assets/images/logo/ig.svg";
import lin from "../assets/images/logo/in.svg";
import whatsapp from "../assets/images/logo/whatsapp.svg";
import HeroSection from "./hero";
export default function Header() {
  const [showNav,setShowNav] = useState(false);
  return (
    <>
      <div className="mob-nav" style={showNav ? {'display':'flex'}: {'display':'none'}}>
        <span class="material-symbols-outlined cl-nav" onClick={()=>setShowNav(false)}>close</span>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Serices</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="top-header">
        <div>
          <span>Mon-Fri: 9AM - 5pm</span>
          <span>yourbusiness@business.com</span>
        </div>
        <div>
          <img src={ig} alt="IG" />
          <img src={lin} alt="IG" />
          <img src={whatsapp} alt="IG" />
        </div>
      </div>
      <nav className="navbar">
        <div>Business Logo</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Serices</li>
          <li>Contact</li>
        </ul>
        <span class="material-symbols-outlined b-mnu" onClick={()=>setShowNav(true)}>menu</span>
      </nav>
      <HeroSection />
    </>
  );
}
