import Image from "next/image";

export default function Aprender() {
  return (
    <section className="text-black tracking-wide sm:text-2xl bg-white min-h-150 px-5 sm:px-30 py-10 sm:py-30">
      <h2 className="text-2xl sm:text-5xl text-black tracking-wider text-center">
        Aprendiendo a Aprender
      </h2>
      <p className="mt-8 mb-2 sm:mt-15 sm:mb-5">
        Todo autodidacta tiene una relación estrecha con el sentimiento de
        frustración. Debido a la cantidad de recursos disponibles en internet y
        la creciente variedad de métodos existentes para cumplir una misma
        función, el primer intento de estudiar una nueva herramienta suele
        invocar una abrumación dificil de ignorar.
      </p>
      <p>
        Para cumplir con mi intención de aprender por cuenta propia, debí idear
        un sistema que me permita concentrar la mayor cantidad de esfuerzo en
        adquirir conocimiento de manera eficiente y sin distracciones.
      </p>
      <div>
        <figure
          className={`flex flex-row items-center mt-12 sm:mt-45 gap-10 text-black tracking-wider`}
        >
          <div className="flex-1 rounded-3xl shadow-md border"></div>
          <div className="flex flex-2 flex-col gap-4">
            <h2 className="text-3xl font-medium">Familiarización</h2>
            <p className="text-2xl">
              Primeramente debemos conocer el horizonte de posibilidades, para
              luego enfocar el objetivo. Esto consiste en hacer un breve
              análisis de las herramientas disponibles mas populares, sus
              ventajas y desventajas, y sus aplicaciones recomendadas.{" "}
            </p>
          </div>
        </figure>
        <figure
          className={`flex flex-row items-center mt-12 sm:mt-45 gap-10 text-black tracking-wider`}
        >
          <div className="flex flex-2 flex-col gap-4">
            <h2 className="text-3xl font-medium">Documentación</h2>
            <p className="text-2xl">
              Para asegurar un aprendizaje eficiente, es importante entender el
              alcance del metodo elegido. Este paso incluye dar una lectura
              superficial a la documentación disponible, así como buscar guías,
              tips, y casos de uso.{" "}
            </p>
          </div>
          <div className="flex-1 rounded-3xl shadow-md border"></div>
        </figure>
        <figure
          className={`flex flex-row items-center mt-12 sm:mt-45 gap-10 text-black tracking-wider`}
        >
          <div className="flex-1 rounded-3xl shadow-md border"></div>
          <div className="flex flex-2 flex-col gap-4">
            <h2 className="text-3xl font-medium">Experimentación</h2>
            <p className="text-2xl">
              Conociendo mejor la herramienta, conviene inicialmente
              experimentar con proyectos simples y cortos a modo de mantener el
              foco en la familiarización inicial, para luego transicionar
              lentamente a proyectos mas involucrados.{" "}
            </p>
          </div>
        </figure>
        <figure
          className={`flex flex-row items-center mt-12 sm:mt-45 gap-10 text-black tracking-wider`}
        >
          <div className="flex flex-2 flex-col gap-4">
            <h2 className="text-3xl font-medium">Constancia</h2>
            <p className="text-2xl">
              El punto más importante en todo aprendizaje es la constancia.
              Mantener sesiones de estudio diarias, aunque sean breves, ayuda a
              mantener una secuencia predecible de acquisión de conocimiento y
              permite estructurar con mayor facilidad el resto del camino.{" "}
            </p>
          </div>
          <div className="flex-1 rounded-3xl shadow-md border"></div>
        </figure>
      </div>
    </section>
  );
}
