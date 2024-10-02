import About from "./components/About"
import Competition from "./components/Competition"
import DecoIdeas from "./components/DecoIdeas"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import InviteShowcase from "./components/InviteShowcase"
import Navbar from "./components/Navbar"
import Opinions from "./components/Opinions"
import Prupouse from "./components/Prupouse"
import Relations from "./components/Relations"

export default function App() {

  return (
    <main className="bg w-full h-full text-white">
      <Navbar />
      <Hero />
      <About />
      <Relations />
      <Competition />
      <Prupouse />
      <Opinions />
      <DecoIdeas />
      <InviteShowcase />
      <Footer />
    </main>
  )
}
