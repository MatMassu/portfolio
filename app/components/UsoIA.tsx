export default function UsoIA() {
  return (
    <section
      id="ia"
      className="text-black tracking-wide sm:text-2xl bg-white min-h-150 px-5 sm:px-30 py-10 sm:py-30"
    >
      <h2 className="text-2xl sm:text-5xl text-black tracking-wider">
        Uso de IA
      </h2>
      <hr className="opacity-10 mt-8"></hr>
      <p className="sm:mt-8">
        Dada la creciente relevancia de herramientas basadas en LLMs como
        ChatGPT, Gemini, y Cursor, toma importancia definir el uso que se les da
        a la mismas en un contexto profesional.
      </p>
      <div className="flex mt-15 w-full text-center">
        <div className="flex-1/2 border-r border-gray-300">
          <h3 className="text-center font-medium text-2xl tracking-wider">
            Casos en lo que uso IA
          </h3>
          <hr className="opacity-10 w-2/3 block mx-auto mt-2"></hr>
          <ul>
            <li className="mt-3">
              <p className="text-xl">
                Tareas repetitivas o sin valor didáctico.
              </p>
              <p className="text-sm">
                (construir un REGEX, corregir errores de sintaxis)
              </p>
            </li>
            <li className="mt-5">
              <p className="text-xl">Validación de código.</p>
              <p className="text-sm">
                (corroborar que una sección de código cumple con los principios
                SOLID)
              </p>
            </li>
            <li className="mt-5">
              <p className="text-xl">Propuesta de ideas.</p>
              <p className="text-sm">
                (disminuir la cantidad de hits a una API, optimizar performance
                o fluidez)
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-1/2 ">
          <h3 className="text-center font-medium text-2xl tracking-wider">
            Casos en lo que NO uso IA
          </h3>
          <hr className="opacity-10 w-2/3 block mx-auto mt-2"></hr>
          <ul>
            <li className="mt-3">
              <p className="text-xl">Redacción de textos.</p>
              <p className="text-sm">(mails, blogs, descripciones)</p>
            </li>
            <li className="mt-5">
              <p className="text-xl">
                Creación de programas o secciones enteras de código.
              </p>
              <p className="text-sm">(componentes de React, páginas web)</p>
            </li>
            <li className="mt-5">
              <p className="text-xl">
                Código donde se debe priorizar la seguridad.
              </p>
              <p className="text-sm">(API keys, información sensible)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
