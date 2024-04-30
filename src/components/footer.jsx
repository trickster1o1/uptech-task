import fb from '../assets/images/logo/fb.svg';
import tw from '../assets/images/logo/twitter.svg';
import ig from '../assets/images/logo/ig-white.svg';
export default function Footer() {
  return (
    <>
      <div className="cont footer-cont">
        <div>
          <div className="logo-cont">
            <h1 className="custom-header">Business Logo</h1>
            <p>
              Locally owned and operated company with 20 years of industry
              experience. We value honesty and integrity in all aspects of our
              business
            </p>
          </div>
        </div>
        <div className="quick-links">
          <h1 className="custom-header">Quick Links</h1>
          <ul>
            <li>About Us</li>
            <li>portfolio</li>
            <li>Testimonials</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="quick-links">
          <h1 className="custom-header">Get In Touch</h1>
          <ul>
            <li>
              <a href="http://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="http://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="http://www.youtube.com">Youtube</a>
            </li>
            <li>
              <a href="http://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="http://www.linkedin.com">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <h1 className="custom-header">Basic Info</h1>
          <ul>
            <li>
              <span class="material-symbols-outlined">local_library</span>
              LaPorte, IN 46350
            </li>
            <li>
              <span class="material-symbols-outlined">call</span> (123) 123-1234
            </li>
            <li>
              <span class="material-symbols-outlined">mail</span>
              yourbusiness@business.com
            </li>
            <li>
              <span class="material-symbols-outlined">browse_gallery</span>
              Mon-Fri: 9AM - 5PM
            </li>
          </ul>
        </div>
      </div>
      <div className="cont footer-bottom">
        <div>Copyright @2023 - All rights reserved. Designed by <a href="https://uptechsolution.com.np">Uptech Solutions</a></div>
        <div className="footer-media">
            <span><img src={fb} alt="FB" /></span>
            <span><img src={ig} alt="ig" /></span>
            <span><img src={tw} alt="tw" /></span>
            
        </div>
      </div>
    </>
  );
}
