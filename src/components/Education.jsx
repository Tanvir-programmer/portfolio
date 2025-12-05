import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-5 px-4"
    >
      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-2">
        Education
      </h1>
      <div className="w-24 h-1 bg-primary-gradient rounded-full mb-10"></div>

      {/* Education Card */}
      <div className="max-w-2xl bg-gray-800 bg-opacity-70 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
          Higher Secondary Certificate (HSC)
        </h2>

        <p className="text-lg text-gray-300 mb-2 font-semibold">
          Nasaratpur Degree College
        </p>

        <p className="text-gray-400 text-md">Year of Completion: 2020</p>
      </div>
    </div>
  );
};

export default Education;
