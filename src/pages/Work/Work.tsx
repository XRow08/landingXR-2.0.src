import { useState } from "react";
import { Arrow, Container, Description, Row, Title } from "../../components";
import { Slides } from "./Slides";
import classNames from "classnames";

export function Work() {
  const [slide, setSlide] = useState(0);

  function Next() {
    if (slide === 3) return setSlide(0);
    if (slide === 2) return setSlide(3);
    if (slide === 1) return setSlide(2);
    if (slide === 0) return setSlide(1);
  }

  function Back() {
    if (slide === 0) return setSlide(3);
    if (slide === 1) return setSlide(0);
    if (slide === 2) return setSlide(1);
    if (slide === 3) return setSlide(2);
  }

  return (
    <div className="bg-work bg-no-repeat bg-cover w-screen h-screen pt-20">
      <Row color="black" height={5} className="w-screen" />
      <div className="p-10 pl-[250px] h-full w-full flex gap-10 items-start z-[3]">
        <div className="flex flex-col justify-center items-start">
          <Title
            aos="fade-up"
            children={"TRABALHOS"}
            size="big"
            color="black"
          />
          <div className="flex flex-col w-[38rem] gap-10 justify-center items-center ">
            <Container
              aos="fade-up"
              className="self-start w-full h-full mt-8 p-8"
            >
              <Description
                children={
                  "ESTES SÃO OS SERVIÇOS QUE OFERECEMOS PARA SUA EVOLUÇÃO. MONTE SEU PEDIDO LOGO ABAIXO!"
                }
                width={"100%"}
              />
            </Container>
            <div
              data-aos={"fade-up"}
              className="flex flex-row items-center self-center w-[70%] h-48 gap-12"
            >
              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out"
                }
                onClick={() => Next()}
              />
              <div className="flex flex-col items-center justify-center overflow-hidden gap-6 w-full">
                <Title
                  children={"DESIGNS"}
                  className={classNames(
                    "text-center cursor-pointer transition-all duration-500 ease-in-out",
                    {
                      "text-[36px] translate-y-full": slide === 0,
                    },
                    {
                      "text-[24px] translate-y-2": slide === 1,
                    },
                    { "text-[0px]": slide === 2 },
                    { "text-[0px]": slide === 3 }
                  )}
                  onClick={() => setSlide(0)}
                />
                <Title
                  children={"WEBSITES"}
                  className={classNames(
                    "text-center cursor-pointer transition-all duration-500 ease-in-out",
                    {
                      "text-[24px] translate-y-full": slide === 0,
                    },
                    {
                      "text-[36px] translate-y-2": slide === 1,
                    },
                    {
                      "text-[24px] -translate-y-3": slide === 2,
                    },
                    { "text-[0px]": slide === 3 }
                  )}
                  onClick={() => setSlide(1)}
                />

                <Title
                  children={"SISTEMAS"}
                  className={classNames(
                    "text-center cursor-pointer transition-all duration-500 ease-in-out",
                    { "text-[0px]": slide === 0 },
                    { "text-[24px]": slide === 1 },
                    {
                      "text-[36px] -translate-y-3": slide === 2,
                    },
                    {
                      "text-[24px] -translate-y-full": slide === 3,
                    }
                  )}
                  onClick={() => setSlide(2)}
                />

                <Title
                  children={"BOTS"}
                  className={classNames(
                    "text-center cursor-pointer transition-all duration-500 ease-in-out",
                    { "text-[0px]": slide === 0 },
                    { "text-[0px]": slide === 1 },
                    {
                      "text-[24px] -translate-y-3": slide === 2,
                    },
                    {
                      "text-[36px] -translate-y-full": slide === 3,
                    }
                  )}
                  onClick={() => setSlide(3)}
                />
              </div>
              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out rotate-180"
                }
                onClick={() => Back()}
              />
            </div>
          </div>
        </div>
        <Slides slide={slide} />
      </div>
    </div>
  );
}
