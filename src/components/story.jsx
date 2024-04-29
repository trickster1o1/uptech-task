import man from '../assets/images/man.jpg';
export default function ClientStory() {
    return (
        <div className="cont story-cont">
            <div>
                <span className="sub-topic">What our client says</span>
                <h1 className="custom-header">Client's Testimonils</h1>
                <span className="short-desc">Here's what our Customers are saying about <br /> Your Business Name LLC</span>
            </div>
            <div className="testi-cont">
                <div>
                    <div className="testi-msg">testimonial</div>
                    <div className="testi-img">
                        <img src={man} alt="error404" className="fit-cont"/>
                    </div>
                </div>
            </div>
        </div>
    );
}