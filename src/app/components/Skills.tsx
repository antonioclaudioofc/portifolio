import Image from "next/image";
import imgHtml from "@/assets/html.svg";
import imgCss from "@/assets/css.svg";
import imgTailwindcss from "@/assets/tailwind-css.svg";
import imgJavascript from "@/assets/javascript.svg";
import imgNextjs from "@/assets/nextjs.svg";
import imgGithub from "@/assets/github.svg";
import imgNodejs from "@/assets/node-js.svg";
import imgFirebase from "@/assets/firebase.svg";

export default function Skills() {
  return (
    <section className="bg-outer-space pb-20">
      <header className="text-center">
        <h2 className="text-alabaster text-4xl pt-16 pb-4">Skills</h2>
        <h3 className="text-white max-w-[700px] text-lg mx-auto pb-11">
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
    </section>
  );
}

function CardItem(props: { title: string; urlImage: string }) {
  return (
    <div className="bg-outer-space-100 text-alabaster text-lg font-bold text-center px-8 py-5 w-min shadow-lg rounded-lg">
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
