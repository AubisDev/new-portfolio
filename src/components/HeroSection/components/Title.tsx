import PersonalLinks from './PersonalLinks'
import { motion } from 'framer-motion'

const Title = (): React.JSX.Element => {
  return (
    <section className='flex flex-col'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className='pb-4 text-6xl font-bold text-title text-white_text '>
          Hi I'm <span className='shineText'>Aubis Sanchez</span>
        </h1>
        <h3 className='text-3xl flex text-title font-bold text-white_text max-w-[300px] rounded-xl pb-3  '>
          Frontend Developer
        </h3>
        <p className='w-4/5 pt-4 text-base text-white text-normal '>
          There's nothing like threatening to go live with a bunch of Bill
          Murray pictures on a website to 'encourage' your clients to send you
          their content faster
        </p>
        <PersonalLinks />
      </motion.div>
    </section>
  )
}
export default Title
