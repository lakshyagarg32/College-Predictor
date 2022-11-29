import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import Result from "./components/result.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);
