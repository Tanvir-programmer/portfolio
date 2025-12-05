import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Layouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fixed at top if you want */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main content should expand to fill available space */}
      <main className="flex-grow w-11/12 mx-auto">
        <Outlet />
      </main>

      {/* Footer sticks to the bottom */}
      <Footer />
    </div>
  );
};

export default Layouts;
