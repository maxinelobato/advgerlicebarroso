export default function Faq() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 pb-16 md:px-8">
        <div className="mx-auto text-center">
            <div className="space-y-5 max-w-full mx-auto text-center px-4 pt-8">
              <h1 className="uppercase py-4 mb-5 font-sans text-4xl font-bold tracking-tight text-cyan-950 sm:text-5xl sm:leading-none">
                Dúvidas Frequentes
              </h1>
            </div>
          </div>
          <div className="space-y-4">
            <details className="group rounded-2xl bg-cyan-950 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-bold text-white">
                  Como funciona o atendimento?
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-cyan-950 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-white">
                Depois de clicar nos botões de contato da página, você será
                redirecionado para o WhatsApp comercial do escritório para
                conversar com um advogado da nossa equipe ou a Dra. Gerlice.
              </p>
              <p className="mt-4 leading-relaxed text-white">
                Esse profissional conversará com você sobre seu problema para
                entendê-lo e concluir sobre a viabilidade de sua atuação. Mais
                elementos serão solicitados se considerarmos necessários para
                concluir essa análise.
              </p>
              <p className="mt-4 leading-relaxed text-white">
                Finalmente, propomos a solução para o seu problema.
              </p>
            </details>

            <details className="group rounded-2xl bg-cyan-950 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-bold text-white">
                  Quanto vou gastar?
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-cyan-950 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-white">
                Somente depois de conversar com você e entender seu problema
                seremos capazes de formular uma proposta adequada à sua
                necessidade.
              </p>
              <p className="mt-4 leading-relaxed text-white">
                Exponha seu caso para nossa equipe.
              </p>
            </details>
            
            <details className="group rounded-2xl bg-cyan-950 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-bold text-white">
                  Preciso de um advogado para resolver meu problema?
                </h2>


                <span className="shrink-0 rounded-full bg-white p-1.5 text-cyan-950 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-white">
                Sim, o advogado é o único profissional competente para
                assessorar você quando o problema é jurídico.
              </p>
              <p className="mt-4 leading-relaxed text-white">
                Em se tratando de processos da área familiar, é obrigatória a presença
                de um advogado na sua defesa.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}
