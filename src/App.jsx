import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
// import Qualifications from './components/qualifications/Qualifications'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollUp/ScrollUp'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Qualifications /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
