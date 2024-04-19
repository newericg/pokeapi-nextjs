import { getPokemon, getPokemonText } from "@/lib/pokemonAPI";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowBigLeftIcon } from "lucide-react";
import Link from "next/link"


export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {

    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);
    const pokemonFlavor = await getPokemonText(pokemonName)

    let primaryTypeColour = pokemonObject.types[0].type.name




    return (
        <>
            <Card className={`max-w-xl grid p-2 justify-items-center pokemon-type type-${primaryTypeColour}`}>
                <div className={`text-4xl text-bold grid justify-items-center w-full px-5`}>
                    <div className="flex justify-between w-full py-5">
                        <Link href="/">
                            <ArrowBigLeftIcon></ArrowBigLeftIcon>
                        </Link>

                        <h1 className={`text-4xl text-bold`}>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
                        <p> #{pokemonObject.id}</p>
                    </div>
                    <div className="m-4" style={{ position: "relative", width: '250px', height: '250px' }}>
                        <PokemonImage
                            image={pokemonObject.sprites.other['official-artwork'].front_default}
                            name={pokemonName}
                        />
                    </div>
                </div>
                <div className="grid justify-items-center bg-white text-black rounded-sm pt-20 -mt-20 px-10 shadow-inner">

                    <div className="flex-col grid justify-items-center">
                        <div className="flex justify-items-center w-full py-2">
                            {pokemonObject.types.map((typeObject: any, index: number) => {

                                return (
                                    <div className="flex justify-items-center" key={typeObject.type.name}>
                                        <Button className={`mx-2 rounded-full p-2 px-6 pokemon-type type-${typeObject.type.name}`}>
                                            {typeObject.type.name.charAt(0).toUpperCase() + typeObject.type.name.slice(1)}
                                        </Button>
                                    </div>
                                )
                            })}
                        </div>
                        <h3 className="py-2">Weight: {pokemonObject.weight}</h3>

                    </div>
                    <p className="p-5 text-center"> {pokemonFlavor} </p>

                    <div className="flex-col align-center my-5 w-full px-10">
                        <h1 className={`text-center`}>Base Stats</h1>
                        {pokemonObject.stats.map((statObject: any) => {
                            const statName = statObject.stat.name;
                            const statValue = statObject.base_stat;

                            return (

                                <div className="flex items-stretch my-4" key={statName}>
                                    <div className="flex justify-between w-3/4">
                                        <h3 className="">{statName.toUpperCase()} </h3>
                                        <h3 className="w-1/4">{statValue}</h3>
                                    </div>
                                    <Progress className={`w-2/4 m-auto bg-gray-300 `} value={statValue} indicatorColor={`pokemon-type type-${primaryTypeColour}`} />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </Card>

        </>
    )

}