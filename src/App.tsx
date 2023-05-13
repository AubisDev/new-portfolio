import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import { Circuit } from './components/HeroSection/components'
import Navbar from './components/HeroSection/components/Navbar'

export const App = (): React.JSX.Element => {
  return (
    <div className='relative flex items-center w-screen h-screen overflow-hidden bg-appbg '>
      <div className='absolute w-full h-full'>
        <Circuit />
      </div>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
