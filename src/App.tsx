import AboutAndSkillSection from './components/AboutAndSkillSection/AboutAndSkillSection'
import Background from './components/Background'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar.js'
import ProjectSection from './components/ProjectSection/ProjectSection'

export const App = (): React.JSX.Element => {
  return (
    <main className='relative flex flex-col items-center w-screen h-auto bg-white dark:bg-appbg scroll-smooth '>
      <div className='absolute w-full h-auto min-h-screen sm:h-auto z-[1] mt-[10vh] '>
        <Background />
      </div>
      <Navbar />
      <HeroSection />
      <AboutAndSkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
