import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Pages/Home/Home";
import Success from "./Pages/Success/Success";
import NotFound from "./Pages/NotFound/NotFound";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
