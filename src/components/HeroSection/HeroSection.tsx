import { Picture, Title } from './components'

const HeroSection = (): React.JSX.Element => {
  return (
    <section className='flex flex-col w-screen h-screen m-auto sm:w-4/5 z-100'>
      <div className='z-50 flex flex-col-reverse items-center justify-center w-full h-full px-20 lg:flex-row lg:justify-evenly'>
        <Title />
        <Picture />
      </div>
    </section>
  )
}
export default HeroSection
