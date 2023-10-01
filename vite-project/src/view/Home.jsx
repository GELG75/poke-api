import { Link } from "react-router-dom";


export function Home() {
  
  return (
    <main className="flex flex-col gap-10 justify-start items-center w-full min-h-screen">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo-pokemon" className="w-80"/>
      <div className="flex justify-center gap-0 w-5/6">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg" alt="Bulbasaur" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/196.svg" alt="Charmander" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/575.svg" alt="Squirtle" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg" alt="Picachu" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/326.svg" alt="Chikorita" className="w-1/6 m-0" />
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg" alt="cindquil" className="w-1/6 m-0" />
      </div>
      <Link to="/Pokemon" className="w-24 h-10 border border-blue-500 text-blue-500 flex items-center justify-center rounded">Ver mas </Link>
      </main>
  );

}