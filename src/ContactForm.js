import React from 'react';

// Form to have a user send me an email
const ContactForm = () => {
  const onSubmit = () => {
    console.log('Email sent');
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <div className="hidden text-center m-lg:container m-lg:mx-auto">
        <p className="text-green-500 text-xl pt-8 font-bold px-3">
          Email Sent Successfully.
        </p>
        <p>
          Thank you <b>Shaniya Jaydae Malcolm</b>, your message has been
          submitted to us.
        </p>
      </div>
      <div className="m-lg:container m-lg:mx-auto flex flex-col md:flex-row gap-6 justify-center items-start my-10">
        <div className="flex flex-col gap-6 w-full">
          <input
            required
            type="text"
            name="name"
            id=""
            placeholder="Name :"
            className="border-2 border-grey-600 placeholder-slate-500 p-3 w-full rounded-md outline-pink-200"
          />
          <input
            required
            type="email"
            name="email"
            id=""
            placeholder="Email :"
            className="border-2 border-grey-600 placeholder-slate-500 p-3 w-full rounded-md outline-pink-200"
          />
          <input
            required
            type="text"
            name="subject"
            id=""
            placeholder="Subject :"
            className="border-2 border-grey-600 placeholder-slate-500 p-3 w-full rounded-md outline-pink-200"
          />
        </div>
        <div className="flex flex-col w-full">
          <textarea
            required
            name="message"
            id=""
            rows="8"
            placeholder="Message :"
            className="border-2 border-grey-600 placeholder-slate-500 p-2 w-full rounded-md outline-pink-200"
          ></textarea>
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
