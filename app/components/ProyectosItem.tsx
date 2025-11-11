import Image from "next/image";

interface ProyectosItemProps {
  title: string;
  desc: string;
  bgcolor: string;
  siteLink: string;
  githubLink: string;
}

export default function ProyectosItem({
  title,
  desc,
  bgcolor,
  siteLink,
  githubLink,
}: ProyectosItemProps) {
  return (
    <figure
      className={`flex flex-row items-center ${bgcolor} mx-10 sm:mx-50 px-5 sm:px-30 py-10 sm:py-30 gap-10 text-black tracking-wider`}
    >
      {" "}
      <div className="relative inline-block group">
        <Image
          src={`/${title.replace(/\s+/g, "")}.png`}
          alt={`${title} screenshot`}
          width={420}
          height={360}
          className="cursor-pointer rounded-3xl shadow-md group-hover:shadow-xl group-hover:scale-103 transform transition-all"
        />

        <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:scale-103 select-none transform transition-all bg-black/60 text-white flex inset-0 rounded-3xl text-center justify-center align-middle items-center">
          <p className="flex-1/2 cursor-pointer hover:scale-104 hover:font-medium transition-all">
            <a href={githubLink} target="_blank">
              Ver en GitHub
            </a>
          </p>
          <p className="flex-1/2 cursor-pointer hover:scale-104 hover:font-medium transition-all">
            <a href={siteLink} target="_blank">
              Ir al Sitio
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-2 flex-col gap-4">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-xl">{desc}</p>
      </div>
    </figure>
  );
}
