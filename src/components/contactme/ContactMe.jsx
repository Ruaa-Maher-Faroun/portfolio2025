import React from 'react'

import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function ContactMe() {
  return (
    
    <section className="contact" id="contact">
      <a
        href="https://github.com/Ruaa-Maher-Faroun"
        className="contact-section-btn"
        target="_blank"
      >
        <FontAwesomeIcon className="contact-icon" icon={faGithubAlt} />
      </a>
      <a
        href="https://www.linkedin.com/in/rua-faroun/"
        className="in contact-section-btn"
        target="_blank"
      >
        <FontAwesomeIcon className="contact-icon" icon={faLinkedinIn} />
      </a>
      <a
        href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=ruaafaroun@gmail.com"
        className="contact-section-btn"
        target="_blank"
      >
        <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
      </a>
    </section>
  )
}
