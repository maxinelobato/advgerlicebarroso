import Image from "next/image";
import lenoir from "/public/lenoir.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-cyan-950">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-white p-2 text-cyan-950 shadow transition hover:bg-white/90 sm:p-3 lg:p-4"
              href="#"
            >
              <span className="sr-only">Voltar</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
              <Image
                className="w-48 md:w-auto lg:w-72"
                src={lenoir}
                sizes="100vw"
                alt="Logo Lenoir"
              />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
                O escritório Lenoir Advogados Associados atua em todo o
                território nacional, nas esferas judicial, extrajudicial,
                administrativa e consultiva, prestando serviços personalizados
                em diversas áreas do Direito.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-white lg:text-right">
            Lenoir Advogados Associados &copy; 2023. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
