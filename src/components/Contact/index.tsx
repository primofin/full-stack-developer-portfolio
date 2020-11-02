import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div className="contact__container">
        <h2 className="contact__title">contact</h2>
        <p className="contact__text">Would you like to work with me?</p>
        <p className="contact__text">
          Integrify provides consulting and recruitment services for companies.
          Let’s talk more via JoonaOhra-aho: {' '}
          <span className="contact__info">joona@integrify.io/ +358 400 579588.</span>
        </p>
      </div>
    </section>
  )
}

export default Contact
