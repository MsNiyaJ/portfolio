import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-4 bg-white">
      <h1 className="text-3xl md:text-4xl text-center">Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
