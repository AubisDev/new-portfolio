import { motion } from 'framer-motion'
import Divider from '../Divider'
import ContactIlustration from '@/assets/svg/sending-emails.svg'
import { slideIn } from '@/utils/motions'
import ContactForm from './components/ContactForm'

const ContactSection = () => {
  return (
    <section
      id='contact'
      className='w-full h-screen m-auto h-min-screen bg-gray-200 dark:bg-lightgray -mt-[7rem] flex flex-col lg:flex-row items-center justify-center z-[100]'
    >
      <motion.div
        variants={slideIn('left', 'spring', 0.3, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-col items-center lg:flex-col '
      >
        <h3 className='flex flex-col text-3xl font-bold text-center text-gray-700 lg:text-4xl dark:text-white'>
          <span>Wanna get in touch?</span> <span>Contact me!</span>
        </h3>
        <Divider />
        <img
          src={ContactIlustration}
          alt='contact ilustration'
          className='-mt-10'
        />
      </motion.div>
      <ContactForm />
    </section>
  )
}

export default ContactSection
