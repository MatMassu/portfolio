"use client";

import { useNav } from "./context/NavContext";
import Inicio from "./components/Inicio";
import ProyectosItem from "./components/ProyectosItem";
import Aprender from "./components/Aprender";
import UsoIA from "./components/UsoIA";

const CMEDesc =
  "Monitor de actividad solar (CMEs) y su impacto en la tierra utilizando información provista en tiempo real por la NASA. Visualizado en forma de cartas interactivas con información sobre cada evento, codificadas por color según su frecuencia e intensidad. Permite filtrar por tipo de impacto y ordenar la visualización por fecha, velocidad, o intensidad del evento.";

const EcommerceDesc =
  "Demo para tienda online de calzado artesanal con visualización rápida e intuitiva de productos disponibles, precios, y características. Funcionalidad de carrito desplegable con cálculo dinámico de precio de productos y envío, persistente en todo el sitio.";

const WikiDesc =
  "Testing para la API de MediaWiki. Permite ingresar una palabra y conocer cuantas veces es mencionada en Wikipedia, así como los 5 articulos en los que mas se menciona.";

export default function Home() {
  const { selected } = useNav();
  return (
    <main className="bg-[#FFF0DE] min-w-screen min-h-screen pb-100">
      {selected === "sobremi" && (
        <article className="flex flex-col mx-10 sm:mx-50 gap-20 sm:gap-40 pt-100">
          <Inicio />
          <Aprender />
          <UsoIA />
        </article>
      )}
      {selected === "proyectos" && (
        <article className="pt-100">
          <ProyectosItem
            title="CME Watch"
            desc={CMEDesc}
            bgcolor="bg-white"
            siteLink="https://nasa-dashboard-gamma.vercel.app/"
            githubLink="https://github.com/MatMassu/nasa-dashboard"
          />
          <ProyectosItem
            title="E-commerce de Calzado"
            desc={EcommerceDesc}
            bgcolor="https://github.com/MatMassu/nasa-dashboard"
            siteLink="https://zapatos-khaki.vercel.app/"
            githubLink="https://github.com/MatMassu/zapatos"
          />
          <ProyectosItem
            title="Wikitimes"
            desc={WikiDesc}
            bgcolor="bg-white"
            siteLink="https://wikitimes.vercel.app/"
            githubLink="https://github.com/MatMassu/wikitimes"
          />
        </article>
      )}
    </main>
  );
}
