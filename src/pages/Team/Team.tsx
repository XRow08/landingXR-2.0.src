import { useEffect } from 'react';

import xr from '../../assets/imgs/xr.avif';
import kael from '../../assets/imgs/kael.svg';
import sam from '../../assets/imgs/sam.svg';

import { Card, Row, Sidebar, Title } from '../../components';

import Aos from 'aos';
import 'aos/dist/aos.css';

export function Team() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="bg-team bg-no-repeat bg-cover w-screen h-[calc(100vh+6vh)]">
      <div className="p-10 h-full flex flex-col justify-center items-center ">
        <div data-aos="fade-up" className="flex flex-row gap-5 mb-20">
          <Title children={'NOSSA'} color="white" size="normal" />
          <Title children={'EQUIPE'} color="red" size="normal" />
        </div>
        <div className="flex flex-row justify-between items-center w-2/3">
          <div className="flex flex-col items-center">
            <div data-aos="fade-down" data-aos-duration="3000">
              <Card img={xr} link="https://www.linkedin.com/in/xrow/" />
            </div>

            <div data-aos="fade-right" className="w-full">
              <Title
                children={'MURILLO AUGUSTO'}
                color="white"
                className="bg-black p-1 text-lg rounded-lg mt-10 text-center transition ease delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>

            <div data-aos="fade-left" className="w-full">
              <Title
                children={'CEO | DEV FULLSTACK'}
                color="red"
                className="bg-black p-1 text-lg rounded-lg mt-4 text-center transition ease delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>

          <Row color="red-dark" width={2} height={'100%'} />

          <div className="flex flex-col items-center">
            <div data-aos="fade-down" data-aos-duration="2000">
              <Card img={sam} link="https://sdesigns.netlify.app/" />
            </div>

            <div data-aos="fade-left" className="w-full">
              <Title
                children={'SAMUEL VIEIRA'}
                color="white"
                className="bg-black p-1 text-lg rounded-lg mt-10 text-center transition ease delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>

            <div data-aos="fade-right" className="w-full">
              <Title
                children={'DESIGNER'}
                color="red"
                className="bg-black p-1 text-lg rounded-lg mt-4 text-center transition ease delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>

          <Row color="red-dark" width={2} height={'100%'} />

          <div className="flex flex-col items-center">
            <div data-aos="fade-down" data-aos-duration="1000">
              <Card img={kael} link="https://www.behance.net/gustavokael" />
            </div>

            <div data-aos="fade-right" className="w-full">
              <Title
                children={'GUSTAVO KAEL'}
                color="white"
                className="bg-black p-1 text-lg rounded-lg mt-10 text-center transition ease delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
            <div data-aos="fade-left" className="w-full">
              <Title
                children={'UI/UX'}
                color="red"
                className="bg-black p-1 text-lg rounded-lg mt-4 text-center transition ease delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
