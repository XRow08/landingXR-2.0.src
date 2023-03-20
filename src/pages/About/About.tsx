import {
  Description,
  Button,
  Title,
  Sidebar,
  Container,
  Row,
} from "../../components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function About() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="bg-about bg-no-repeat bg-cover w-screen h-screen"
      id="about"
    >
      <div className="h-full flex flex-col justify-center">
        <Container className="flex flex-row justify-center gap-12 w-3/5 h-2/4 self-center">
          <div className="flex flex-col gap-8" data-aos="fade-left">
            {!active && (
              <>
                <Button
                  children={"SOBRE"}
                  variant={"active-black"}
                  onClick={() => setActive(true)}
                />
                <Button
                  children={"OBJETIVO"}
                  variant={"second"}
                  onClick={() => setActive(false)}
                />
              </>
            )}
            {active && (
              <>
                <Button
                  children={"SOBRE"}
                  variant={"second"}
                  onClick={() => setActive(true)}
                />
                <Button
                  children={"OBJETIVO"}
                  variant={"active-black"}
                  onClick={() => setActive(false)}
                />
              </>
            )}
          </div>

          <Row color="black" height={"100%"} width={6} />

          <div data-aos="fade-left" className="w-full">
            {active && (
              <Description
                aos="fade-left"
                children={
                  "SOMOS UMA AGÊNCIA QUE ATUA NA ÁREA DE DESIGN E NO DESENVOLVIMENTO DE SOFTWARES WEB2 E WEB3 COMO SISTEMAS DE PDV, WEBSITES, LANDING PAGES, GESTÕES FINANCEIRAS, CONTRATOS INTELIGENTES, BLOCKCHAINS E MUITO MAIS. ATUAMOS NO MERCADO DESDE 2020, COM MAIS DE 50 CLIENTES SATISFEITOS, ALÉM DE DIVERSOS PROJETOS DESENVOLVIDOS ENTREGUES."
                }
                color={"black"}
              />
            )}
            {!active && (
              <Description
                aos="fade-left"
                children={
                  "BUSCAMOS AJUDAR NOVOS EMPREENDEDORES, FACILITANDO TODO O PROCESSO DA CRIAÇÃO DE SUA IDENTIDADE E, DE FORMA CERTEIRA, OTIMIZAR SUA GESTÃO. TUDO DE FORMA ÚNICA E TOTALMENTE PERSONALIZADA!"
                }
                color={"black"}
              />
            )}
          </div>
        </Container>
        <div data-aos="fade-up" className="flex flex-row gap-5 mt-24 ml-60">
          <Title children={"QUEM"} size={"big"} />
          <Title children={"SOMOS"} color={"red"} size={"big"} />
        </div>
        <Row color="black" height={6} width={"100vw"} className="-mb-40" />
      </div>
    </div>
  );
}
