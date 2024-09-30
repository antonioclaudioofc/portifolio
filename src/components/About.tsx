import Image from "next/image";
import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import next from "@/assets/nextjs.svg";
import firebase from "@/assets/firebase.svg";
import github from "@/assets/github.svg";
import typescript from "@/assets/typescript.svg";
import react from "@/assets/react.svg";
import tailwind from "@/assets/tailwind-css.svg";

export function About() {
  return (
    <div className="w-full bg-violet-950 relative">
      <section className="text-white max-w-7xl mx-auto py-20 w-full px-5">
        <h3 className="text-4xl font-bold text-center">Sobre mim</h3>
        <div className="max-w-2xl text-base text-gray-400 text-justify mx-auto">
          <p className="mt-6 mb-3 animate-fade-in">
            Olá! Sou um desenvolvedor apaixonado por web design e tecnologia,
            com um ano de experiência em desenvolvimento de sites. Atualmente,
            estou focado em React, Next.js e TypeScript, utilizando Tailwind CSS
            para criar interfaces elegantes e responsivas.
          </p>
          <p className="animate-fade-out">
            Atualmente, estou em busca da minha primeira vaga no mercado de
            trabalho. Estou sempre aberto a novos desafios e oportunidades para
            aplicar meu conhecimento e contribuir para o sucesso de empresas e
            empreendedores. Se você procura um desenvolvedor dedicado e criativo
            para melhorar sua presença online, estou aqui para ajudar!
          </p>
        </div>
        <div className="max-w-2xl text-left mx-auto mt-6">
          <h4 className="text-base text-gray-400 font-semibold">Formação</h4>
          <h5 className="text-base text-gray-300 my-2">
            IFMA - Instituto Federal de Educação, Ciência e Tecnologia do
            Maranhão
          </h5>
          <div className="flex flex-col text-gray-500 text-sm font-bold">
            <span>Campus Caxias</span>
            <span>2020 - Presente</span>
          </div>
          <p className="text-gray-300 mt-3 mb-6">
            Há quatro anos, tenho me dedicado ao curso de Ciência da Computação.
            Como desenvolvedor, minha prioridade é entregar projetos de
            Desenvolvimento Web com qualidade e reponsividade.
          </p>
        </div>
        <div className="max-w-2xl text-left mx-auto">
          <h4 className="text-base text-gray-400 font-semibold">
            Habilidades e Tecnologias
          </h4>
          <SkillCard />
        </div>
      </section>
    </div>
  );
}

interface Images {
  src: string;
  alt: string;
  name: string;
}

function SkillCard() {
  const images: Images[] = [
    {
      name: "HTML5",
      alt: "Logo HTML5",
      src: html,
    },
    { name: "CSS3", alt: "Logo CSS3", src: css },
    { name: "Typescript", alt: "Logo Typescript", src: typescript },
    { name: "React", alt: "Logo React", src: react },
    { name: "Next.js", alt: "Logo Nextjs", src: next },
    { name: "Github", alt: "Logo do Github", src: github },
    { name: "Firebase", alt: "Logo do Firebase", src: firebase },
    { name: "Tailwind CSS", alt: "Logo do Tailwindcss", src: tailwind },
  ];
  return (
    <div className="flex items-center text-gray-800 justify-between gap-y-2 flex-wrap my-3">
      {images.map((image) => (
        <div
          key={image.name}
          className="py-2 w-40 rounded-lg bg-gray-200 text-base font-medium flex items-center gap-2 mx-auto"
        >
          <Image
            className="ml-2"
            src={image.src}
            width={40}
            height={40}
            alt={image.alt}
          />
          <span>{image.name}</span>
        </div>
      ))}
    </div>
  );
}
