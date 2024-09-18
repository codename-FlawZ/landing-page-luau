import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {

  // Animations

  useGSAP(() => {
    gsap.to(
      '#heroscrollanimation',
      {
        y: 15,
        delay: 1.5,
        ease: "power0.easeNone",
        duration: 0.4,
        repeat: -1,
        yoyo: true,
      }
    ),
    gsap.to(
      '#heroimg',
      {
        opacity: 1,
        delay: 1.5,
        duration: 0.5,
        y: 0,
        ease: "power3.inOut"
      }
    ),
    gsap.to(
      '#hero-description', 
      {
        y: 0,
        opacity: 1,
        delay: 2,
        duration: 0.8,
        ease: "power1.inOut"
      }
    )
  }, [])

  // Main Code

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
        <img 
         src="../public/assets/images/logo.png" 
         alt=""
         id="heroimg"
         className="
          opacity-0
          translate-y-20
         "
        />
        <div className="
        flex
        flex-col
        justify-between
        items-center
        gap-8
        ">
          <p 
          id="hero-description"
          className="
           max-sm:text-sm 
           md:text-xl
           opacity-0
           translate-y-20
          ">
            Alguma coisa aqui =D
          </p>
          <MdKeyboardDoubleArrowDown
          id="heroscrollanimation" 
          className="
           max-sm:w-full 
           max-sm:h-7 
           md:w-10 
           md:h-10" 
          />
        </div>
      </div>
    </div>
  </section>
  )
}