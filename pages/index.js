import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillCamera,
  AiFillCustomerService
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import avatar from "../public/avatar.png";
import Image from "next/image";
import useThemeSwitcher from "./hooks/useThemeSwitcher";



export default function Home() {
  const [darkMode, setDarkMode] = useThemeSwitcher();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Head>
        <title>Daley</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="" />
      </Head>
      <main className="bg-gradient-to-r from-gray-700 px-10 dark:bg-gradient-to-r from-gray-900; md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-4 mb-2 flex justify-between dark:text-white light:text-black">
            <h1 className="font-burtons text-xl"></h1>


                <a
                  className="bg-gradient-to-r from-gray-800 text- to-gray-400 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/e/2PACX-1vT0RXDhFkBvoZewKe124aedwiKDqXThqOMrUhe1CSPwifI5E6MEVoL7JUs3yCiUZAxZxb1ANMM5FvFN/pub"
                >
                  Resume
                </a>
                <a
                  className="bg-gradient-to-r from-gray-800 text- to-gray-400 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://aaron-daley-portfolio.vercel.app/"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5 py-5">
            <h2 className="text-5xl py-2 text-gray-900 font-medium dark:text-gray-800 md:text-6xl">
             Aaron W. Daley
            </h2>
            <h3 className="text-2xl py-2 dark:text-black md:text-3xl">
              FullStack Developer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-900 max-w-xl mx-auto md:text-xl">
              A creative problem-solver, software engineer, and Navy veteran 
              providing services for programming and design needs. 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 from-gray-800">
              <a href="https://www.linkedin.com/in/daleyaaron/"> <AiFillLinkedin /> </a>
              <a href="https://github.com/trble91/"> <AiFillGithub /> </a>
              <a href="https://drive.google.com/drive/folders/1Jmh6zD4k_OOsECbl8WJqlIiCJjsULdcq?usp=share_link"> <AiFillCamera /> </a>
              <a href="https://linktr.ee/itstrble"> <AiFillCustomerService /> </a>
            </div>
            <div className="mx-auto py-3 bg-gradient-to-b from-gray-700 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        {/* <Portfolio /> */}
      </main>
    </div>
  );
}