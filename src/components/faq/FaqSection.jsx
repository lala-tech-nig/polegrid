import { useState } from 'react';

const FAQsection = ({ faqData }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleFAQ = (index) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <section id="faq" className="faq">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="content px-xl-5">
                <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-container">
                {faqData.map((faq, index) => (
                  <div
                    className={`faq-item ${openItems[index] ? 'faq-active' : ''}`}
                    key={index}
                  >
                    <h3 onClick={() => toggleFAQ(index)}>
                      <span className="num">{index + 1}.</span>
                      <span>{faq.question}</span>
                    </h3>
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                    <i
                      className="faq-toggle bi bi-chevron-right"
                      onClick={() => toggleFAQ(index)}
                    ></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsection;