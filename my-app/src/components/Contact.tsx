"use client";
import React, { useState } from "react";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className=" text-white p-8 lg:p-20" id="contact">
        <h2 className="text-red-500 smm:text-6xl smd:text-5xl mb-20 font-bold text-center ">Contact Me</h2>
        <div className="flex flex-col lg:flex-row gap-8">
      {/* Contact Info Panel */}
      <div className="lg:w-1/2 w-full p-6 space-y-6 flex flex-col justify-center items-center bg-gray-800 rounded-lg shadow-lg mb-8 lg:mb-0">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">Get in Touch</h2>
        <p className="text-lg text-center">Feel free to reach out to me for collaborations, inquiries, or just to say hi!</p>
        <div className="space-y-2">
          <p>Email: <span className="font-semibold">yusraateeq112@gmail.com</span></p>
          <p>Phone: <span className="font-semibold">+123 456 7890</span></p>
          <p>Location: <span className="font-semibold">Karachi, Pakistan</span></p>
        </div>
        {/* Social Links */}
        <div className="flex space-x-4 text-lg">
          <a href="#" className="hover:text-red-500">LinkedIn</a>
          <a href="#" className="hover:text-red-500">Facebook</a>
          <a href="#" className="hover:text-red-500">Instagram</a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:w-1/2 w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-red-500 hover:bg-red-600 rounded font-semibold text-white transition duration-200 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default ContactMe;
