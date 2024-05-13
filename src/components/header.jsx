import { useEffect, useState } from "react";
import ig from "../assets/images/logo/ig.svg";
import lin from "../assets/images/logo/in.svg";
import whatsapp from "../assets/images/logo/whatsapp.svg";
import HeroSection from "./hero";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Header() {
  const [showNav,setShowNav] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=> {
    let ctx = gsap.context(()=> {
      gsap.to('.navbar', {
        scrollTrigger: {
          trigger: '.hero-cont',
          start: 'bottom 10%',
          toggleActions: "restart none reverse none",
        },
        duration: .2,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#4273c1',
        ease: 'Power2.inOut',
        zIndex: 90,
      });
    });

    return () => ctx.revert();
  }, []);

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
