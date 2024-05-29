import clsx from "clsx";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Image from 'next/image'
import profile from "@/assets/perfil.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-blue-500 py-11 flex justify-center">
        <div
          className={clsx(
            "flex items-center justify-center flex-wrap max-w-7xl w-full px-24",
            "max-xl:px-8 max-xl:w-full"
          )}
        >
          <div className="text-white flex flex-col gap-y-4 max-w-xl">
            <p className="text-lg">Olá!</p>
            <h1 className="text-6xl">Eu sou Antonio Claudio</h1>
            <h2 className="text-4xl">Desenvolver FrontEnd</h2>
            <p className="font-bold text-base ">
              Entusiasta da tecnologia, especializado em transformar ideias
              complexas em interfaces de usuário intuitivas
            </p>
            <div className="flex gap-4">
              <button className="bg-yellow-500 border-yellow-600 hover:bg-yellow-300 hover:border-yellow-300 text-gray-50 px-8 py-4 font-bold rounded-md">
                Fale comigo
              </button>
              <button className="text-yellow-500 bg-white hover:bg-gray-200 px-8 py-4 font-bold rounded-md">
                Saiba mais
              </button>
            </div>
          </div>
          <Image
            className="max-w-xl"
            src={profile}
            width={500}
            height={123}
            alt=""
          />
        </div>
      </main>
      {/* <About />
      <Skills /> */}
    </>
  );
}
