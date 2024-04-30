export default function Contact() {
  return (
    <>
    <div className="quote-cont">
        <div className="f-overlay"></div>
        <span className="sub-topic">Have some work for us?</span>
        <h1 className="custom-header">Request A Quote Today</h1>
        <span>Please contact us with all your water needs. We look forward to serving you</span>
    </div>
      <div className="cont contact-cont">
        <div>
          <div className="contact-form">
            <h1 className="custom-header">Request A Free Quote</h1>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Service title" />
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              placeholder="Service Description"
            ></textarea>
            <button>Send Request</button>
          </div>
        </div>
        <div className="contact-detail">
          <span className="sub-topic">Visit Our Office</span>
          <h1 className="custom-header">Our Main Office</h1>
          <span className="contact-note">
            Your are welcome to visit our office during office hour. Find
            details of our location and business hours below.
          </span>
          <ul>
            <li>
              <b>Address:</b> LaPorte, IN 46350
            </li>
            <li>
              <b>Phone:</b> (123) 123-1234
            </li>
            <li>
              <b>Business Hours:</b> Mon-Fri: 9 am-5 pm
            </li>
            <li>
              <b>Email Address:</b> yourbusiness@business.com
            </li>
          </ul>
          <h1 className="custom-header area-header">Areas Covered</h1>
          <ul className="areas-list">
            <li>LaPorte Countries</li>
            <li>Parter Countries</li>
            <li>Michigan City</li>
            <li>Michigan</li>
          </ul>
        </div>
      </div>
    </>
  );
}
