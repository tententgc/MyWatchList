import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function About() {
  return (
    <>
    <Header />
    <div className="container">
        <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-4xl font-bold">About</h1>
        </div>
    </div>
    </>
  );
}

export default About;
