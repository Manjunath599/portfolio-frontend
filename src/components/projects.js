import React, { useState } from "react";
import data from "./data";


export default function Projects() {
  const [info, setInfo] = useState(data)



  return (
    <section className="p-6 lg:p-10" id="projects">
      <h1 className="text-3xl">PROJECTS</h1>
      {
        info.map((item) => {
          const { id, img, link, heading } = item

          return (
            <div key={id} className="h-96 w-11/12 bg-white shadow-2xl  rounded-3xl p-6 my-10
              lg:flex lg:items-center lg:justify-around">
              <img className="h-56 w-[30rem]" src={img} />
              <div className="lg:mr-20">
                <h1 className="text-lg font-semibold px-6 py-4 lg:text-3xl lg:mb-6">{heading}</h1>
                <a className="h-3 bg-[#ff7383] px-6 py-2  rounded-3xl ml-16 text-white hover:shadow-2xl"
                  href={link} >Live page</a>
              </div>
            </div>
          )

        })
      }
    </section>
  )
}