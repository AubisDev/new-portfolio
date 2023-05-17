import './App.css'
import AboutAndSkillSection from './components/AboutAndSkillSection/AboutAndSkillSection'
import HeroSection from './components/HeroSection/HeroSection'
import { Circuit } from './components/HeroSection/components'
import Navbar from './components/HeroSection/components/Navbar'

export const App = (): React.JSX.Element => {
  return (
    <div className='relative flex flex-col items-center w-screen h-auto overflow-hidden bg-appbg '>
      <div className='absolute w-full h-full overflow-hidden'>
        <Circuit />
      </div>
      <Navbar />
      <HeroSection />
      <AboutAndSkillSection />
    </div>
  )
}

export default App
