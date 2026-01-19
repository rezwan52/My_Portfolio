import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h3>Let’s Work Together</h3>
          <p>
            Have a project in mind or want to collaborate?  
            Feel free to reach out. I’m always open to new opportunities.
          </p>

          <div className="contact-details">
            <span>📧 rezwan.ahmed.uap@gmail.com</span>
            <span>📍 Bangladesh</span>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
