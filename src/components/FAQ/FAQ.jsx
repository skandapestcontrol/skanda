import React, { useState } from 'react';
import './FAQ.css'; // You can customize the styles here.

const FAQComponent = () => {
  const [open, setOpen] = useState(null); // Track the currently opened question.

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index); // Toggle the clicked question.
  };

  const faqs = [
    { question: "What are pest control services?", answer: "Pest control services help eliminate and prevent pests like cockroaches, rodents, termites, and more, ensuring a safe environment." },
    { question: "Why is pest control important?", answer: "Pest control is important to protect health, prevent property damage, and maintain hygiene by controlling pests that carry diseases." },
    { question: "How often should I schedule pest control?", answer: "It depends on the type of pest, but generally, quarterly or bi-annual treatments are recommended." },
    { question: "Are pest control treatments safe?", answer: "Yes, modern pest control treatments are safe for humans and pets when applied by professionals." },
    { question: "How long does pest control last?", answer: "The effectiveness of pest control varies, but treatments typically last between 3 to 6 months depending on the service." },
    { question: "What should I do before a pest control treatment?", answer: "Clear away food, toys, and other personal items, and ensure pets are out of the treatment area." },
    { question: "How do I know if I need pest control?", answer: "If you notice signs of pests like droppings, bites, or visible pests, it's time to schedule a pest control service." },
    { question: "Can I handle pest control myself?", answer: "While DIY methods work temporarily, professional pest control ensures long-term results and addresses root causes." },
    { question: "What are common pests in homes?", answer: "Common pests include cockroaches, ants, spiders, rodents, termites, and bed bugs." },
    { question: "How can I prevent pests in my home?", answer: "Maintain cleanliness, seal cracks, remove food sources, and use pest control barriers to prevent pests." },
    { question: "What are the signs of a termite infestation?", answer: "Signs include hollow wood, mud tubes, discarded wings, and visible damage to wooden structures." },
    { question: "Are the chemicals used in pest control harmful?", answer: "No, the chemicals used are regulated and safe when applied by licensed pest control professionals." },
    { question: "How do I prepare for a termite inspection?", answer: "Clear the area around the foundation and inside the home to allow easy access for the inspector." },
    { question: "How can I deal with rodents?", answer: "Rodent control involves trapping, exclusion methods, and sometimes baiting to eliminate infestations." },
    { question: "How do pest control services work?", answer: "Professionals inspect your property, identify the pest problem, apply treatments, and offer preventative measures." },
    { question: "Do I need to leave my house during pest control treatment?", answer: "It depends on the treatment used. Your pest control professional will inform you if evacuation is necessary." }
  ];

  return (
    <section className="faq-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Frequently Asked Questions</div>
          <h2>Pest Control Services FAQs</h2>
        </div>
        <div className="row">
          {faqs.slice(0, 8).map((faq, index) => (
            <div key={index} className="col-lg-6">
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h5>{faq.question}</h5>
                  <span>{open === index ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${open === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {faqs.slice(8).map((faq, index) => (
            <div key={index + 8} className="col-lg-6">
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index + 8)}>
                  <h5>{faq.question}</h5>
                  <span>{open === index + 8 ? '-' : '+'}</span>
                </div>
                <div className={`faq-answer ${open === index + 8 ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
