import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>lorem@gmail.com</h5>
            <a target="_blank" href="mailto:lorem@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsDiscord />
            <h4>Discord</h4>
            <h5>BABAji</h5>
            <a target="_blank" href="https://discord.com">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Phone</h4>
            <h5>123456789</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone+123456789"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          {/* TODO: Use EmailJS here to send emails */}
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message. Doesn't do anything as of now"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
