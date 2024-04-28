import Image from "next/image";
import programming from "@/assets/programming.svg";

export default function About() {
  return (
    <section className="bg-onyx flex px-24 py-16 gap-12">
      <Image
        className="max-w-2xl"
        src={programming}
        width={500}
        height={123}
        alt=""
      />
      <div className="">
        <h2 className="text-alabaster text-4xl font-bold mb-4">Sobre Mim</h2>
        <div className="text-gray-300 flex flex-col gap-y-3">
            <p>
              Aos 15 anos, embarquei na jornada técnica ao ensino médio em
              administração, influenciado por amigos e familiares. No entanto,
              percebi que essa área estava além da minha realidade e não me
              agradava. Mais me formei.
            </p>
            <p>
              Uma amiga do ensino fundamental sugeriu que eu explorasse a área de
              informática. Segui o conselho dela e me matriculei no curso mais
              próximo, onde descobri minha paixão pelo desenvolvimento web.
            </p>
            <p>
              O desenvolvimento web me mostrou o poder da nossa imaginação para
              criar serviços online que usamos diariamente. Agora, estou empolgado
              em integrar minhas criações com diversos aplicativos já disponíveis.
            </p>
        </div>
      </div>
    </section>
  );
}
