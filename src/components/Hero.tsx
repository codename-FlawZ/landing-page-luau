import { RiScrollToBottomLine } from "react-icons/ri";

const Hero = () => {
  return (
	<section className="
   w-full 
   h-screen 
   hero-bg
  ">
    <div className="
     section
    ">
      <div className="
       flex
       flex-col
       justify-between
       items-center
       py-[5.5rem]
      ">
        <img src="../public/assets/images/logo.png" alt="" />
        <div className="
        flex
        flex-col
        justify-between
        items-center
        gap-8
        ">
          <p className="max-sm:text-sm md:text-xl">Alguma coisa aqui =D</p>
          <RiScrollToBottomLine className="max-sm:w-full max-sm:h-7 md:w-10 md:h-10" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero