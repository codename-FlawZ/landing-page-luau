
export default function About() {

  return (
	<section 
  id="Sobre"
  className="
   section
   bg
  ">
    <div 
    id="section-start"
    className="
     container
    ">
      <h1
       id="title"
       className="
       section-title
      ">
        Sobre o projeto
      </h1>
      <div 
      className="
       section-row
      ">
        <div>
          <img 
           src="/assets/images/about-img.png" 
           alt="Imagem exemplo de um luau" 
           className="
           section-row-img
          "
          />
        </div>
        <div className="
         section-row-description
        ">
          <h1
           className="
           section-row-description-title
           ">
            Ideia inical
          </h1>
          <p
           className="
            max-sm:text-xs
           ">
          Neste mês de outubro, a estação das flores nos convida a celebrar a vida e a saúde de uma forma especial. O Baile de Primavera visa trazer dois temas essenciais para o nosso cuidado e conscientização: o Outubro Rosa, campanha mundial de prevenção ao câncer de mama, e o Dia Internacional da Saúde Mental, lembrado em 10 de outubro.
          </p>
          <div 
          className="
           pt-[3rem] max-sm:pt-5
           text-neutral-300
           flex
           flex-col
           text-center
          ">
            <p 
            className="
              font-bold
              text-xl max-sm:text-base
              uppercase
             ">veja abaixo mais detalhes</p>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}
