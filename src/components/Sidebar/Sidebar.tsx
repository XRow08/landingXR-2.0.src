import Aos from "aos";
import "aos/dist/aos.css";
import { Logo } from "../Logo";
import { useEffect, useState } from "react";

export function Sidebar() {
  /* const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); */

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <aside className="fixed z-[999] w-[200px] h-full transition-all ease-in-out duration-300 bg-gradient-to-b from-black via-black to-[rbga(53 53 53 .1)] backdrop-blur-sm flex flex-col items-center justify-start p-10">
      <Logo width={150} logoTipo={true} />
    </aside>
  );
}
