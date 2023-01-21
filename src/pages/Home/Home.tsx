import { useEffect } from 'react';
import { Button, Description, Logo, Title } from '../../components';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function Home() {
  const gotoServices = () =>
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="flex flex-col items-center bg-home bg-no-repeat bg-cover w-screen h-screen overflow-hidden overscroll-none">
      <Logo logoTipo={false} width={'300px'} />
      <div className="flex flex-col justify-center items-start mt-44 ">
        <div
          data-aos="fade-down"
          className="flex flex-row items-center gap-[1.5em] mb-4"
        >
          <Title children={'Aprimore'} size="normal" color="red" />
          <Title children={'seus projetos'} size="normal" color="white" />
        </div>

        <div data-aos="fade-right">
          <Description
            children={
              '“Redescubra-se. Reinvente-se para ser alguém evolutivamente melhor. Que nunca chegue a última vez em que você faça algo pela primeira vez!”'
            }
            color="white"
            width={'750px'}
          />
        </div>
        <div data-aos="fade-left" className="self-end mt-20">
          <Description
            children={'- REINALDO RIBEIRO'}
            color="white"
            width={'auto'}
          />
        </div>

        <div data-aos="fade-up">
          <Button variant={'primary'} icon={true} onClick={gotoServices}>
            Evolua
          </Button>
        </div>
      </div>
    </section>
  );
}
