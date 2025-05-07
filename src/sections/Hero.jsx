import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('public/background.jpg')` }}
    >
      <h1 className="text-5xl font-bold mb-2 text-white">Your Name</h1>
      <p className="text-2xl font-bold mb-6 text-sky-400">Software Engineer</p>
      <a href="#projects" className="px-6 py-3 bg-accent text-white rounded-full">
        View Projects
      </a>
    </section>
  );
}
