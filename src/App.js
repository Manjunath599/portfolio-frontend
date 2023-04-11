import React from "react"
import Home from "./home";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  return (
    <main className="bg-gray-100 font-body">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
