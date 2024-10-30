import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form,
        `${import.meta.env.VITE_USER_ID}`
      )
      .then(
        (result) => {
          toast.success("Mail sends successfully", result.text);
        },
        (e) => {
          toast.error("Error While sending the email", e.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <Header name="Contact Us" />
      <div className="contact">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
