import './App.css'
import AboutAndSkillSection from './components/AboutAndSkillSection/AboutAndSkillSection'
import HeroSection from './components/HeroSection/HeroSection'
import { Circuit } from './components/HeroSection/components'
import Navbar from './components/HeroSection/components/Navbar'
import ProjectSection from './components/ProjectSection/ProjectSection'

export const App = (): React.JSX.Element => {
  return (
    <div className='relative flex flex-col items-center w-screen h-auto overflow-hidden bg-appbg '>
      <div className='absolute w-full h-full'>
        <Circuit />
      </div>
      <Navbar />
      <HeroSection />
      <AboutAndSkillSection />
      <ProjectSection/>
    </div>
  )
}

export default App
