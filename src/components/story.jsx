import man from "../assets/images/man.jpg";
import jane from "../assets/images/girl.jpg";
import sam from "../assets/images/man-2.jpg";
import { useEffect, useState } from "react";
export default function ClientStory() {
  const testi = [
    {
      id: 1,
      name: "John F. Kennedy",
      msg: "We have used your Business Name LLC for several years and consider Tim and his men as a part of our comapany. Great customer service and very fast service. I'm thankful to have such a reliable, express and trustworthy company to work with.",
      img: man,
    },
    {
      id: 2,
      name: "Jane Doe",
      msg: "We have used your Business Name LLC for several years and consider Tim and his men as a part of our comapany. Great customer service and very fast service. I'm thankful to have such a reliable, express and trustworthy company to work with.",
      img: jane,
    },
    {
      id: 3,
      name: "Sam Franko",
      msg: "We have used your Business Name LLC for several years and consider Tim and his men as a part of our comapany. Great customer service and very fast service. I'm thankful to have such a reliable, express and trustworthy company to work with.",
      img: sam,
    },
  ];

  const [selectTesti, setSelectTesti] = useState(testi[0]);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
        setSelectTesti(i=>i.id < 3 ? testi[i.id] : testi[0]);
        console.log(selectTesti)
    }, 4000);

    //Clearing the interval
    return () => clearInterval(interval);
}, [testi, selectTesti]);
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
            <span>{selectTesti.msg}</span>
            <span>{selectTesti.name}</span>
            <div className="f-overlay"></div>
          </div>
          <div className="testi-img">
            <img src={selectTesti.img} alt="error404" className="fit-cont" />
          </div>
          <span className="slide-nav">
            {testi.map((t, index) => (
              <span
                key={index}
                className="dot-nav"
                onClick={() => setSelectTesti(t)}
                style={
                  selectTesti.id === t.id
                    ? { backgroundColor: "#34d6ff" }
                    : null
                }
              ></span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
