import plumbing from "../assets/images/PLUMBING.jpg";

export default function HeroSection() {
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
                <img src={plumbing} alt="error404" />
            </div>
        </div>
      </div>
      <div className="hero-footer">20+ Years of Experience</div>
    </div>
  );
}
