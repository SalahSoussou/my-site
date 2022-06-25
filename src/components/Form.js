import "./form.sass";
import React from "react";
import emailjs from "emailjs-com";

function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_wvfnpwc", e.target, "GjPrpE5uckg_4YNCm")
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
    <div className="form">
      <form onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" required name="name"></input>
        <label>Email</label>
        <input type="email" required name="email"></input>

        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message" name="text" />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
