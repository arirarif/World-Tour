import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; // Import the Footer component

const Layout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* Footer included here */}
    </div>
  );
};

export default Layout;
