import Aos from 'aos';
import 'aos/dist/aos.css';
import { Logo } from '../Logo';
import { useEffect } from 'react';

export function Sidebar() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <aside
      data-aos="fade-down"
      className="fixed top-auto left-0 w-[200px] h-screen bg-gradient-to-b from-black via-black to-[rbga(53 53 53 .1)] backdrop-blur-sm flex flex-col items-center justify-start p-10"
    >
      <Logo width={150} logoTipo={true} />
    </aside>
  );
}
