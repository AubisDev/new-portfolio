import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/HeroSection/components/Navbar'

export const App = (): React.JSX.Element => {
  return (
    <div className=' relative bg-appbg w-screen h-screen overflow-hidden flex items-center '>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
