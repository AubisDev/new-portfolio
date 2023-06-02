import { Title, Picture } from './components'

const HeroSection = (): React.JSX.Element => {
  return (
    <main className='flex flex-col w-4/5 h-screen m-auto '>
      <div className='z-50 flex flex-row items-center h-full px-20 justify-evenly'>
        <Title />
        <Picture />
      </div>
    </main>
  )
}
export default HeroSection
