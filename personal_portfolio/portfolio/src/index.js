import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar/navbar";
import Main from "./Components/Main/main";
import About from "./Components/About/about";
import Skills from "./Components/skills/skills";
import Quali from "./Components/qualification/quali";
import Contact from "./Components/contact/contact";
import Footer from "./Components/Footer/footer";

import reportWebVitals from "./reportWebVitals";
import "./Assets/bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Quali />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
