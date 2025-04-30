import AboutMe from "./components/aboutme/AboutMe"
import ContactMe from "./components/contactme/ContactMe"
import Home from "./components/home/Home"
import MainNavbar from "./components/nabvar/MainNavbar"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"

function App() {
 return(
 <>
  <MainNavbar />
  <Home />
  <AboutMe />
  <Skills />
  <Projects />
  <ContactMe />
 </>
)
}

export default App
