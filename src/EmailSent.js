const EmailSent = (name) => {
  return `
    <div>
      <span class="text-green-500 text-xl font-bold">
        Email Sent Successfully.
      </span>
      <br />
      <span>
        Thank you <b>${name}</b>, your message has been submitted!
      </span>
    </div>
  `;
};

export default EmailSent;
