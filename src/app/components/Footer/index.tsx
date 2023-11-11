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
            <div>
              <div className="flex justify-center lg:justify-start">
                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-white">
                    Nossos contatos
                  </p>
                  <ul className="mt-8 space-y-6 text-sm">
                    <li>
                      <div className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>

                        <span className="flex-1 text-white">contato@lenoiradvogados.com.br</span>
                      </div>
                    </li>

                    <li>
                      <a
                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                        href="/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 shrink-0 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>

                        <span className="flex-1 text-white">(31) 3295-3748 | 9 9393-3748</span>
                      </a>
                    </li>

                    <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <address className="-mt-0.5 flex-1 not-italic text-white">
                        Av. Barão Homem de Melo, 4500 / sl. 1411 – Estoril •
                        Belo Horizonte-MG
                      </address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-20 text-center text-sm text-white">
            Lenoir Advogados Associados &copy; 2023. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
