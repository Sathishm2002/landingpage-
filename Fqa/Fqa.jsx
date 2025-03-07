import React, { useState } from 'react'
import './fqa.css'

const FaqItem=()=>{
    const [show, setShow] = useState(false);
    const toggleShow = () => {
      setShow (!show);
    };
    return(
        <div className={`faq-item  ${show ? "active" : ""}`}>
            <div className='faq-item-header' onClick = {toggleShow}>Sample Questions?</div>
            <div className="faq-item-body">
                <div className="faq-item-body-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quo labore quibusdam obcaecati dolores vitae sit accusantium nisi rem eum illo mollitia, iusto atque voluptatem delectus exercitationem, numquam suscipit facilis aliquam? Commodi maiores ullam nulla hic nesciunt, voluptatum veritatis soluta!
                </div>
            </div>
        </div>
    )
}

 
const Fqa = () => {
  
  return (
    <section className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        ratione, porro eum et quas voluptate ut non vel aliquam in incidunt ea
        consectetur dolor numquam commodi cumque voluptas enim blanditiis
        necessitatibus autem amet nulla, nihil delectus ex! Tempora, quia
        laudantium.
      </p>
      <FaqItem />
      <FaqItem />
      <FaqItem />
      <FaqItem />
    </section>
  );
}

  

export default Fqa