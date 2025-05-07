import React, { useEffect, useState } from "react";
import Hero from "./sections/Hero";

export default function App() {
  const titles = ["Software Engineer", "ICT Support Specialist"];
  const [index, setIndex] = useState(0);         // Current title index
  const [text, setText] = useState("");          // Text shown
  const [deleting, setDeleting] = useState(false); // Are we deleting?
  const [speed, setSpeed] = useState(150);       // Typing speed

  useEffect(() => {
    const fullText = titles[index];

    const timeout = setTimeout(() => {
      if (deleting) {
        setText((prev) => prev.slice(0, -1));
        setSpeed(100);
      } else {
        setText((prev) => fullText.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!deleting && text === fullText) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting]);

  return (
    <>
      <nav className="fixed top-0 w-full bg-base/90 backdrop-blur z-50 shadow">
        <div className="max-w-4xl mx-auto flex justify-between p-4">
          <span className="font-bold text-xl text-black-500">Brigidt Wangui</span>
          <div className="space-x-4">
            {["about", "skills", "projects", "contact"].map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-accent capitalize text-red-400">
                {id}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="h-screen flex flex-col items-center justify-center text-center px-4" id="hero">
          <h1 className="text-5xl font-bold mb-2 text-black-800">Hello there! I am a</h1>
          <p className="text-2xl font-bold h-8">
  <span
    className={`border-r-2 pr-1 animate-pulse 4 font-bold ${
      titles[index] === "Software Engineer"
        ? "text-blue-600"
        : "text-red-500"
    }`}
  >
    {text}
  </span>
</p>

          <a href="#projects" className="mt-6 px-6 py-3 bg- bg-pink-700 text-white rounded-full">
            View Projects
          </a>
        </section>
      </main>
    </>
  );
}
