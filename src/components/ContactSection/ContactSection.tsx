import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motions'
import { ContactForm } from './components'
import Divider from '../Divider'
import ContactIlustration from '@/assets/svg/sending-emails.svg'
import { Direction } from '@/types.d'

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='w-full h-screen m-auto h-min-screen bg-gray-200 dark:bg-lightgray pt-[60rem] sm:pt-0 sm:-mt-[3rem] flex flex-col lg:flex-row items-center justify-center z-[100]'
    >
      <motion.div
        variants={fadeIn({
          direction: Direction.left,
          type: 'spring',
          delay: 0.3,
          duration: 1
        })}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-col items-center lg:flex-col mt-[10rem] lg:mt-0'
      >
        <h3 className='flex flex-col w-4/5 text-3xl font-bold text-center text-gray-700 sm:w-full lg:text-4xl dark:text-white '>
          <span>Wanna get in touch?</span>{' '}
          <span>Contact me by filling this form!</span>
        </h3>
        <Divider />
        <img
          src={ContactIlustration}
          alt='contact ilustration'
          className='-mt-10 '
        />
      </motion.div>
      <ContactForm />
    </section>
  )
}

export default ContactSection
