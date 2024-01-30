import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero" >
      <div className="py-12 font-extrabold">
        <h1 className="text-4xl ">
          Seu dia<br />
          fica melhor com<br />
          {/* {'\u03BB'} */}
          {/* &nbsp; */}
          {/* &uarr; */}
          <span className="text-primary text-5xl">POKOCHURROS</span>
        </h1>
        <p className="my-6 text-gray-400">
          Dê uma volta ao mundo dos sabores com nossos churros e panchos irresistíveis! Descubra o deleite de cada mordida enquanto exploramos juntos o universo dos sabores que só encontramos aqui.
        </p>
        <div className="flex gap-4 font-semibold">
          <button className=" flex gap-2 bg-primary text-white px-8 py-2 rounded-full">
            Quero um desses!
            <Right />
          </button>
          <button className="bg-yellow text-white px-8 py-2 rounded-full">Ver outras opções</button>
        </div>
      </div>
      <div className=" relative">
        <Image src={'/churros_hero.png'} layout={'fill'} objectFit="contain" alt={'churros'} />
      </div>
    </section>
  )
}
