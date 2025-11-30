import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'

function App() {
  // Set dark mode as default and only mode
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App

