import Image from "next/image";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="text-black tracking-wide sm:text-2xl bg-white min-h-150 px-5 sm:px-30 py-10 sm:py-30"
    >
      <h2 className="text-2xl sm:text-5xl text-black tracking-wider">
        Mi Inicio
      </h2>
      <hr className="opacity-10 mt-8"></hr>
      <p className="mt-8 sm:mt-8">
        Empecé mi camino como desarrollador de software trabajando con SAP ABAP
        en proyectos empresariales. En este tiempo obtuve una solida base
        técnica en bases de datos relacionales, mayor comprensión sobre los
        procesos de negocio, y una profunda apreciación por el valor de combinar
        la técnica con la creatividad para lograr soluciones efectivas y con
        mayor impacto.{" "}
      </p>
      <p className="mt-2 sm:mt-5">
        Despues de cuatro años, decidí dar un nuevo paso en mi carrera y
        dedicarme a fortalecer mis habilidades en desarrollo full-stack,
        explorando tecnologías más modernas y buscando nuevas formas de integrar
        mi lado creativo en la forma en que diseño y construyo soluciones.
      </p>
      <div className="flex mt-20 items-center gap-10 rounded-2xl bg-gray-100 px-4">
        <h1 className="text-xl font-medium">Tecnologías más utilizadas: </h1>
        <div className="flex gap-10 pt-4 pb-3">
          <Image src="/nextjs.svg" alt="Next.js" width={40} height={40} />
          <Image src="/react.svg" alt="React" width={40} height={40} />
          <Image src="/ts.svg" alt="Typescript" width={40} height={40} />
          <Image src="/postgresql.svg" alt="PostreSQL" width={40} height={40} />
          <Image src="/git.svg" alt="Git" width={40} height={40} />
          <Image src="/figma.svg" alt="Figma" width={40} height={40} />
        </div>
      </div>
    </section>
  );
}
