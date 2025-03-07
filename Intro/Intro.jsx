import React from 'react'
import './intro.css'
import bg from '../../assets/illustration-hero.svg'

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <h1 className="intro">A Simple Bookmark Manager</h1>
        <p className="intro-para">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instanly. Try it for free
        </p>
        <ul>
          <button className="btn">Get it on chrome</button>
          <button className="btn">Get it on firefox</button>
        </ul>
      </div>
      <div>
        <img src={bg} alt="" className="img" />
      </div>
    </section>
  );
}

export default Intro