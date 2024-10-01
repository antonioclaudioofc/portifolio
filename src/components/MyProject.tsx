import Image from "next/image";
import aniverlembre from "@/assets/aniverlembre.jpeg";

export function MyProject() {
  return (
    <div className="py-20 w-full bg-violet-950 relative" id="myProject">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <section className="text-white max-w-7xl mx-auto py-20 w-full px-5 relative z-10">
        <h3 className="text-4xl font-bold text-center">Meus projetos</h3>
        <div className="max-w-2xl mx-auto mt-6">
          <div className="max-w-sm border border-gray-100 outline-none rounded-lg mx-auto">
            <Image
              className="rounded-t-lg object-cover"
              src={aniverlembre}
              width={500}
              height={500}
              alt="Image do site AniverLembre"
            />

            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold text-white">
                AniverLembre
              </h5>
              <p className="mb-3 text-base text-gray-300">
                Permite que os usuários adicionem lembretes de aniversários. É
                possível personalizar cada lembrete com informações como o nome
                do aniversariante e notas adicionais. A interface amigável.
                Nunca se esqueça de um aniversário importante novamente!
              </p>
              <a
                href="https://aniver-lembre.vercel.app/login"
                target="_blank"
                className="block w-full py-3 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-400  "
              >
                Ver Mais
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
