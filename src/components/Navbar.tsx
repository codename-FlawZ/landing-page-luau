export default function Navbar() {
  return (
	<header
   className="
    header
   "
  >
    <div className="md:px-10 "><a href="#Home">Logo</a></div>
    <div className="
     flex 
     justify-between 
     items-center 
     gap-5 
     max-sm:hidden
     ">
      <a 
      className="
       hover:text-neutral-400/60
       transition-colors
       ease-in-out
       duration-150
      "
      href="#Sobre"
      >
        Sobre
      </a>
      <a 
      href="#Proposta"
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
       btn
      ">
        <a>
          Garantir o Convite
        </a>
      </button>
    </div>
  </header>

  )
}