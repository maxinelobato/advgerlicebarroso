import ButtonCardHelp from "../Buttons/buttoncardhelp";
import WhyLenoir from "../WhyLenoir";

export default function CardHelp() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
          <h1 className="py-4 mb-5 font-sans font-semibold text-4xl tracking-tight text-cyan-950 sm:text-5xl sm:leading-none">
            Por que contratar a Dra. Gerlice da{" "}
            <span className="font-extrabold">Lenoir Advocacia?</span>
          </h1>
        </div>
        <WhyLenoir />
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="py-4 mb-5 font-sans font-semibold text-4xl tracking-tight text-cyan-950 sm:text-5xl sm:leading-none">
            Tenha a ajuda necessária de uma Especialista em{" "}
            <span className="font-extrabold">Direito de Família</span>
          </h1>
          <div className="mt-8 sm:mt-12">
            <ButtonCardHelp />
          </div>
        </div>
      </div>
    </section>
  );
}
