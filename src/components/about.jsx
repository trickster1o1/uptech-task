import water from "../assets/images/watertreatment.jpg";
import person from "../assets/images/p3.jpg";

export default function About() {
  return (
    <div className="about-cont">
      <div>
        <div className="img-cont">
          <img src={water} alt="error404" className="fit-cont" />
          <div>
            <img src={person} alt="error404" className="fit-cont" />
          </div>
        </div>
      </div>
      <div className="about-right">
        <span className="sub-topic">About Our Company</span>
        <h1 className="custom-header">Your Business Name LLC</h1>
        <p>
          We are a locally owned and operated company with 20 years of industry
          experience. We value honesty and integrity in all aspects of our
          business. We offer a varity of Home improvement services that are
          customizeable to each individual project. <br />
          <br />
          We specialize in handyman work and a varity of related service and
          repair projects. We pride on the quality of our work as well as our
          commitment to outstanding results. We look forward to building lasting
          relationships with our clients and guarentee your satisfaction!
          <a className="custom-btn" href="/">
            Read More
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </p>
      </div>
    </div>
  );
}
