import PersonalLinks from './PersonalLinks'
import { motion } from 'framer-motion'

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
        <h1 className='pb-4 text-4xl font-bold text-title text-white '>
          Hi, I'm{' '}
          <span className='text-5xl text-skyblue drop-shadow-3xl'>
            Aubis Sanchez
          </span>
        </h1>
        <h3 className='text-3xl flex text-title font-bold text-[#7affc3]/90 max-w-[300px] rounded-xl pb-4  '>
          Frontend Developer
        </h3>
        <p className='w-4/5 text-base text-white text-normal '>
          There's nothing like threatening to go live with a bunch of Bill
          Murray pictures on a website to 'encourage' your clients to send you
          their content faster
        </p>
        <PersonalLinks />
      </motion.div>
    </motion.section>
  )
}
export default Title
