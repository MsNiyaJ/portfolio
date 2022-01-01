import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';

const Contact = () => {
  return (
    <div id="contact" className="py-10">
      <h1 className="text-3xl md:text-4xl text-center">Contact Me</h1>
      <div className="flex flex-col items-center gap-2 py-6">
        <PhoneIcon />
        <p className="text-lg">Phone</p>
      </div>
      <div className="flex flex-col items-center py-6">
        <EmailIcon />
        <p className="text-lg">Email</p>
      </div>
    </div>
  );
};

export default Contact;
