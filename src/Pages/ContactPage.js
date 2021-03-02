import React from "react";
import emailjs from "emailjs-com";
import Title from "../Components/Title";

function ContactPage() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail-krsteski",
        "template_fveqlfv",
        e.target,
        "user_4TPs5fJvN6NxTCkrm96Bf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="title">
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="ContactPage">
        <h2>Feel free to drop me a message if you feel like it!</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            class="form-contact-input"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            class="form-contact-input"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            class="form-contact-input"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            class="form-contact-textarea"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" class="contact-form-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
