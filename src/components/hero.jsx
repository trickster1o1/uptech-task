import { useState } from "react";
import plumbing from "../assets/images/PLUMBING.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p7.jpg";

export default function HeroSection() {
  const images = [plumbing, p4, p5];
  const [heroImg, setHeroImg] = useState(plumbing);
  return (
    <div className="hero-cont">
      <div className="hero-info">
        <div>
          <span>Building with Confidence</span>
          <span>
            <span>Building</span> And <span>Maintaining</span> Your Dreams
          </span>
          <span>
            Fast, friendly home repair service done right the first time!!
          </span>
          <span>
            <a className="custom-btn" href="/">
              Explore more
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </span>
        </div>
        <div>
          <div className="hero-slide">
            <img src={heroImg} alt="error404" className="fit-cont" />
            <div className="slide-nav">
              {images.map((i, index) => (
                <span key={index} onClick={()=>setHeroImg(i)} style={heroImg === i ? {backgroundColor: 'white'} : null}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-footer">20+ Years of Experience</div>
    </div>
  );
}
