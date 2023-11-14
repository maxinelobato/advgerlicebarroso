import Image from "next/image";
import ButtonHero from "../Buttons/buttonhero";
import lenoir from "/public/lenoir.svg";

export default function Header() {
  return (
    <>
      <section className="relative max-h-[87vh] bg-no-repeat bg-center bg-cover bg-[url(https://img.freepik.com/fotos-gratis/maos-segurando-papel-pessoas-fecham_23-2149191365.jpg?w=1060&t=st=1699925021~exp=1699925621~hmac=4d9786be8663741aa604748ddd1bd44684870e3ac179485d3b515fe443de1c5c)] lg:bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950 to-transparent"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-14 lg:h-screen lg:items-center lg:px-8 sm:px-6 sm:py-40 text-center">
          <div className="max-w-screen-2xl text-center">
            <h1
              className="text-3xl sm:text-5xl text-white font-extrabold"
              style={{ textShadow: "0px 0px 8px #000000" }}
            >
              Precisa de uma Advogada de Família para lhe
              <strong
                className="block font-extrabold"
                style={{ textShadow: "0px 0px 8px #000000" }}
              >
                ajudar?
              </strong>
            </h1>

            <p
              className="font-bold sm:text-2xl/relaxed pt-4 text-white "
              style={{ textShadow: "0px 0px 8px #000000" }}
            >
              Experiência juridica{" "}
              <span className="text-cyan-400">na Área Familiar</span>
            </p>

            <p
              className="font-bold sm:text-2xl/relaxed text-white "
              style={{ textShadow: "0px 0px 8px #000000" }}
            >
              Atendimento em{" "}
              <span className="text-cyan-400">Belo Horizonte</span>
            </p>

            <div className="py-8 sm:py-10">
              <ButtonHero />
              <div className="py-8 sm:py-16">
                <Image
                  className="w-48 mx-auto md:w-auto lg:w-64"
                  src={lenoir}
                  sizes="100vw"
                  alt="Logo Lenoir"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
