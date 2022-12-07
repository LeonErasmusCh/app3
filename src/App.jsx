import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Navbar from "navbar/Navbar";
import Footer from "footer/Footer";
import Sidebar from "sidebar/Sidebar";

const App = () => (
  <>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark" style={{ height: "88vh" }}>
          <Sidebar />
        </div>
        <div className="col-10 p-0">
          <h1 className="text-center p-5">
            Welcome to <span className="text-danger">App-3</span>
          </h1>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
