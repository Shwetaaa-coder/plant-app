import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How is the identification result constructed?',
      answer: `The plant identification process currently involves three independent models:\n
- Genus model (such as Philodendron)\n
- Species model (such as Philodendron hederaceum)\n
- Infraspecies model (such as Philodendron hederaceum var. oxycardium ‘Brasil’)`
    },
    {
      question: 'What kind of plants can you identify?',
      answer: `Our machine-learning model is mainly based on photos that we have been collecting since 2013 through our FlowerChecker app.\n
We can currently identify more than 30,000 plant species from around the world.`
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* FAQs */}
        <div className="footer-section">
          <h4>FAQs</h4>
          <p>Find answers to common questions about plant.id API here. If you need further information, feel free to reach out.</p>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <span>{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Stay in the loop</h4>
          <p>Join our newsletter to receive the latest news & exclusive insights from the Kindwise team.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
          <small>By subscribing you agree to our <a href="#">Privacy Policy</a></small>
        </div>

        {/* Company Info */}
        <div className="footer-section">
          <h4>kindwise</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Careers</a></li>
          
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        

        {/* Blog & Media */}
        <div className="footer-section blog-media">
          <div>
            <h4>Blog</h4>
            <ul>
              <li><a href="#">New plant.health feature: follow-up questions</a></li>
              <li><a href="#">Disease symptoms</a></li>
              
              
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 kindwise. All rights reserved.</p>
        <ul className="legal-links">
          <li><a href="#">Web Privacy Policy ↗</a></li>
          <li><a href="#">Cookie Policy ↗</a></li>
          <li><a href="#">API Terms and Conditions ↗</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
