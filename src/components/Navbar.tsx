import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  return (
	<header
   className="
    flex
    justify-between
    items-center
    w-full
    h-[10vh] max-sm:h-[9vh]
    px-8 md:px-10
    py-6
    bg-transparent
    backdrop-blur-2xl
    md:rounded-b-2xl
    drop-shadow-lg
    fixed
    overflow-hidden
   "
  >
    <div className="md:px-10">Logo</div>
    <div className="
     md:hidden
    ">
      <button className="
       flex
       justify-end
       items-center
       p-3
       rounded-xl
       hover:bg-sky-600
       transition-colors
       ease-in-out
       duration-150
      ">
        <FaBars />
      </button>
    </div>
    <div className="
     flex 
     justify-between 
     items-center 
     gap-5 
     max-sm:hidden
     ">
      <a 
      href="#Sobre"
      className="
       hover:text-neutral-400/60
       transition-colors
       ease-in-out
       duration-150
      "
      >
        Sobre
      </a>
      <a 
      href=""
      className="
       hover:text-neutral-400/60
       transition-colors
       ease-in-out
       duration-150
      "
      >
        Proposta
      </a>
      <button className="
       bg-sky-400
       rounded-xl
       w-full
       h-9
       p-4
       flex
       items-center
       hover:bg-sky-600
       transition-colors
       ease-in-out
       duration-200
      ">
        <a href="">Garantir o Convite</a>
      </button>
    </div>
  </header>
  )
}