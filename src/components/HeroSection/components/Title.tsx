import PersonalLinks from './PersonalLinks'
import { motion } from 'framer-motion'
import { onClickToSection } from '@/utils/common'

const Title = (): React.JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeIn' }}
      className='flex flex-col'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className='pb-4 text-4xl font-bold text-gray-600 dark:text-white text-title '>
          Hi, I'm{' '}
          <span className='text-5xl text-secondary dark:text-skyblue drop-shadow-3xl'>
            Aubis Sanchez
          </span>
        </h1>
        <h3 className='text-3xl flex text-title font-bold text-light_secondary dark:text-sky-300 max-w-[350px] rounded-xl pb-4  '>
          Frontend Developer
        </h3>
        <p className='w-4/5 text-lg text-gray-600 dark:text-white z-[500]'>
          Welcome to my portfolio. I am a technology enthusiast person and that
          is why I became a developer. Eager to work for creating or maintaining
          projects.{' '}
          <button
            className='text-gray-700 duration-300 dark:text-gray-300 hover:text-dark_orange dark:hover:text-skyblue'
            onClick={() => onClickToSection('contact')}
          >
            Tell me about your project and how can I help you?
          </button>
        </p>
        <PersonalLinks />
      </motion.div>
    </motion.section>
  )
}
export default Title
