"use client";

import clsx from "clsx";
import { useScrollPosition } from "../utils/useScrollPosition";
import { Code, List, X } from "@phosphor-icons/react";
import { useState } from "react";

interface Options {
  title: string;
  url: string;
}

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const options: Options[] = [
    { title: "Inicio", url: "#" },
    { title: "Sobre mim", url: "#" },
    { title: "Skills", url: "#" },
    { title: "Meus Projetos", url: "3" },
    { title: "Contato", url: "#" },
  ];
  return (
    <>
      <nav
        className={clsx(
          scrollPosition > 0 ? "shadow-[0_4px_20px_-1px_rgba(0,0,0,0.1)]" : "",
          "flex items-center justify-center sticky top-0 h-20 max-xl:h-20 bg-blue-500 text-white transition-all duration-300"
        )}
      >
        <div
          className={clsx(
            "flex justify-between px-24 w-full max-w-7xl items-center",
            "max-xl:px-8"
          )}
        >
          <div className="flex items-center gap-x-2 cursor-pointer hover:opacity-65">
            <Code size={44} className="h-12 w-12 text-yellow-500" />
            <h2 className="text-2xl font-bold">Claudio</h2>
          </div>
          <MenuHamburger options={options} />
          <ul
            className={clsx(
              "flex items-center gap-6 text-white text-base font-medium",
              "max-xl:hidden"
            )}
          >
            {options.map((option) => (
              <li key={option.title}>
                <a
                  href={option.url}
                  className="after:content-[''] after:block after:bg-yellow-500 after:w-0 after:h-1 hover:after:w-full after:transition-[width_3.s]"
                >
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
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
        className={clsx("hidden", "max-xl:flex")}
        onClick={() => setIsOpen(true)}
      >
        <List className="cursor-pointer hover:opacity-70" size={32} />
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-20 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full bg-white w-3/4
            flex justify-start items-start p-10 py-20 animate-slide-right-to-left"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute text-black cursor-pointer right-5 top-10 hover:text-gray-700"
              size={32}
              onClick={() => setIsOpen(false)}
            />
            <ul className="flex flex-col gap-6 text-gray-700 text-base font-medium">
              {options.map((option) => (
                <li
                  key={option.title}
                  className="after:content-[''] after:block after:bg-yellow-500 after:w-0 after:h-1 hover:after:w-full after:transition-[width_3.s]"
                >
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
