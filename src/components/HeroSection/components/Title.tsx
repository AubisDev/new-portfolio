import PersonalLinks from './PersonalLinks'
import { motion } from 'framer-motion'
import { onClickToSection } from '@/utils/common'

const Title = (): React.JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeIn' }}
      className='relative flex flex-col w-full text-center lg:text-left'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className='flex flex-col pb-4 text-2xl font-semibold text-center text-gray-600 juti xl:items-center xl:flex-row sm:text-4xl dark:text-white text-title lg:text-left'>
          Hi, I'm{' '}
          <span className='text-3xl font-bold text-center lg:text-left xl:-mt-2 xl:pl-3 sm:text-5xl text-secondary dark:text-skyblue drop-shadow-3xl'>
            Aubis Sanchez
          </span>
        </h1>
        <h3 className='text-lg sm:text-3xl flex text-title font-bold text-light_secondary dark:text-cyan-100 lg:max-w-[350px] rounded-xl pb-4  justify-center lg:justify-normal lg:text-left'>
          Frontend Developer
        </h3>
        <p className=' w-full sm:w-4/5 text-xs sm:text-sm lg:text-lg text-gray-600 dark:text-white z-[500] text-center md:text-left m-auto lg:m-0'>
          Technology enthusiast and web developer. Eager to work for creating or
          maintaining projects. Focused on modern, clean and attrative webs
          pages for any device{' '}
          <button
            className='text-center text-gray-700 duration-300 sm:text-left dark:text-gray-300 hover:text-dark_orange dark:hover:text-skyblue'
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
