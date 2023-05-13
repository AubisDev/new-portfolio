import { TypeAnimation } from 'react-type-animation'

const TextWithTypeEffect = () => {
  return (
    <TypeAnimation
      sequence={['Calling function greet()...', 2500]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      className='inline text-5xl font-semibold text-white ease-in-out '
    />
  )
}
export default TextWithTypeEffect
