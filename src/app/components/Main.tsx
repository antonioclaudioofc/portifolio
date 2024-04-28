import Image from "next/image";
import profile from "@/assets/perfil.png";

export default function Main() {
  return (
    <main className="bg-outer-space flex items-center flex-wrap">
      <div className="max-w-2xl text-alabaster grid gap-4 px-24">
        <p className="text-lg">Olá!</p>
        <h1 className="text-6xl">Eu sou Antonio Claudio</h1>
        <h2 className="text-4xl">Desenvolver FrontEnd</h2>
        <p className="text-gray-200 font-bold text-base">
          Entusiasta da tecnologia, especializado em transformar ideias
          complexas em interfaces de usuário intuitivas
        </p>
        <div className="flex gap-4">
          <button className="bg-big-foot-feel text-gray-50 px-8 py-4 font-bold rounded-md">
            Fale comigo
          </button>
          <button className="text-big-foot-feel bg-gray-50 px-8 py-4 font-bold rounded-md">
            Saiba mais
          </button>
        </div>
      </div>
      <Image
        className="max-w-2xl"
        src={profile}
        width={500}
        height={123}
        alt=""
      />
    </main>
  );
}
