import { Row, Title } from "../../components";
import { ImWhatsapp } from "react-icons/im";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-footer bg-no-repeat bg-cover w-screen h-full p-10">
      <Row
        color="white"
        height={5}
        width={"100vw"}
        className="absolute left-0"
      />
      <div className="p-10 pl-[200px] h-full w-full flex flex-col pt-20 pb-0 gap-20">
        <div className="flex flex-row justify-center gap-52">
          <div className="flex flex-col w-full gap-2 items-start">
            <Title
              children={"CONTATE-NOS"}
              className="text-[16px]"
              color="white"
            />
            <Row color="red" height={2} width={"100%"} className="mb-6" />
            <a href="mailto:xr.encomendas@gmail.com" target="_blank" className="flex items-center gap-4">
              <MdAlternateEmail color="white" size={22} className="-ml-[2px]" />
              <Title
                children={"xr.encomendas@gmail.com"}
                className="text-[16px] -ml-[2px]"
                color="white"
              />
            </a>
            <a href="https://wa.me/message/JLETYUNRPOFBE1" target="_blank" className="flex items-center gap-4">
              <ImWhatsapp color="white" size={18} />
              <Title
                children={"+55 (13) 99700-8527"}
                className="text-[16px]"
                color="white"
              />
            </a>
          </div>

          <div className="flex flex-col w-full gap-2 items-start">
            <Title children={"LINKS"} className="text-[16px]" color="white" />
            <Row color="red" height={2} width={"100%"} className="mb-6" />
            <a
              target="_blank"
              href="https://xrsistemas.netlify.app"
              className="flex items-center gap-2"
            >
              <Title
                children={"landing page"}
                className="text-[16px]"
                color="white"
              />
              <Title children={"v.01"} className="text-[16px]" color="red" />
            </a>
          </div>

          <div className="flex flex-col w-4/5 gap-2 items-start">
            <Title
              children={"SIGA-NOS"}
              className="text-[16px]"
              color="white"
            />
            <Row color="red" height={2} width={"100%"} className="mb-6" />
            <div className="flex items-center w-full justify-between">
              <a target="_blank" href="https://www.linkedin.com/in/xrow/">
                <FaLinkedin color="white" size={32} />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@xrsistemas?lang=pt-BR"
              >
                <FaTiktok color="white" size={32} />
              </a>
              <a target="_blank" href="https://www.instagram.com/xr_sistemas/">
                <FaInstagram color="white" size={32} />
              </a>
              <a target="_blank" href="https://github.com/XRow08">
                <FaGithub color="white" size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Row color="red" height={2} width={"100%"} className="mb-6" />
          <Title
            children={"© 2023 by xr sistemas"}
            className="text-[16px]"
            color="white"
          />
        </div>
      </div>
    </div>
  );
}
