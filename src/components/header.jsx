import ig from "../assets/images/logo/ig.svg";
import lin from "../assets/images/logo/in.svg";
import whatsapp from "../assets/images/logo/whatsapp.svg";
import HeroSection from "./hero";
export default function Header() {
  return (
    <>
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
        <span class="material-symbols-outlined b-mnu">menu</span>
      </nav>
      <HeroSection />
    </>
  );
}
