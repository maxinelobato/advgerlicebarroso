import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import gerlice from "/public/dragerlice.jpg";

export default function AboutGerlice() {
  return (
    <>
      <section className="overflow-hidden bg-cyan-950 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-0">
          <div className="mx-auto max-w-md text-center sm:text-left">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-stone-950 uppercase rounded-full bg-white">
                  Sobre
                </p>
              </div>
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Gerlice Barroso
                <br className="hidden md:block" />
                <span className="inline-block text-white font-thin text-2xl">
                  OAB/MG 102.238
                </span>
              </h2>
              <p className="text-sm font-semibold text-white md:text-lg">
                Especialista em DIREITO DE FAMÍLIA, com 15 anos de experiência,
                vários cursos de especialização e capacitação profissional.
                Cuidamos de todos os detalhes do seu benefício, não importa o
                tamanho do problema, vamos tratar com seriedade e
                profissionalismo, dando uma solução especializada e fazendo toda
                a diferença na hora de agilizar e no resultado do seu processo.
              </p>
              <p className="mt-4 font-semibold text-sm text-white md:text-lg">
                Nosso escritório dedica em especial, à defesa dos direitos dos
                segurados, aposentados e pensionistas da Previdência Social
                (INSS e Servidor Público) para garantir os seus direitos.
              </p>
            </div>
            <div className="mt-4 md:mt-8">
              <ButtonHero />
            </div>
          </div>
        </div>

        <Image
          alt="Gerlice About"
          src={gerlice}
          className="h-full w-full object-cover sm:h-[calc(80%_-_2rem)] sm:self-center sm:rounded-ss-[20px] md:h-[calc(80%_-_4rem)] md:rounded-ss-[50px] sm:rounded-es-[50px]"
        />
      </section>
    </>
  );
}
