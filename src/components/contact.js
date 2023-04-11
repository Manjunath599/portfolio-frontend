import React, { useState } from "react";
import mail from "../images/mail-.png"


export default function Contact() {
  const [inputSubmit, setInputSubmit] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    console.log(e.target[3].value)

    setInputSubmit(!inputSubmit)
  }


  return (
    <section className="p-6 lg:p-10" id="contact">

      <div className="h-[40rem]  w-10/12 px-8 bg-white rounded-3xl shadow-lg lg:h-96
     lg:flex lg:items-center lg:justify-around">
        {
          inputSubmit ? <div className="pt-36 flex flex-col items-center lg:pt-0">
            <h1 className="text-3xl font-semibold">Thank you</h1>
            <button onClick={() => setInputSubmit(!inputSubmit)} className="hover:shadow-2xl bg-[#ff7383] w-28 h-8 text-white rounded-3xl mx-16 mt-4" >continue</button>
          </div> : <form onSubmit={handleSubmit} className="flex flex-col ">
            <h1 className="text-2xl my-4">Contact form</h1>
            <input
              name="username"
              placeholder="Your Name*"
              className="w-10/12 py-2 border lg:w-60" type="text" />
            <input name="email"
              placeholder="Your Email*" className="w-10/12 py-2 border my-6 lg:w-60" type="email" />
            <input name="subject"
              placeholder="Subject*" className="w-10/12 py-2 border mb-6 lg:w-80" type="text" />
            <input name="message"
              placeholder="message*" className="w-10/12 h-16 lg:w-[34rem] py-2 border " type="text" />
            <button className="hover:shadow-2xl bg-[#ff7383] w-28 h-8 text-white rounded-3xl mx-16 mt-4" type="submit" >send</button>
          </form>
        }
        <div className="w-2/3 h-56 bg-white shadow-2xl px-6 rounded-3xl mt-4 lg:w-60">
          <img className="pt-16 pb-4 px-4 w-28" src={mail} alt="email" />

          <a href="mailto:manjunathshravan@gmail.com"
            className="px-6 mt-10 underline cursor-pointer hover:text-[#ff7383]">Email me</a>
        </div>
      </div>
    </section>
  )
}