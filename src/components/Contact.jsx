import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  User,
  MessageSquare,
  Phone,
} from "lucide-react";
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message Synthesized Successfully!", {
            position: "bottom-right",
            theme: "dark",
          });
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          toast.error("Transmission Error. Try again.", {
            position: "bottom-right",
            theme: "dark",
          });
          setIsSending(false);
        },
      );
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email Me",
      val: "tanvir.webprogrammer@gmail.com",
      link: "mailto:tanvir.webprogrammer@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Call Me",
      val: "+8801743424003",
      link: "tel:+8801743424003",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      val: "Remote / Worldwide",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0f172a] py-24 px-6 overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Branding */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> Contact
            </h2>
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Talk.
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md">
              Have a proposal or just want to say hi? I'm always open to
              discussing new projects and creative opportunities.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-5 p-5 rounded-2xl bg-[#1e293b]/30 border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-xl"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                      {info.label}
                    </p>
                    <p className="text-slate-200 font-bold group-hover:text-primary transition-colors">
                      {info.val}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Glass Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="lg:col-span-7 relative"
        >
          <div className="relative bg-[#1e293b]/30 border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <form ref={form} onSubmit={sendEmail} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <User
                    className="absolute left-0 top-3 text-slate-500 group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-slate-700 py-3 pl-8 text-white focus:border-primary outline-none transition-all placeholder:text-slate-600 font-medium"
                  />
                </div>
                <div className="relative group">
                  <Mail
                    className="absolute left-0 top-3 text-slate-500 group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-slate-700 py-3 pl-8 text-white focus:border-primary outline-none transition-all placeholder:text-slate-600 font-medium"
                  />
                </div>
              </div>

              <div className="relative group">
                <MessageSquare
                  className="absolute left-0 top-3 text-slate-500 group-focus-within:text-primary transition-colors"
                  size={18}
                />
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-slate-700 py-3 pl-8 text-white focus:border-primary outline-none transition-all resize-none placeholder:text-slate-600 font-medium"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full relative h-16 bg-primary overflow-hidden rounded-2xl flex items-center justify-center gap-3 text-white font-black tracking-[0.2em] uppercase text-sm disabled:bg-slate-800 disabled:cursor-not-allowed shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />{" "}
                    Synthesizing...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Transmission
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <ToastContainer theme="dark" pauseOnFocusLoss={false} />
    </section>
  );
};

export default Contact;
