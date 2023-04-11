import React from "react";
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import reactjs from "../images/react.png"
import git from "../images/git.png"
import tailwind from "../images/tailwind-css.png"


export default function Skills() {
  return (
    <section id="skills" className="p-6 lg:p-10">
      <h1 className="text-3xl my-4">SKILLS</h1>
      <div className="h-72 w-11/12 bg-white rounded-3xl p-6 lg:w-1/2 lg:h-72">
        <div className="flex justify-evenly">
          <div className="p-4 border rounded-xl h-24 w-20 bg-white shadow-md hover:shadow-2xl">
            <img src={html} alt="html" />
            <p className="text-sm pt-2 pl-2">HTML</p>
          </div>
          <div className="p-4 border rounded-xl h-24 w-20 bg-white shadow-md hover:shadow-2xl">
            <img src={css} alt="html" />
            <p className="text-sm pt-2 pl-2">CSS</p>
          </div>
          <div className="p-4 border rounded-xl h-24 w-20 bg-white shadow-md hover:shadow-2xl">
            <img src={javascript} alt="html" />
            <p className="text-sm pt-2">Javascript</p>
          </div>
        </div>
        <div className="flex justify-evenly mt-8">
          <div className="p-4 border rounded-xl h-24 w-20 bg-white shadow-md hover:shadow-2xl">
            <img src={reactjs} alt="html" />
            <p className="text-sm pt-2">Reactjs</p>
          </div>
          <div className="p-4 border rounded-xl h-24 w-[5.5rem] bg-white shadow-md hover:shadow-2xl">
            <img src={tailwind} alt="html" />
            <p className="text-sm pt-2">Tailwindcss</p>
          </div>
          <div className="p-4 border rounded-xl h-24 w-20 bg-white shadow-md hover:shadow-2xl">
            <img src={git} alt="html" />
            <p className="text-sm pt-2 pl-2">Git</p>
          </div>
        </div>
      </div>
    </section>
  )
}