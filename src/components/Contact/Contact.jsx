import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f5eflpx", "template_vpbuv4s", form.current, {
        publicKey: "X39Sx35Hbp8-5fQ-a",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <h4>Email</h4>
            <MdOutlineMail className=".contact_option-icon" />
            <h5>faizaadetutu@gmail.com</h5>
            <a href="mailto:faizaadetutu@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <h4>LinkedIn</h4>
            <FaLinkedin className=".contact_option-icon" />
            <h5>faizaadetutu@gmail.com</h5>
            <a href="https://www.linkedin.com/in/faiza-abdulsalam-b38923223/?trk=opento_sprofile_details">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <h4>Whatsapp</h4>
            <FaWhatsapp className=".contact_option-icon" />
            <h5>+2348104958038</h5>
            <a href="https://api.whatsapp.com/send?phone+2348104958038">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
