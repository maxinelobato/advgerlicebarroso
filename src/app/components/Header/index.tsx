import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import lenoir from "/public/lenoir.svg";

export default function Header() {
  return (
    <>
      <section className="relative max-h-[90vh] bg-no-repeat bg-center bg-cover bg-bg1 lg:max-h-[85vh] lg:bg-cover">
        <div className="absolute inset-0 bg-zinc-950 opacity-80"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-24 lg:py-40 lg:h-screen lg:items-center lg:px-8 sm:px-6 sm:py-40 text-center">
          <div className="max-w-screen-2xl text-center">

              <h1
                className="text-3xl sm:text-5xl text-white font-extrabold"
                style={{ textShadow: "0px 0px 8px #000000" }}
              >
                Precisa de uma Advogada de Família e Sucessões?
              </h1>

              <p
                className="sm:text-2xl/relaxed pt-4 text-white"
                style={{ textShadow: "0px 0px 8px #000000" }}
              >
                Experiência juridica{" "}
                <span className="font-black">
                  na Área Familiar e Sucessões
                  </span>
              </p>

              <p
                className="sm:text-2xl/relaxed text-white "
                style={{ textShadow: "0px 0px 8px #000000" }}
              >
                Atendimento em{" "}
                <span className="font-black">todo Brasil</span>
              </p>

            <div className="pt-6">
              <ButtonHero />
            </div>

            <div className="pt-7 sm:pt-24 sm:flex sm:items-center sm:justify-center">
              <div className="flex justify-center sm:justify-start">
                <Image
                  className="w-48 md:w-auto lg:w-64"
                  src={lenoir}
                  sizes="100vw"
                  alt="Logo Lenoir"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
