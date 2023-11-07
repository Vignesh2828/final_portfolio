// Contact.js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // Import the CSS file

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ae38jwf",
        "template_bhlnhbg",
        form.current,
        "8D05u506GJIVVQaJh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container"> {/* Apply the container class */}
      <form ref={form} onSubmit={sendEmail} className="contact-form"> {/* Apply the form class */}
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="submit-btn" />
      </form>
      <p>Email: mrtnvicky2020@gmail.com</p>
      <p>Mobile: +91 80728 73118</p>
    </div>
  );
};

export default Contact;
