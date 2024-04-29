import man from "../assets/images/man.jpg";
export default function ClientStory() {
  return (
    <div className="cont story-cont">
      <div>
        <span className="sub-topic">What our client says</span>
        <h1 className="custom-header">Client's Testimonils</h1>
        <span className="short-desc">
          Here's what our Customers are saying about <br /> Your Business Name
          LLC
        </span>
      </div>
      <div className="testi-cont">
        <div>
          <div className="testi-msg">
            <span class="material-symbols-outlined">format_quote</span>
            <span>
              We have used your Business Name LLC for several years and consider
              Tim and his men as a part of our comapany. Great customer service
              and very fast service. I'm thankful to have such a reliable,
              express and trustworthy company to work with.
            </span>
            <span>John F. Kennedy</span>
            <div className="f-overlay"></div>

          </div>
          <div className="testi-img">
            <img src={man} alt="error404" className="fit-cont" />
          </div>
        </div>
      </div>
    </div>
  );
}
