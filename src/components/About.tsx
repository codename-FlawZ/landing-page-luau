
export default function About() {

  return (
	<section 
  id="Sobre"
  className="
   w-full 
   h-screen
   overflow-hidden
   bg-neutral-800/60
  ">
    <div 
    id="section-start"
    className="
     section
    ">
      <h1
       id="title"
       className="
       text-center
       font-bold
       text-5xl max-sm:text-2xl
       m-[4rem] max-sm:m-[2.5rem]
       uppercase
      ">
        Sobre o projeto
      </h1>
      <div 
      className="
       flex
       flex-row
       justify-evenly
       gap-10
       max-sm:flex-col
       m-20 max-sm:m-[3rem]
      ">
        <div>
          <img 
           src="../public/assets/images/about-img.png" 
           alt="Imagem exemplo de um luau" 
           className="
           w-full
           h-full
           rounded-2xl
           border
           border-solid
           border-neutral-300
           shadow-2xl
          "
          />
        </div>
        <div className="
         text-center
         md:w-[75%]
         md:pt-[3.5rem]
        ">
          <h1
           className="
           font-semibold
           text-2xl
           mb-9 max-sm:mb-6
           ">
            Ideia inical
          </h1>
          <p>
          Neste mês de outubro, a estação das flores nos convida a celebrar a vida e a saúde de uma forma especial. O Baile de Primavera visa trazer dois temas essenciais para o nosso cuidado e conscientização: o Outubro Rosa, campanha mundial de prevenção ao câncer de mama, e o Dia Internacional da Saúde Mental, lembrado em 10 de outubro.
          </p>
          <div 
          className="
           max-sm:hidden
           pt-[3rem]
           text-neutral-300
           flex
           flex-col
           text-center
          ">
            <p 
            className="
              font-bold
              text-xl
              uppercase
             ">veja abaixo mais detalhes</p>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
