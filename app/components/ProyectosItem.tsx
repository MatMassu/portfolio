import Image from "next/image";

interface ProyectosItemProps {
  title: string;
  desc: string;
  bgcolor: string;
  link: string;
}

export default function ProyectosItem({
  title,
  desc,
  bgcolor,
  link,
}: ProyectosItemProps) {
  return (
    <figure
      className={`flex flex-row items-center ${bgcolor} mx-10 sm:mx-50 px-5 sm:px-30 py-10 sm:py-30 gap-10 text-black tracking-wider`}
    >
      {" "}
      <a href={link} target="_blank">
        <Image
          src={`/${title.replace(/\s+/g, "")}.png`}
          alt={`${title} screenshot`}
          width={420}
          height={360}
          className="cursor-pointer rounded-3xl shadow-md hover:shadow-xl hover:scale-103 transform transition-all hover:opacity-30 "
        />
      </a>
      <div className="flex flex-2 flex-col gap-4">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-xl">{desc}</p>
      </div>
    </figure>
  );
}
