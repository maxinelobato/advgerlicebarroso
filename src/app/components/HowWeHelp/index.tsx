import ButtonSpecialts from "../Buttons/buttonspecialts";

export default function HowWeHelp() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-15.08,15.09-40,40a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm18.24-18.24L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Z"></path>
        </svg>
      ),
      title: "Divórcio Consensual e Litigioso",
      desc: "Guiamos você através do processo de divórcio judicial e extrajudicial, buscando soluções eficientes para proteger seus interesses",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
        </svg>
      ),
      title: "Guarda e Regime de Visitas",
      desc: "Defendemos os melhores interesses das crianças, buscando acordos equitativos de guarda e visitação que promovam um ambiente saudável para o crescimento e desenvolvimento",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M134.16,24.1a4,4,0,0,0-3.56,1.81C120.3,41.48,120,55.79,120,56a8,8,0,0,0,9.68,7.79A8.24,8.24,0,0,0,136,55.68,8,8,0,0,1,144.8,48a8.14,8.14,0,0,1,7.2,8.23,24,24,0,0,1-48-.27c0-.63.09-10.78,5.44-24a4,4,0,0,0-4.59-5.39A104.16,104.16,0,0,0,24.07,131.66C26,186.72,71.23,231,126.32,231.9a104,104,0,0,0,7.84-207.8ZM80,127.91a12,12,0,1,1,12,12A12,12,0,0,1,80,127.91Zm80.27,54.77a61,61,0,0,1-64.54,0,8,8,0,0,1,8.54-13.54,45,45,0,0,0,47.46,0,8,8,0,0,1,8.54,13.54ZM164,139.91a12,12,0,1,1,12-12A12,12,0,0,1,164,139.91Z"></path>
        </svg>
      ),
      title: "Pensão Alimentícia e Revisional de Alimentos",
      desc: "Asseguramos que a pensão alimentícia seja justa e sustentável, garantindo o suporte financeiro necessário para o bem-estar dos filhos",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M220.8,169.6A8,8,0,0,0,216,168h-8V64a32,32,0,0,0-32-32H40A32,32,0,0,0,8,64C8,77.61,18.05,85.54,19.2,86.4h0A7.89,7.89,0,0,0,24,88a8,8,0,0,0,4.87-14.33h0C28.83,73.62,24,69.74,24,64a16,16,0,0,1,32,0V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32C232,178.39,222,170.46,220.8,169.6ZM104,96h64a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16Zm-8,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Zm104,72H107.71A31.82,31.82,0,0,0,112,192a26.92,26.92,0,0,0-1.21-8h102a12.58,12.58,0,0,1,3.23,8A16,16,0,0,1,200,208Z"></path>
        </svg>
      ),
      title: "Planejamento Patrimonial e Sucessões",
      desc: "Ajudamos a criar acordos pré-nupciais personalizados, protegendo seus ativos e estabelecendo expectativas claras para um casamento saudável",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.62h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68ZM205.66,98.34l-48-48a8,8,0,0,0-11.31,0l-56,56a8,8,0,0,0,0,11.31L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l12.69,12.69a8,8,0,0,0,11.31,0l56-56A8,8,0,0,0,205.66,98.34Z"></path>
        </svg>
      ),
      title: "Mediação Familiar",
      desc: "Facilitamos a comunicação construtiva e buscamos soluções amigáveis através da mediação, minimizando conflitos e preservando relacionamentos familiares",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path>
        </svg>
      ),
      title: "Planejamento Sucessório",
      desc: "Um ato de amor e responsabilidade que assegura que seus desejos sejam respeitados, evita conflitos familiares e protege seus entes queridos de encargos desnecessários.",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 pb-8 md:px-8">
          <div className="mx-auto text-center">
            <div className="space-y-5 max-w-full mx-auto text-center px-4 pt-8">
              <h1 className="uppercase py-4 mb-5 font-sans text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl sm:leading-none">
                quais serviços você precisa?
              </h1>
            </div>
          </div>
          <div className="relative mt-6">
            <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-zinc-950 space-y-3 p-4 rounded-lg shadow-inner shadow-zinc-800 hover:transition-all"
                >
                  <div className="flex items-center justify-center">
                    <div className="text-white">{item.icon}</div>
                  </div>

                  <h1 className="p-4 text-center text-lg uppercase font-extrabold text-white">
                    {item.title}
                  </h1>
                  <p className="text-center text-sm text-white">{item.desc}</p>

                  <div className="flex items-center justify-center">
                    <div className="pt-4 pb-4">
                      <ButtonSpecialts />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
