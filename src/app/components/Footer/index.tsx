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
                          width="80"
                          height="80"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                        </svg>

                        <span className="flex-1 text-white">
                          contato@lenoiradvogados.com.br
                        </span>
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
                          width="80"
                          height="80"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
                        </svg>

                        <span className="flex-1 text-white">
                          (31) 3295-3748 | 99927-6013
                        </span>
                      </a>
                    </li>

                    <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-white"
                        width="80"
                        height="80"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
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
