"use client";

import Image from "next/image";

import profile from "@/assets/profile.png";
import { ArrowDown, EnvelopeSimple, List, X } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";
import { About } from "@/components/About";
import { MyProject } from "@/components/MyProject";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="font-sans h-screen w-full bg-violet-950">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <Navbar />
        <main
          className={clsx(
            "relative h-full z-10 flex flex-col gap-6 items-center mt-20",
            "max-md:mt-10"
          )}
        >
          <div className="h-72 w-72 bg-violet-950 rounded-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={profile}
              alt="Foto de perfil"
              width={500}
              height={500}
            />
          </div>
          <header className="text-center z-10">
            <h2 className="text-base font-bold text-gray-300 animate-fade-in">
              Frontend Developer
            </h2>
            <h1 className="text-3xl font-bold text-white animate-fade-out">
              Antonio Claudio
            </h1>
            <p className="text-lg text-gray-300 animate-fade-in">
              Olá, seja bem vindo ao meu portifólio.
            </p>
            <a href="#footer">
              <Button className="mt-4">Entrar em contato</Button>
            </a>
          </header>
        </main>
        <div className="absolute bottom-0 z-50 left-1/2 transform -translate-x-1/2 mb-4 text-white ">
          <ArrowDown className="animate-bounce" size={32} />
        </div>
      </div>
      <About />
      <MyProject />
      <Footer />
    </>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "text-white bg-violet-900 hover:bg-violet-950 outline-none transition-all ease-linear font-bold rounded-md text-base px-5 py-3",
        props.className
      )}
    >
      {children}
    </button>
  );
}

interface Options {
  title: string;
  url: string;
}

function Navbar() {
  const options: Options[] = [
    { title: "Sobre mim", url: "#about" },
    { title: "Meus projetos", url: "#myProject" },
    { title: "Contato", url: "#footer" },
  ];

  return (
    <nav
      className={clsx(
        "flex items-center justify-between px-20 max-w-7xl mx-auto relative z-50 h-20",
        "max-xl:px-5 max-xl:h-20"
      )}
    >
      <div className="flex items-center gap-3 text-gray-400 text-lg max-md:text-sm">
        <EnvelopeSimple size={24} />
        <span>claudioalvesdev@gmail.com</span>
      </div>
      <MenuHamburger options={options} />
      <ul
        className={clsx(
          "flex gap-6 font-medium mt-4 rounded-lg z-50",
          "max-md:hidden"
        )}
      >
        {options.map((option) => (
          <li key={option.title}>
            <a
              href={option.url}
              className="block py-2 px-3 md:p-0 text-white hover:text-gray-400 "
            >
              {option.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface MenuHamburgerProps {
  options: Options[];
}

function MenuHamburger({ options }: MenuHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx("hidden", "max-md:flex")}
        onClick={() => setIsOpen(true)}
      >
        <List
          className="cursor-pointer text-gray-300 hover:opacity-70"
          size={24}
        />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-20 ease-in z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full bg-white w-3/4
            flex justify-start items-start p-10 py-20 animate-slide-right-to-left"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute right-5 top-10 cursor-pointer hover:opacity-40"
              size={24}
              onClick={() => setIsOpen(false)}
            />
            <ul className="flex flex-col gap-6 text-gray-700 text-base font-medium  ">
              {options.map((option) => (
                <li key={option.title}>
                  <a href={option.url} onClick={() => setIsOpen(false)}>
                    {option.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
