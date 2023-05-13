import { useState, useEffect } from 'react'
import { Title, Picture } from './components'
import TextWithTypeEffect from './components/TextWithTypeEffect'

const HeroSection = (): React.JSX.Element => {
  const [typeAnimation, setTypeAnimation] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTypeAnimation(true)
    }, 3500)
  })
  return (
    <main className='flex flex-col w-4/5 h-full m-auto '>
      <div className='z-50 flex flex-row items-center h-full px-20 justify-evenly'>
        {!typeAnimation ? (
          <TextWithTypeEffect />
        ) : (
          <>
            <Title />
            <Picture />
          </>
        )}
      </div>
    </main>
  )
}
export default HeroSection
