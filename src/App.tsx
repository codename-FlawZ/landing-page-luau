import About from "./components/About"
import DecoIdeas from "./components/DecoIdeas"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import InviteShowcase from "./components/InviteShowcase"
import Navbar from "./components/Navbar"
import Relations from "./components/Relations"
import Thanks from "./components/Thanks"

export default function App() {

  return (
    <main className="bg-black w-full h-full text-white">
      <Navbar />
      <Hero />
      <About />
      <Relations />
      <DecoIdeas />
      <InviteShowcase />
      <Thanks />
      <Footer />
    </main>
  )
}
