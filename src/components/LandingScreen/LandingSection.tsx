import "./Landing.css";
import { useEffect,  useRef } from "react";
import AI from "../../assets/images/vision1.jpg";
import Typed from "typed.js";

const LandingSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Closing Price", "Highs &amp; Lows", "Structures &amp; Channels"],
      typeSpeed: 100,
      loop: true,
      backSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex pl-32 overflow-hidden landing ">
      <div className="flex items-center left-section">
        <div className="flex-col">
          <div className="text-[50px] w-[350px]">
            Your ultimate forex trading companion
          </div>
          <div className="text-xl">
            Revolutionalize your forex and stock strategy with our AI powered
            insights
          </div>
          {/* <div className="wrapper">
            <div className="static-txt">Models </div>
            <ul className="dynamic-txts">
              <li>
                <span>Predictions</span>
              </li>
              <li>
                <span>Highs And Lows</span>
              </li>
            </ul>
          </div> */}
          <div className="flex mt-5">
            <span className="pr-10 text-4xl">Models </span>
            <span ref={el} className="text-4xl font-bold" />
          </div>
        </div>
      </div>
      {/* <div className="hero-section "><img src={AI}/></div> */}
      <div className="relative w-full flex flex-1">
        <div className="relative">
          <div className="hero-svg">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div>
            <img src={AI} className="w-full pl-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
