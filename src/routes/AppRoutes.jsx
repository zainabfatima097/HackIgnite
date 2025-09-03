import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Timeline from "../pages/Timeline";
import Registration from "../pages/Registration";
import Rules from "../pages/Rules";
import Prizes from "../pages/Prizes";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/prizes" element={<Prizes />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<FAQs />} />
    </Routes>
  );
}
