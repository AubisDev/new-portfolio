import { Picture, Title } from './components'

const HeroSection = (): React.JSX.Element => {
  return (
    <section className='flex flex-col w-screen min-h-screen h-auto m-auto sm:w-4/5 z-[100] '>
      <div className='z-50 flex flex-col-reverse items-center justify-center w-full h-full mt-[10vh] md:mt-[20vh] px-20 lg:flex-row lg:justify-evenly'>
        <Title />
        <Picture />
      </div>
    </section>
  )
}
export default HeroSection
