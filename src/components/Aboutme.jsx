const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1120] text-white py-20 px-4">
      <h1 className="text-4xl lg:text-6xl font-black mb-4">
        About <span className="text-primary">Me</span>
      </h1>
      <div className="w-20 h-1.5 bg-primary rounded-full mb-12"></div>

      <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-900/50 border border-gray-800 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-100">
            Bridging Design & Logic
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I am an{" "}
            <span className="text-white font-medium">
              Expert Frontend Developer
            </span>{" "}
            with a deep love for clean architecture. Currently, I'm mastering
            the MERN stack to bridge the gap between stunning visuals and
            powerful backends.
          </p>
        </div>
        <div className="space-y-4 border-l border-gray-700 pl-0 md:pl-8">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
              ✓
            </div>
            <p className="text-gray-300">
              <span className="font-bold text-white">Focus:</span> Building
              scalable, production-ready React applications.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
              ✓
            </div>
            <p className="text-gray-300">
              <span className="font-bold text-white">Commitment:</span> Writing
              semantic, accessible, and high-performance code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
