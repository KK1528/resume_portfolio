import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Footer from "../footer/Footer";

const Contact = () => {

  return (
    <section id="contact">
      <div className="krishna1">
        <h5 className="h5">Get In Touch</h5>
        <h2 className="h2">Contact Me</h2>
      </div>

      <div className="container contact-container">
        <div>
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineEmail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>kkself427@gmail.com</h5>
              <a href="mailto:kkself427@gmail.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>

            <article className="contact-option">
              <BsWhatsapp className="contact-option-icon" />
              <h4>Whatsapp</h4>
              <h5>+918058987102</h5>
              <a
                href="https://wa.me/918058987102"
                target="_blank" rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
