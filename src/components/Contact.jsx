import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-2 px-4"
    >
      {/* Title Section */}
      <h1 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-2">
        Get In Touch
      </h1>
      <div className="w-24 h-1 bg-primary-gradient rounded-full mb-8"></div>

      {/* Form Container */}
      <div className="w-full max-w-3xl bg-gray-800 bg-opacity-70 p-8 rounded-2xl shadow-xl backdrop-blur-md">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="What is this regarding?"
              className="input input-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            />
          </div>

          {/* Message Box */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full bg-gray-900 border-gray-700 focus:border-primary focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full bg-primary border-none text-base-100 font-semibold text-lg hover:bg-primary-focus transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
