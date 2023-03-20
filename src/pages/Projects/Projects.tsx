import { useEffect } from "react";
import { Logo, Sidebar, Title } from "../../components";
import Aos from "aos";

export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="w-full h-screen flex flex-row gap-[-4rem]">
      <div
        data-aos="fade-up"
        className="absolute top-[345%] right-[21%] z-[80] bg-[rgba(0,0,0,0.7)] backdrop-blur-lg px-4 rounded-xl"
      >
        <Title
          color="white"
          size="big"
          className="flex items-center justify-center gap-4"
        >
          Somente na <Logo logoTipo={true} width={250} />
        </Title>
      </div>
      <a
        href="https://xr-sdesigns.netlify.app"
        target="_blank"
        className="z-[70] h-full bg-cover bg-right bg-no-repeat bg-project1 bg-white w-[28rem] absolute top-auto left-0 rounded-r-3xl hover:w-[40rem] transition-all ease duration-500 delay-100 flex items-end"
      >
        <div className="h-[10%] w-full bg-[rgba(0,0,0,0.5)] rounded-br-3xl flex justify-center items-center transition-all ease duration-500">
          <Title color="white">LANDING PAGE S! DESIGNS</Title>
        </div>
      </a>
      <a
        href="https://www.behance.net/gallery/137517955/SONY-Metaverse-%28NFT%29"
        target="_blank"
        className="z-[60] h-screen bg-cover bg-center bg-no-repeat bg-project2 bg-[red] w-[28rem] absolute top-auto left-[15rem] rounded-r-3xl hover:w-[40rem] transition-all ease duration-500 delay-100 flex items-end"
      >
        <div className="h-[10%] w-full bg-[rgba(0,0,0,0.5)] rounded-br-3xl pr-24 flex justify-end items-center transition-all ease duration-500">
          <Title color="white">DESIGN MARKETPLACE WEB3</Title>
        </div>
      </a>
      <a
        href="https://cliquemobilidade.com.br"
        target="_blank"
        className="z-50 h-screen bg-cover bg-center bg-no-repeat bg-project3 bg-black w-[28rem] absolute top-auto left-[30rem] rounded-r-3xl hover:w-[40rem] transition-all ease duration-500 delay-100 flex items-end"
      >
        <div className="h-[10%] w-full bg-[rgba(0,0,0,0.5)] rounded-br-3xl pr-24 flex justify-end items-center transition-all ease duration-500">
          <Title color="white">LANDING PAGE CLIQUE MOB</Title>
        </div>
      </a>
      <a
        href="https://xr-dexlabs.netlify.app"
        target="_blank"
        className="z-40 h-screen bg-cover bg-right bg-no-repeat bg-project4 bg-[red] w-[28rem] absolute top-auto left-[45rem] rounded-r-3xl hover:w-[40rem] transition-all ease duration-500 delay-100 flex items-end"
      >
        <div className="h-[10%] w-full bg-[rgba(0,0,0,0.5)] rounded-br-3xl pr-32 flex justify-end items-center transition-all ease duration-500">
          <Title color="white">WEBSITE DEXLABS</Title>
        </div>
      </a>
      <div className="z-30 h-screen bg-cover bg-center bg-no-repeat bg-project5 bg-black w-[28rem] absolute top-auto left-[60rem] rounded-r-3xl hover:w-[40rem] transition-all ease duration-500 delay-100 flex items-end">
        <div className="h-[10%] w-full bg-[rgba(0,0,0,0.5)] rounded-br-3xl pr-14 flex justify-end items-center transition-all ease duration-500">
          <Title color="white">SISTEMA GESTÃO DE FINANCIAS</Title>
        </div>
      </div>
      <div className="z-20 h-screen bg-cover bg-center bg-no-repeat bg-project6 bg-[red] w-[28rem] absolute top-auto left-[75rem] rounded-r-3xl hover:w-[40rem] transition-all ease duration-500 delay-100 flex items-end">
        <div className="h-[10%] w-full bg-[rgba(0,0,0,0.5)] rounded-br-3xl pr-32 flex justify-end items-center transition-all ease duration-500">
          <Title color="white">DESIGN ZELDA</Title>
        </div>
      </div>
      <div className="z-10 h-screen bg-cover bg-left bg-no-repeat bg-project7 bg-black w-[23.35%] absolute top-auto left-[90rem] rounded-l-3xl flex items-end">
        <div className="h-[10%] w-full bg-[rgba(0,0,0,0.5)] rounded-br-3xl pr-16 flex justify-end items-center transition-all ease duration-500">
          <Title color="white">DESIGN GOW</Title>
        </div>
      </div>
    </section>
  );
}
