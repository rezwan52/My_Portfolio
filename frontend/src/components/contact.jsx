import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h3>Let’s Work Together</h3>
          <p>
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>

          <div className="contact-details">
            <span>📧 rezwan.ahmed.uap@gmail.com</span>
            <span>📍 Bangladesh</span>
          </div>
        </div>

        {/* Right Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
