import { Call, Location, Mail, LogoDiscord, LogoFacebook, LogoInstagram, LogoLinkedin } from 'react-ionicons';
import { useState } from 'react';
import logo from '../assets/images/logo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-5 lg:p-20 bg-white">
      <div className="flex flex-col items-center text-center mb-12">
        <img src={logo} alt="logo" className="w-[160px] mb-4" />
        <h1 className="text-3xl font-bold text-primary">Get in Touch</h1>
        <p className="text-lg text-secondary max-w-[600px]">We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the form below.</p>
      </div>
      <div className="w-full lg:w-2/3 xl:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="bg-primary text-white p-3 rounded-lg font-semibold hover:bg-primary-dark">Send Message</button>
        </form>
      </div>
      <div className="w-full lg:w-2/3 xl:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-6 mt-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2 mb-2">
            <Location cssClasses={"!fill-primary !text-primary"} />
            <span className="font-Urbanist text-[17px] font-semibold text-secondary">1630 Elm Drive, New York City</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Call cssClasses={"!fill-primary !text-primary"} />
            <span className="font-Urbanist text-[17px] font-semibold text-secondary">+49 34 36573355</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail cssClasses={"!fill-primary !text-primary"} />
            <span className="font-Urbanist text-[17px] font-semibold text-secondary">contact@templatesjungle.com</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <LogoFacebook cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
          <LogoInstagram cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
          <LogoLinkedin cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
          <LogoDiscord cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
