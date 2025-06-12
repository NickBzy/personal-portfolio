import { useState, useEffect } from "react"
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Experience from "./components/Experience/Experience.jsx"
import Techstack from "./components/Techstack/Techstack.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target

        if (entry.isIntersecting) {
          if (target.classList.contains("hidden")) {
            target.classList.add("show")
          }
          if (target.classList.contains("hidden-fade")) {
            target.classList.add("show-fade")
          }
        } else {
          target.classList.remove("show", "show-fade")
        }
      })
    })

    const hiddenElements = document.querySelectorAll(".hidden, .hidden-fade")
    hiddenElements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      <div className="portfolio">
        <Navbar />
        <Hero />
        <Experience />
        <Techstack />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
