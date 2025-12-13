import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual IDs from EmailJS
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const PUBLIC_KEY = "your_public_key";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Clears the form
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-white py-2 px-4"
    >
      <h1 className="text-5xl lg:text-5xl font-bold text-white text-center mb-2">
        Get In Touch
      </h1>
      <div className="w-24 h-1 bg-primary-gradient rounded-full mb-8"></div>

      <div className="w-full max-w-3xl bg-gray-800 bg-opacity-70 p-8 rounded-2xl shadow-xl backdrop-blur-md">
        {/* Added ref and onSubmit */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="from_name" // Ensure this matches your EmailJS template variable
              required
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="from_email" // Match template variable
              required
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject" // Match template variable
              required
              placeholder="What is this regarding?"
              className="input input-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message" // Match template variable
              rows="5"
              required
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`btn w-full bg-primary border-none text-base-100 font-semibold text-lg hover:bg-primary-focus transition-all ${
              isSending ? "loading" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
