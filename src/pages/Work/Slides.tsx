import { useEffect, useState } from "react";
import { Title, Arrow, Row, Button } from "../../components";
import classNames from "classnames";

type Props = {
  slide: number;
};

export function Slides({ slide }: Props) {
  const [number, setNumber] = useState(1);

  function NextNumber() {
    if (number === 5) return null;
    setNumber(number + 1);
  }

  function BackNumber() {
    if (number === 1) return null;
    setNumber(number - 1);
  }

  useEffect(() => {
    setNumber(1);
  }, [slide]);

  return (
    <>
      {slide === 0 && (
        <div
          data-aos={"fade-up"}
          className="flex flex-col w-[54em] -mt-20 pr-20"
        >
          <Title
            children={"0" + number}
            className="text-[500px] text-[#333333] w-fit cursor-default"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex items-center justify-center -mt-40 w-full overflow-hidden"
          >
            <Title
              children={"LOGO"}
              size="big"
              className={classNames(
                "text-[#333333] text-center transition-all duration-500 ease-in-out",
                { "translate-x-0": number === 1 },
                { "-translate-x-full opacity-0 hidden": number === 2 },
                { "-translate-x-full opacity-0 hidden": number === 3 },
                { "-translate-x-full opacity-0 hidden": number === 4 },
                { "-translate-x-full opacity-0 hidden": number === 5 }
              )}
            />
            <Title
              children={"BANNER"}
              size="big"
              className={classNames(
                "text-[#333333] text-center transition-all duration-500 ease-in-out",
                { "translate-x-full opacity-0 hidden": number === 1 },
                { "translate-x-0": number === 2 },
                { "-translate-x-full opacity-0 hidden": number === 3 },
                { "-translate-x-full opacity-0 hidden": number === 4 },
                { "-translate-x-full opacity-0 hidden": number === 5 }
              )}
            />
            <Title
              children={"FLYER"}
              size="big"
              className={classNames(
                "text-[#333333] text-center transition-all duration-500 ease-in-out",
                { "translate-x-full opacity-0 hidden": number === 1 },
                { "translate-x-full opacity-0 hidden": number === 2 },
                { "translate-x-0": number === 3 },
                { "-translate-x-full opacity-0 hidden": number === 4 },
                { "-translate-x-full opacity-0 hidden": number === 5 }
              )}
            />
            <Title
              children={"UI/UX"}
              size="big"
              className={classNames(
                "text-[#333333] text-center transition-all duration-500 ease-in-out",
                { "opacity-0 hidden": number === 1 },
                { "opacity-0 hidden": number === 2 },
                { "opacity-0 w-0": number === 3 },
                { "tracking-[1.32em]": number === 4 },
                { "w-0 tracking-[0px] opacity-0": number === 5 }
              )}
            />
            <Title
              children={"OUTROS"}
              size="big"
              className={classNames(
                "text-[#333333] text-center transition-all duration-500 ease-in-out",
                { "opacity-0 hidden": number === 1 },
                { "opacity-0 hidden": number === 2 },
                { "opacity-0 hidden": number === 3 },
                { "w-0 tracking-[0px]": number === 4 },
                { "tracking-[0.76em]": number === 5 }
              )}
            />
          </div>
          <div
            data-aos={"fade-up"}
            className="flex flex-col self-center justify-center items-end w-[100%] gap-4"
          >
            <div className="flex flex-row items-center justify-between w-full h-20 overflow-hidden transition-all duration-500 ease-in-out">
              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out rotate-180 mr-4"
                }
                onClick={() => BackNumber()}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-full": number === 1 },
                  { "w-[10%]": number === 2 },
                  { "translate-x-full text-[0px]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"01"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out z-[3]",
                  { "text-[60px] mx-2": number === 1 },
                  { "text-[36px] mx-2": number === 2 },
                  { "-translate-x-full text-[0px] opacity-0": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(1)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[70%]": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[10%]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"02"}
                className={classNames(
                  "text-center cursor-pointer transition-all duration-500 ease-in-out",
                  { "mx-2 text-[36px]": number === 1 },
                  { "text-[60px] mx-2": number === 2 },
                  { "mx-2 text-[36px]": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(2)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[10%] ": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[10%]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"03"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "mx-2 text-[36px]": number === 2 },
                  { "text-[60px] mx-2": number === 3 },
                  { "text-[36px] mx-2": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(3)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "w-[10%] ": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[10%]": number === 5 }
                )}
              />

              <Title
                children={"04"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "mx-2 text-[36px] ": number === 3 },
                  { "text-[60px] mx-2": number === 4 },
                  { "text-[36px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(4)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "translate-x-full text-[0px]": number === 2 },
                  { "w-[10%] ": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[70%]": number === 5 }
                )}
              />

              <Title
                children={"05"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "translate-x-full text-[0px] opacity-0": number === 3 },
                  { "mx-2 text-[36px] ": number === 4 },
                  { "text-[60px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(5)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "translate-x-full text-[0px] opacity-0": number === 3 },
                  { "w-[10%] ": number === 4 },
                  { "w-[100%]": number === 5 }
                )}
              />

              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out ml-4"
                }
                onClick={() => NextNumber()}
              />
            </div>
            <Button
              aos="fade-up"
              aosDuration="2000"
              children={"Pedir"}
              onClick={() => null}
              className="w-1/3"
              iconCheck={true}
            />
          </div>
        </div>
      )}

      {slide === 1 && (
        <div
          data-aos={"fade-up"}
          className="flex flex-col justify-center -mt-20"
        >
          <Title
            children={"0" + number}
            className="text-[500px] text-[#333333]"
          />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Title
              size="big"
              className={classNames(
                "text-[#333333] -mt-40 w-full text-center transition-all duration-500 ease-in-out"
              )}
            >
              {number === 1 && "WEBSITE"}
              {number === 2 && "LANDINGPAGE"}
              {number === 3 && "ECCOMERCE"}
              {number === 4 && "DROPSHIPPING"}
              {number === 5 && "OUTROS"}
            </Title>
          </div>

          <div
            data-aos={"fade-up"}
            className="flex flex-col justify-end items-end w-[45rem] ml-10 gap-4"
          >
            <div className="flex flex-row items-center justify-between w-full h-20 overflow-hidden transition-all duration-500 ease-in-out">
              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out rotate-180 mr-4"
                }
                onClick={() => BackNumber()}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-full": number === 1 },
                  { "w-[10%]": number === 2 },
                  { "translate-x-full text-[0px]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"01"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "text-[60px] mx-2": number === 1 },
                  { "text-[36px] mx-2": number === 2 },
                  { "-translate-x-full text-[0px] opacity-0": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(1)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[70%]": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[10%]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"02"}
                className={classNames(
                  "text-center cursor-pointer transition-all duration-500 ease-in-out",
                  { "mx-2 text-[36px]": number === 1 },
                  { "text-[60px] mx-2": number === 2 },
                  { "mx-2 text-[36px]": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(2)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[10%] ": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[10%]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"03"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "mx-2 text-[36px]": number === 2 },
                  { "text-[60px] mx-2": number === 3 },
                  { "text-[36px] mx-2": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(3)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "w-[10%] ": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[10%]": number === 5 }
                )}
              />

              <Title
                children={"04"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "mx-2 text-[36px] ": number === 3 },
                  { "text-[60px] mx-2": number === 4 },
                  { "text-[36px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(4)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "translate-x-full text-[0px]": number === 2 },
                  { "w-[10%] ": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[70%]": number === 5 }
                )}
              />

              <Title
                children={"05"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "translate-x-full text-[0px] opacity-0": number === 3 },
                  { "mx-2 text-[36px] ": number === 4 },
                  { "text-[60px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(5)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "translate-x-full text-[0px]": number === 2 },
                  { "translate-x-full text-[0px]": number === 3 },
                  { "w-[10%] ": number === 4 },
                  { "w-[100%]": number === 5 }
                )}
              />

              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out ml-4"
                }
                onClick={() => NextNumber()}
              />
            </div>
            <Button
              aos="fade-up"
              aosDuration="2000"
              children={"Pedir"}
              onClick={() => null}
              className="w-1/3 self-end"
              iconCheck={true}
            />
          </div>
        </div>
      )}

      {slide === 2 && (
        <div
          data-aos={"fade-up"}
          className="flex flex-col justify-center -mt-20"
        >
          <Title
            children={"0" + number}
            className="text-[500px] text-[#333333]"
          />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Title
              size="big"
              className={classNames(
                "text-[#333333] -mt-40 w-full text-center transition-all duration-500 ease-in-out",
                { "ml-56 tracking-[0.78em]": number === 1 },
                { "tracking-[0.085em]": number === 2 },
                { "tracking-[0.215em]": number === 3 },
                { "tracking-[0.03em]": number === 4 },
                { "tracking-[0.76em]": number === 5 }
              )}
            >
              {number === 1 && "PDV"}
              {number === 2 && "EMPRESARIAL"}
              {number === 3 && "FINANCEIRO"}
              {number === 4 && "MARKETPLACE"}
              {number === 5 && "OUTROS"}
            </Title>
          </div>

          <div
            data-aos={"fade-up"}
            className="flex flex-col items-center justify-between w-[45rem] ml-10 gap-4"
          >
            <div className="flex flex-row items-center justify-between w-full h-20 overflow-hidden transition-all duration-500 ease-in-out">
              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out rotate-180 mr-4"
                }
                onClick={() => BackNumber()}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-full": number === 1 },
                  { "w-[10%]": number === 2 },
                  { "translate-x-full text-[0px]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"01"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "text-[60px] mx-2": number === 1 },
                  { "text-[36px] mx-2": number === 2 },
                  { "-translate-x-full text-[0px] opacity-0": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(1)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[70%]": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[10%]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"02"}
                className={classNames(
                  "text-center cursor-pointer transition-all duration-500 ease-in-out",
                  { "mx-2 text-[36px]": number === 1 },
                  { "text-[60px] mx-2": number === 2 },
                  { "mx-2 text-[36px]": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(2)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[10%] ": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[10%]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"03"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "mx-2 text-[36px]": number === 2 },
                  { "text-[60px] mx-2": number === 3 },
                  { "text-[36px] mx-2": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(3)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "w-[10%] ": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[10%]": number === 5 }
                )}
              />

              <Title
                children={"04"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "mx-2 text-[36px] ": number === 3 },
                  { "text-[60px] mx-2": number === 4 },
                  { "text-[36px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(4)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "translate-x-full text-[0px]": number === 2 },
                  { "w-[10%] ": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[70%]": number === 5 }
                )}
              />

              <Title
                children={"05"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "translate-x-full text-[0px] opacity-0": number === 3 },
                  { "mx-2 text-[36px] ": number === 4 },
                  { "text-[60px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(5)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "translate-x-full text-[0px]": number === 2 },
                  { "translate-x-full text-[0px]": number === 3 },
                  { "w-[10%] ": number === 4 },
                  { "w-[100%]": number === 5 }
                )}
              />

              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out ml-4"
                }
                onClick={() => NextNumber()}
              />
            </div>
            <Button
              aos="fade-up"
              aosDuration="2000"
              children={"Pedir"}
              onClick={() => null}
              className="w-1/3 self-end"
              iconCheck={true}
            />
          </div>
        </div>
      )}

      {slide === 3 && (
        <div
          data-aos={"fade-up"}
          className="flex flex-col justify-center -mt-20"
        >
          <Title
            children={"0" + number}
            className="text-[500px] text-[#333333]"
          />
          <div data-aos="fade-up" data-aos-duration="1000">
            <Title
              size="big"
              className={classNames(
                "text-[#333333] -mt-40 w-full text-center transition-all duration-500 ease-in-out",
                { "tracking-[0.47em]": number === 1 },
                { "tracking-[0.73em]": number === 2 },
                { "tracking-[0.47em]": number === 3 },
                { "tracking-[0.155em]": number === 4 },
                { "tracking-[0.76em]": number === 5 }
              )}
            >
              {number === 1 && "CHATBOT"}
              {number === 2 && "APOSTA"}
              {number === 3 && "BROWSER"}
              {number === 4 && "AUTOMACAO"}
              {number === 5 && "OUTROS"}
            </Title>
          </div>

          <div
            data-aos={"fade-up"}
            className="flex flex-col items-center justify-between w-[45rem] ml-10 gap-4"
          >
            <div className="flex flex-row items-center justify-between w-full h-20 overflow-hidden transition-all duration-500 ease-in-out">
              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out rotate-180 mr-4"
                }
                onClick={() => BackNumber()}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-full": number === 1 },
                  { "w-[10%]": number === 2 },
                  { "translate-x-full text-[0px]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"01"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "text-[60px] mx-2": number === 1 },
                  { "text-[36px] mx-2": number === 2 },
                  { "-translate-x-full text-[0px] opacity-0": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(1)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[70%]": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[10%]": number === 3 },
                  { "translate-x-full text-[0px]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"02"}
                className={classNames(
                  "text-center cursor-pointer transition-all duration-500 ease-in-out",
                  { "mx-2 text-[36px]": number === 1 },
                  { "text-[60px] mx-2": number === 2 },
                  { "mx-2 text-[36px]": number === 3 },
                  { "-translate-x-full text-[0px] opacity-0": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(2)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "w-[10%] ": number === 1 },
                  { "w-[100%]": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[10%]": number === 4 },
                  { "translate-x-full text-[0px]": number === 5 }
                )}
              />

              <Title
                children={"03"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "mx-2 text-[36px]": number === 2 },
                  { "text-[60px] mx-2": number === 3 },
                  { "text-[36px] mx-2": number === 4 },
                  { "-translate-x-full text-[0px] opacity-0": number === 5 }
                )}
                onClick={() => setNumber(3)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "w-[10%] ": number === 2 },
                  { "w-[100%]": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[10%]": number === 5 }
                )}
              />

              <Title
                children={"04"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "mx-2 text-[36px] ": number === 3 },
                  { "text-[60px] mx-2": number === 4 },
                  { "text-[36px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(4)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "translate-x-full text-[0px]": number === 2 },
                  { "w-[10%] ": number === 3 },
                  { "w-[100%]": number === 4 },
                  { "w-[70%]": number === 5 }
                )}
              />

              <Title
                children={"05"}
                className={classNames(
                  "cursor-pointer transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px] opacity-0": number === 1 },
                  { "translate-x-full text-[0px] opacity-0": number === 2 },
                  { "translate-x-full text-[0px] opacity-0": number === 3 },
                  { "mx-2 text-[36px] ": number === 4 },
                  { "text-[60px] mx-2": number === 5 }
                )}
                onClick={() => setNumber(5)}
              />

              <Row
                color="red"
                height={"2px"}
                className={classNames(
                  "transition-all duration-500 ease-in-out",
                  { "translate-x-full text-[0px]": number === 1 },
                  { "translate-x-full text-[0px]": number === 2 },
                  { "translate-x-full text-[0px]": number === 3 },
                  { "w-[10%] ": number === 4 },
                  { "w-[100%]": number === 5 }
                )}
              />

              <Arrow
                className={
                  "hover:scale-110 transition-all duration-300 ease-in-out ml-4"
                }
                onClick={() => NextNumber()}
              />
            </div>
            <Button
              aos="fade-up"
              aosDuration="2000"
              children={"Pedir"}
              onClick={() => null}
              className="w-1/3 self-end"
              iconCheck={true}
            />
          </div>
        </div>
      )}
    </>
  );
}
