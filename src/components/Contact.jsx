import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            theme: "dark",
          });
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error(error.text || "Something went wrong. Please try again.", {
            position: "bottom-right",
            theme: "dark",
          });
          setIsSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-slate-200 py-16 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-[#161b22] rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
        {/* Left Info Section */}
        <div className="p-10 bg-[#1c2128] flex flex-col justify-between border-r border-slate-800">
          <div>
            <h2 className="text-4xl font-bold text-white">Get in touch</h2>
            <p className="mt-6 text-slate-400 text-lg">
              Have a project in mind or looking to hire? I'm currently available
              for new opportunities and would love to hear from you.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">
                ✉️
              </div>
              <div className="ml-4">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Email Me
                </p>
                <p className="text-slate-200 font-medium text-lg">
                  tanvir.webprogrammer@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">
                📍
              </div>
              <div className="ml-4">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Location
                </p>
                <p className="text-slate-200 font-medium text-lg">
                  Remote / Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-10 lg:p-14 bg-[#161b22]">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full bg-[#0d1117] border border-slate-700 rounded-lg p-3 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="example@email.com"
                className="w-full bg-[#0d1117] border border-slate-700 rounded-lg p-3 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="How can I help you?"
                className="w-full bg-[#0d1117] border border-slate-700 rounded-lg p-3 focus:border-blue-500 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all disabled:bg-slate-700 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
