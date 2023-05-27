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

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="" />
      </Head>
      <main className="bg-gradient-to-r from-gray-400 px-10 dark:bg-gradient-to-r from-gray-900; md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-gray-800 text- to-gray-400 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://docs.google.com/document/d/e/2PACX-1vT0RXDhFkBvoZewKe124aedwiKDqXThqOMrUhe1CSPwifI5E6MEVoL7JUs3yCiUZAxZxb1ANMM5FvFN/pub"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-gray-900 font-medium dark:text-gray-300 md:text-6xl">
             Aaron W. Daley
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              FullStack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A creative problem-solver, software engineer, and Navy veteran 
              providing services for programming and design needs. 
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/daleyaaron/"> <AiFillLinkedin /> </a>
              <a href="https://github.com/trble91/"> <AiFillGithub /> </a>
              <a href="https://drive.google.com/drive/folders/1Jmh6zD4k_OOsECbl8WJqlIiCJjsULdcq?usp=share_link"> <AiFillCamera /> </a>
              <a href="https://linktr.ee/itstrble"> <AiFillCustomerService /> </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-gray-700 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}