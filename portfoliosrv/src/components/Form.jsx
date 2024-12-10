import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Form.css';


const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bnbogrt", 
        "template_0nmxy7z", 
        form.current,
        "d8tuhbd7e1Kmk-KuD"  
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send the message, please try again.');
        }
      );
    e.target.reset(); // Limpia el formulario
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="user_email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
      </div>
      <button type="submit" className="submit-btn">Send Message</button>
    </form>
  );
};

export default Form;
