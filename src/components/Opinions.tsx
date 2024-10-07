import { opinions } from "../constants";
import { twMerge } from "tailwind-merge";

export default function Opinions() {

  return (
	<section 
	 className="
	  section 
	">
		<div 
		 className="
		  container
		">
			<h1 
			 className="
			  section-title
			">
				Opinião dos alunos
			</h1>
			<p
			 className="section-description"
			>
				Veja abaixo a opinião de alguns alunos
			</p>
			<div className="flex justify-center gap-10">
				<div className={twMerge("flex md:flex-row max-sm:flex-col md:gap-8 md:pt-8 max-sm:gap-5 max-sm:pt-5 md:[mask-image:linear-gradient(to_left,transparent,black_25%,black_75%,transparent)] max-sm:[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]")}>
					{opinions?.map(({ text, name, role }) => (
						<div className="card" key={name || role}>
							<div className="flex flex-col">
								<div className="opinion-username">{name}</div>
								<div className="opinion-username-category">{role}</div>
							</div>
							<div className="user-opinion-text">{text}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
  )
}

