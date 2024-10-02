
const Footer = () => {
  return (
	<footer className="w-full h-[60vh]  flex flex-col bg-black text-neutral-600">
    <div className="flex justify-center md:pt-10 max-sm:pt-1">
     <img src="/assets/images/logo.png" alt="Logo" className="md:h-[8rem] max-sm:h-[5rem]" />
    </div>
    <div className="flex md:flex-row max-sm:flex-col justify-center items-center max-sm:gap-2 md:gap-10 md:text-xl md:pt-6 max-sm:pt-2">
      <a className="hover:text-neutral-300 transition-colors duration-150" href="#Home">Home</a>
      <a className="hover:text-neutral-300 transition-colors duration-150" href="#Sobre">Sobre</a>
      <a className="hover:text-neutral-300 transition-colors duration-150" href="#Relações">Relações</a>
      <a className="hover:text-neutral-300 transition-colors duration-150" href="#Proposta">Proposta</a>
      <a className="hover:text-neutral-300 transition-colors duration-150" href="#Convite">Convite</a>
    </div>
    <div className="flex justify-center items-center md:pt-10 max-sm:pt-6">
      <h1 className="text-center max-sm:text-xs">Festival de primavera 2024, site criado por Pedro H. Alexandre - Todos os direitos reservados.</h1>
    </div>
  </footer>
  )
}

export default Footer