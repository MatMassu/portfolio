"use client";

import { useNav } from "../context/NavContext";

export default function Header() {
  const buttonClass =
    "rounded-xl text-center tracking-widest bg-white py-1 w-20 sm:w-50 text-xs sm:text-2xl shadow-md cursor-pointer hover:shadow-lg active:scale-98 active:shadow-xs transform transition-all";
  const paddingDesktop = "sm:px-50 sm:py-30";
  const paddingMobile = "p-2 pt-20 pb-10";

  const { selected, setSelected } = useNav();

  return (
    <header
      className={`${paddingMobile} ${paddingDesktop} flex flex-col bg-[#FFF0DE] text-black`}
    >
      <h1
        className={`min-w-full text-center sm:text-left text-3xl sm:text-7xl mb-2 sm:mb-10 tracking-widest`}
      >
        MATÍAS MASSUCCO
      </h1>
      <nav>
        <ul className="flex min-w-full justify-center sm:justify-start gap-x-6 gap-y-5 sm:gap-x-35 sm:gap-y-10 flex-wrap">
          <li>
            <button
              className={buttonClass}
              onClick={() => setSelected("sobremi")}
            >
              sobre mí
            </button>
          </li>
          <li>
            <button
              className={buttonClass}
              onClick={() => setSelected("proyectos")}
            >
              proyectos
            </button>
          </li>
          <li>
            <button className={buttonClass}>redes</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
