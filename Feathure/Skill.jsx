import React from 'react'
import { useState } from 'react';
import './Skill.css'


const data = [
  {
    id: 1,
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. our simple drag-and-drop interface givs you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: "simple Bookmarking",
    image: "./images/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    title: "Intelligent search",
    description:
      "our powerfull search feature will help you find saved sites in no time at all. No need to trawl thriugh all of your bookmark",
    link: "More Info",
    button: "Speedy Search",
    image: "./images/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    description:
      "Easily share your bookmark nd collections with other. Creat a sharable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    image: "./images/illustration-features-tab-3.svg",
  },
];

const Skill = () => {
  const [tabs] = useState(data)
  const [value,setValue] = useState(0)
  const {image, title, description, link} = tabs[value]
  return (
    <section id="skill">
      <h1 className="skill-title">Features</h1>
      <p className="skill-para">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div>
        <ul className="task">
          {tabs.map((tab, index) => (
            <li key={tab.id} className='order'>
              <p
              
                onClick={() => setValue(index)}
                className= {`heading ${index === value}`}
              >
                {tab.button}
              </p>
            </li>
          ))}
        </ul>

        <div className="skill-content">
          <article className='sss'>
            <img src={image} alt="" className='imag'/>
          </article>
          <article className="over">
            <h2>{title}</h2>
            <p>{description}</p>
            <button>{link}</button>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skill