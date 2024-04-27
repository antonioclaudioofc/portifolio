"use client";
import { Code } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-24 pt-8 bg-outer-space">
      <div className="flex gap-6">
        <Code size={40} className="text-big-foot-feel w-10" />
        <span className="text-alabaster text-3xl">Claudio</span>
      </div>
      <div className="flex items-center gap-6 text-alabaster">
          <ul className="flex  text-base gap-6">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre mim</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Meus projetos</a>
            </li>
            <li>
              <a href="#">Contatos</a>
            </li>
          </ul>
          <button className="bg-big-foot-feel text-gray-50 px-8 py-4 font-bold rounded-md">
            Fale comigo
          </button>
      </div>
    </nav>
  );
}
