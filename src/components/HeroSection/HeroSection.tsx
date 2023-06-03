import { Picture } from './components/Picture.js'
import Title from './components/Title.js'

const HeroSection = (): React.JSX.Element => {
  return (
    <section className='flex flex-col w-4/5 h-screen m-auto z-100'>
      <div className='z-50 flex flex-row items-center h-full px-20 justify-evenly'>
        <Title />
        <Picture />
      </div>
    </section>
  )
}
export default HeroSection
