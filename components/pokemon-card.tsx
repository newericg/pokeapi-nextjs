import Image from "next/image";
import { CustomLink } from "@components";

interface PokemonCardProps {
  name: string;
  pokeId: string;
}

const PokemonCard = ({ name, pokeId }: PokemonCardProps) => {
  return (
    <CustomLink
      href={name}
      className="card flex flex-col items-center justify-center group rounded-lg border border-gray m-3 px-5 py-2 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 shadow-inner"
    >
      <div className="flex justify-between w-full items-center card-title">
        <p className={`ml-2`}> {pokeId.padStart(4, "#00")} </p>
        <h2 className={`text-2xl font-semibold mr-2`}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </div>
      
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
          alt={"Picture of " + name}
          priority
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
          className="transition-opacity opacity-0 duration-[2s] image-filter"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      
    </CustomLink>
  );
};

export default PokemonCard;
