import Link from "next/link";
import Image from "next/image";
import CustomLink  from "./custom-link";

interface PokemonCardProps {
  name: string;
}

export default async function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-gray m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 shadow-inner"
      key={name + "Card"}
    >
      <Image
        src={"/"}
        alt={"Picture of " + name}
        priority
        width={50}
        height={50}
        style={{ objectFit: "contain" }}
        className="transition-opacity opacity-0 duration-[2s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
      <h2 className={`text-2xl font-semibold`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
