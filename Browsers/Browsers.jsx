import React from 'react'
import './browsers.css'
import chrome from "../../assets/logo-chrome.svg";
import opera from "../../assets/logo-opera.svg";
import firefox from "../../assets/logo-firefox.svg";
import dots from "../../assets/bg-dots.svg";

const Browsers = () => {
  return (
    <section className="web">
      <article className="web-title">
        <h2>Download the extension</h2>
        <p>
          We got more browsers in the pipeline. Please do let us know if you got
          a favourite you like us to pripritize
        </p>
      </article>

      <article className="web-img">
        <div className="web-sub">
          <img src={chrome} alt="" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <img src={dots} alt="" />
          <br></br>
          <button>Add & Install Extension </button>
        </div>
        <div className="web-sub firefox">
          <img src={firefox} alt="" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 55</p>
          <img src={dots} alt="" />
          <br></br>
          <button>Add & Install Extension </button>
        </div>
        <div className="web-sub opera">
          <img src={opera} alt="" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 46</p>
          <img src={dots} alt="" />
          <br></br>
          <button>Add & Install Extension </button>
        </div>
      </article>
    </section>
  );
}

export default Browsers