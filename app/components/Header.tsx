"use client";

import clsx from "clsx";
import { useNav } from "../context/NavContext";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const buttonClass =
    "rounded-xl text-center tracking-widest bg-white py-1 w-20 sm:w-50 text-xs sm:text-2xl shadow-md cursor-pointer hover:shadow-lg active:scale-98 active:shadow-xs transform transition-all";
  const buttonClassPressed =
    "rounded-xl text-center tracking-widest bg-white py-1 w-20 sm:w-50 text-xs sm:text-2xl shadow-xs cursor-pointer scale-98 action:scale-95 transform transition-all";
  const dropdownAnimationClass =
    "absolute invisible opacity-0 scale-y-0 group-hover:visible group-hover:opacity-100 group-hover:scale-y-100 transform origin-top transition-all duration-100 ease-out";
  const paddingDesktop = "sm:px-50 sm:py-30";
  const paddingDesktopMini = "sm:px-50 sm:pb-5 shadow-md bg-transparent";
  const paddingMobile = "p-2 pt-20 pb-10";
  const paddingMobileMini = "";

  const { selected, setSelected } = useNav();
  const [scrolled, setScrolled] = useState(false);

  function scrollToSection(target: string) {
    const element = document.getElementById(target);
    const headerOffset = 170;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    if (selected != "sobremi") {
      setSelected("sobremi");
    }
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [selected]);

  return (
    <header
      className={clsx(
        !scrolled ? paddingDesktop : paddingDesktopMini,
        "fixed w-full bg-[#FFF0DE] text-black transition-all duration-500 ease-out backdrop-blur-xl z-50"
      )}
    >
      <h1
        className={clsx(
          "min-w-full text-center sm:text-left text-3xl sm:text-7xl tracking-widest transition-all duration-500 ease-out transform",
          scrolled
            ? "opacity-0 -translate-y-5"
            : "opacity-100 translate-y-0 mb-2 sm:mb-10"
        )}
      >
        MATÍAS MASSUCCO
      </h1>
      <nav>
        <ul className="flex min-w-full justify-center sm:justify-start gap-x-6 gap-y-5 sm:gap-x-35 sm:gap-y-10 flex-wrap">
          <li className="relative inline-block group">
            <button
              className={clsx(
                selected != "sobremi" ? buttonClass : buttonClassPressed
              )}
              onClick={() => setSelected("sobremi")}
            >
              sobre mí
            </button>
            <div className="absolute hidden group-hover:block sm:h-22 sm:w-52"></div>
            <div
              className={clsx(
                dropdownAnimationClass,
                "bg-white shadow-md rounded-2xl mt-2 p-3 w-full"
              )}
            >
              <button
                className="block hover:font-bold transform transition-all"
                onClick={() => scrollToSection("inicio")}
              >
                Mi Inicio
              </button>
              <button
                className="block hover:font-bold transform transition-all"
                onClick={() => scrollToSection("autodidacta")}
              >
                Guía del Autodidacta
              </button>
              <button
                className="block hover:font-bold transform transition-all"
                onClick={() => scrollToSection("ia")}
              >
                Uso de IA
              </button>
            </div>
          </li>

          <li>
            <button
              className={clsx(
                selected != "proyectos" ? buttonClass : buttonClassPressed
              )}
              onClick={() => setSelected("proyectos")}
            >
              proyectos
            </button>
          </li>

          <li className="relative inline-block group">
            <button className={buttonClass}>links</button>
            <div className="absolute hidden group-hover:block sm:h-22 sm:w-52"></div>
            <div
              className={clsx(
                dropdownAnimationClass,
                "bg-white shadow-md rounded-2xl mt-2 p-3 w-full"
              )}
            >
              <a
                href="https://www.linkedin.com/in/matias-massucco/"
                target="_blank"
                className="flex items-center gap-1 hover:font-bold transition-all"
              >
                LinkedIn
                <Image
                  src="/newtab.svg"
                  alt="Open in new tab"
                  height={10}
                  width={10}
                />
              </a>

              <a
                href="https://github.com/matmassu"
                target="_blank"
                className="flex items-center gap-1  hover:font-bold transform transition-all"
              >
                GitHub
                <Image
                  src="/newtab.svg"
                  alt="Open in new tab"
                  height={10}
                  width={10}
                />
              </a>
              <a
                href="/Matias_Massucco_CV.pdf"
                target="_blank"
                className="flex items-center gap-1 hover:font-bold transform transition-all"
              >
                Mi CV
                <Image
                  src="/newtab.svg"
                  alt="Open in new tab"
                  height={10}
                  width={10}
                />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
