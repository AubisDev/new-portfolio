import { Circuit, Title } from './components'
import { Picture } from './components/Picture'

const HeroSection = (): React.JSX.Element => {
  return (
    <main className='w-4/5 h-full flex flex-col m-auto '>
      <Circuit />
      <div className='flex flex-row items-center justify-evenly h-full px-20'>
        <Title />
        <Picture />
      </div>
    </main>
  )
}
export default HeroSection
