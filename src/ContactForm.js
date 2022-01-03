import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailSent from './EmailSent';
import EmailNotSent from './EmailNotSent';

// Form to have a user send me an email
const ContactForm = () => {
  const [formData, updateFormData] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitMsg = document.getElementById('submitMsg');

    // Send an email or displays error
    emailjs
      .sendForm(
        'service_8z1lwgj',
        'template_o5aa5nr',
        e.target,
        'user_A27JrwjsWAS94QRiVPAHe'
      )
      .then(
        (result) => {
          // console.log(result.text);
          submitMsg.innerHTML = EmailSent(formData.name);
          submitMsg.classList.remove('hidden');

          // Reset the form
          e.target.reset();
        },
        (error) => {
          // console.log(error.text);
          submitMsg.innerHTML = EmailNotSent();
          submitMsg.classList.remove('hidden');
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        id="submitMsg"
        className="hidden text-center m-lg:container m-lg:mx-auto pt-8 px-3"
      ></div>
      <div className="m-lg:container m-lg:mx-auto flex flex-col md:flex-row gap-6 justify-center items-start my-10">
        <div className="flex flex-col gap-6 w-full">
          <input
            required
            aria-label="name"
            type="text"
            name="name"
            placeholder="Name :"
            className="border-2 border-grey-600 placeholder-slate-500 p-3 w-full rounded-md outline-pink-200"
            onChange={handleChange}
          />
          <input
            required
            aria-label="email"
            type="email"
            name="email"
            placeholder="Email :"
            className="border-2 border-grey-600 placeholder-slate-500 p-3 w-full rounded-md outline-pink-200"
            onChange={handleChange}
          />
          <input
            required
            aria-label="subject"
            type="text"
            name="subject"
            placeholder="Subject :"
            className="border-2 border-grey-600 placeholder-slate-500 p-3 w-full rounded-md outline-pink-200"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <textarea
            required
            aria-label="message"
            name="message"
            rows="8"
            placeholder="Message :"
            className="border-2 border-grey-600 placeholder-slate-500 p-2 w-full rounded-md outline-pink-200"
            onChange={handleChange}
          />
          <div className="self-end mt-6 md:mt-12">
            <button
              type="submit"
              className="py-2 px-8 bg-pink-500 hover:bg-opacity-70 hover:bg-gray-400 rounded-lg text-white font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
