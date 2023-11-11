import ButtonCardHelp from "../Buttons/buttoncardhelp";

export default function CardHelp() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tenha a ajuda necessária com uma Especialista em Direito de Família
          </h2> */}
          <h1 className="py-4 mb-5 font-sans font-semibold text-4xl tracking-tight text-cyan-950 sm:text-5xl sm:leading-none">
          Tenha a ajuda necessária de uma Especialista em <span className="font-extrabold">Direito de Família</span>
              </h1>
          <div className="mt-8 sm:mt-12">
            <ButtonCardHelp />
          </div>
        </div>
      </div>
    </section>
  );
}
