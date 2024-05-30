import clsx from "clsx";
import Navbar from "./components/Navbar";
import Image from "next/image";
import profile from "@/assets/perfil.png";
import programming from "@/assets/programming.svg";
import imgHtml from "@/assets/html.svg";
import imgCss from "@/assets/css.svg";
import imgTailwindcss from "@/assets/tailwind-css.svg";
import imgJavascript from "@/assets/javascript.svg";
import imgNextjs from "@/assets/nextjs.svg";
import imgGithub from "@/assets/github.svg";
import imgNodejs from "@/assets/node-js.svg";
import imgFirebase from "@/assets/firebase.svg";

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
      <section className="bg-blue-700 py-11 flex justify-center">
        <div
          className={clsx(
            "flex items-center px-24 gap-5 max-w-7xl w-full text-white",
            "max-xl:px-8 max-xl:w-full max-xl:flex-col"
          )}
        >
          <Image
            className="max-w-xl"
            src={programming}
            width={500}
            height={123}
            alt=""
          />
          <div className="max-w-xl">
            <h2 className="text-alabaster text-4xl font-bold mb-4">
              Sobre Mim
            </h2>
            <div className="text-gray-300 flex flex-col gap-y-3">
              <p>
                Aos 15 anos, embarquei na jornada técnica ao ensino médio em
                administração, influenciado por amigos e familiares. No entanto,
                percebi que essa área estava além da minha realidade e não me
                agradava. Mais me formei.
              </p>
              <p>
                Uma amiga do ensino fundamental sugeriu que eu explorasse a área
                de informática. Segui o conselho dela e me matriculei no curso
                mais próximo, onde descobri minha paixão pelo desenvolvimento
                web.
              </p>
              <p>
                O desenvolvimento web me mostrou o poder da nossa imaginação
                para criar serviços online que usamos diariamente. Agora, estou
                empolgado em integrar minhas criações com diversos aplicativos
                já disponíveis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-500 px-24 py-11 flex justify-center">
        <div className="max-w-7xl w-full text-white">
          <header className="text-center">
            <h2 className="text-4xl">Skills</h2>
            <h3 className="max-w-2xl text-lg mx-auto my-5">
              Estas são as tecnologias que fazem parte do meu conjunto de
              habilidades para criar websites e aplicativos
            </h3>
          </header>
          <div className="flex flex-wrap gap-9 px-24 justify-center">
            <CardItem title="HTML" urlImage={imgHtml} />
            <CardItem title="CSS" urlImage={imgCss} />
            <CardItem title="TAILWINDCSS" urlImage={imgTailwindcss} />
            <CardItem title="JAVASCRIPT" urlImage={imgJavascript} />
            <CardItem title="NEXTJS" urlImage={imgNextjs} />
            <CardItem title="GITHUB" urlImage={imgGithub} />
            <CardItem title="NODEJS" urlImage={imgNodejs} />
            <CardItem title="FIREBASE" urlImage={imgFirebase} />
          </div>
        </div>
      </section>
    </>
  );
}

function CardItem(props: { title: string; urlImage: string }) {
  return (
    <div className="bg-yellow-500 text-white cursor-pointer text-lg font-bold text-center px-8 py-5 w-min shadow-lg rounded-lg hover:bg-yellow-300 hover:text-black">
      <Image
        className="max-w-2xl"
        src={props.urlImage}
        width={160}
        height={160}
        alt=""
      />
      <span>{props.title}</span>
    </div>
  );
}