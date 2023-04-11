import React, { useState } from "react";
import menu from "./images/icon-menu.svg"
import closeMenu from "./images/icon-menu-close.svg"
import avatar from "./images/avatar.png"
import github from "./images/icons8-github-48.png"
import twitter from "./images/icons8-twitter-48.png"
import logo from "./images/logo.png"
import { BiHome } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa"
import { BsBriefcase } from "react-icons/bs"
import { BsTelephone } from "react-icons/bs"



export default function Home() {
    const [openMenu, setOpenMenu] = useState(false)


    return (
        <>
            <nav className="flex justify-between p-8 w-full bg-[#ff7383] text-white
         shadow-xl fixed lg:px-20 lg:py-8">
                <img className="h-6" src={logo} alt="S" />
                <div className="hidden lg:inline-block">
                    <Navbar />
                </div>
                <img onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer lg:hidden" src={menu} alt="menu" />
            </nav>
            {openMenu &&
                <div className="h-full fixed w-1/2 bg-[#ff7383] text-white right-0 top-0  transition-all shadow-lg">
                    <img className="mt-10 ml-40 cursor-pointer lg:hidden"
                        onClick={() => setOpenMenu(!openMenu)} src={closeMenu} alt="close-menu" />
                    <Navbar />
                </div>
            }
            <section id="home" className="text-center p-6 pt-24
            md:flex md:flex-col md:items-center
             lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:text-left">
                <div>
                    <img className="w-[28rem] h-[38rem] lg:w-[38rem]" src={avatar} alt="logo" />
                </div>
                <div>
                    <h2>HI THERE I'M</h2>
                    <h1 className="text-4xl my-4 text-[#ff7383]">SHRAVAN <span className="text-4xl text-black">MANJUNATH</span></h1>
                    <p className="text-lg px-16 lg:px-0 lg:w-[31rem]">A Front-End Web Developer passionate about creating interactive applications and
                        experiences on the web.</p>
                    <a href="https://pdf.ac/1NGO2l"><button className="bg-[#ff7383] w-28 h-8 text-white rounded-3xl mt-4 block mx-32 
                   md:ml-80  lg:ml-0 hover:shadow-2xl" >Resume</button></a>
                    <a className="cursor-pointer" href="https://github.com/Manjunath599">
                        <img src={github} className="inline mx-4 mt-4 w-8 rounded-lg bg-[#ff7383]" />
                    </a>
                    <a className=" cursor-pointer" href="https://twitter.com/Shravan14501?t=GJyHAkAoKZrZQBX8ERxhTg&s=09">
                        <img src={twitter} className="inline mx-4 mt-4 w-8  rounded-lg cursor-pointer bg-[#ff7383]" />
                    </a>
                </div>
            </section>
        </>
    )

}


export function Navbar() {

    return (
        <ul className="mt-32 ml-8 lg:mt-auto lg:flex lg:mr-32 lg:items-center">
            <li className="hidden lg:inline" >{<BiHome />}</li>
            <li className="cursor-pointer lg:ml-2 lg:mr-8 hover:underline"><a href="#home">Home</a></li>
            <li className="hidden lg:inline" >{<BsFillPersonFill />}</li>
            <li className="cursor-pointer my-4 lg:my-auto lg:ml-2 lg:mr-8 hover:underline"><a href="#about">About</a></li>
            <li className="hidden lg:inline">{<FaLaptopCode />}</li>
            <li className="cursor-pointer lg:ml-2 lg:mr-8 hover:underline"><a href="#skills">Skills</a></li>
            <li className="hidden lg:inline">{<BsBriefcase />}</li>
            <li className="cursor-pointer my-4 lg:my-auto lg:ml-2 lg:mr-8 hover:underline"><a href="#projects">Projects</a></li>
            <li className="hidden lg:inline">{<BsTelephone />}</li>
            <li className="cursor-pointer lg:ml-2 lg:mr-8 hover:underline"><a href="#contact">Contact</a></li>
        </ul>
    )
}